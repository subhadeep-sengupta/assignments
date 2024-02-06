const { Router } = require("express");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { Admin, Course } = require("../db");
=======
const { Admin } = require("../db");
>>>>>>> d4b8d0f (mongo done)
=======
const { Admin, Course } = require("../db");
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
const { Admin, Course } = require("../db");
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const admin = await Admin.create({
=======
  await Admin.create({
>>>>>>> d4b8d0f (mongo done)
=======
  const admin = await Admin.create({
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
  const admin = await Admin.create({
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
    username: username,
    password: password,
  });
  res.status(200).json({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    message: `Admin created successfully, username: ${admin.username}`,
=======
    message: `Admin created successfully, username: ${Admin.username}`,
>>>>>>> d4b8d0f (mongo done)
=======
    message: `Admin created successfully, username: ${admin.username}`,
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
    message: `Admin created successfully, username: ${admin.username}`,
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
  });
});
router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
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
<<<<<<< HEAD
=======
  await Admin.findOne({
=======
  const user = await Admin.findOne({
>>>>>>> ba5556f (mongo-with-jwt-auth done)
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

<<<<<<< HEAD
router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
>>>>>>> d4b8d0f (mongo done)
});

=======
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
});

>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
module.exports = router;
