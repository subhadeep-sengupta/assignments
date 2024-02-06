const { Router } = require("express");
const { User, Course } = require("../db");
<<<<<<< HEAD
const { User, Course } = require("../db");
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username: username,
    password: password,
  });
  res.status(200).send({
    message: "User created successfully",
  });
<<<<<<< HEAD
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username: username,
    password: password,
  });
  res.status(200).send({
    message: "User created successfully",
  });
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find();
    res.status(200).json({
      couses: courses,
    });
  } catch (error) {
    res.status(404).send();
  }
<<<<<<< HEAD
router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find();
    res.status(200).json({
      couses: courses,
    });
  } catch (error) {
    res.status(404).send();
  }
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourse: courseId,
      },
    }
  );
  res.status(200).send({
    message: `Course purchased successfully${courseId}`,
  });
<<<<<<< HEAD
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourse: courseId,
      },
    }
  );
  res.status(200).send({
    message: `Course purchased successfully${courseId}`,
  });
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  }).populate(purchasedCourse);

<<<<<<< HEAD
<<<<<<< HEAD
  res.status(200).json({
    course: user.purchasedCourse,
  });
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });
  console.log(user.purchasedCourses);
  const course = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
=======
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
  res.status(200).json({
    course: user.purchasedCourse,
  });
});

module.exports = router;
<<<<<<< HEAD

module.exports = router;
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
