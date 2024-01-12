const { Router } = require("express");
const { Admin } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });
  res.status(200).json({
    message: `Admin created successfully, username: ${Admin.username}`,
  });
});
router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.findOne({
    username: username,
    password: password,
  }).then((value) => {
    const token = jwt.sign(
      { username: value.username, password: value.password },
      JWT_SECRET
    );
    res.status(200).json({
      message: `Your token has been created`,
      token: token,
    });
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
