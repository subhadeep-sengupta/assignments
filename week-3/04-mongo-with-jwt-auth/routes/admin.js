const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const courseSchema = require("../middleware/validator");
const router = Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.create({
    username: username,
    password: password,
  });
  res.status(200).json({
    message: `Admin created successfully, username: ${admin.username}`,
  });
});
router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await Admin.findOne({
    username: username,
    password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username: username,
        password: password,
      },
      JWT_SECRET
    );
    res.status(200).json({
      message: `You are signed in`,
      token: token,
    });
  } else {
    res.status(411).send(`Wrong email or password`);
  }
});

router.post("/courses", adminMiddleware, courseSchema, async (req, res) => {
  // Implement course creation logic
  const token = req.headers.authorization;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const verfiedToken = jwt.verify(token, JWT_SECRET);
  if (verfiedToken) {
    const newCourse = await Course.create({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
    });
    res.status(200).json({
      message: `Your course has been created`,
      courseId: newCourse._id,
    });
  } else {
    res.status(404).json({
      message: `Admin does not exist`,
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});

  res.status(200).json({
    course: courses,
  });
});

module.exports = router;
