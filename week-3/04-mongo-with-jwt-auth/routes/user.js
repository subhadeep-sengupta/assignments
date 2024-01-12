const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const newUser = await User.create({
    username: username,
    password: password,
  });
  res.status(200).json({
    message: `User created successfully`,
    userId: newUser._id,
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({
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
      token: token,
    });
  } else {
    res.status(404).json({
      message: `User does not exist`,
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const token = req.headers.authorization;
  const username = req.headers.username;
  const password = req.headers.password;
  const courseId = req.params.courseId;
  const verifiedToken = jwt.verify(token, JWT_SECRET);
  if (verifiedToken) {
    const course = await User.updateOne(
      {
        username: username,
        password: password,
      },
      {
        $push: {
          purchasedCourse: courseId,
        },
      }
    );
    res.status(200).json({
      message: `Course purchased successfully`,
      courseId: course.purchasedCourse,
    });
  } else {
    res.status(404).json({
      message: `User is not signed in`,
    });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const password = req.headers.password;
  console.log(username);
  console.log(password);

  try {
    const user = await User.findOne({
      username: username,
      password: password,
    }).populate("purchasedCourse"); // Adjust 'purchasedCourse' based on your schema

    console.log("Finding User");

    if (user) {
      console.log("User found");
      console.log("Courses found", user.purchasedCourse); // Assuming 'purchasedCourse' is the correct field
      res.status(200).json({
        course: user.purchasedCourse, // Adjust based on your schema
      });
    } else {
      console.log("Could not find User");
      res.status(404).json({
        message: `User does not exist`,
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
