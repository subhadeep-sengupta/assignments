const mongoose = require("mongoose");
<<<<<<< HEAD
const { connection } = require("../config");

// Connect to MongoDB
mongoose.connect(connection);
=======

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://subhadeepsengupta:9SWN0Bj1OR5vvtcz@cluster0.npktvgx.mongodb.net/course-selling-app"
);
>>>>>>> d4b8d0f (mongo done)

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
<<<<<<< HEAD
  username: String,
  password: String,
  purchasedCourse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
=======
>>>>>>> d4b8d0f (mongo done)
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
<<<<<<< HEAD
  title: String,
  description: String,
  price: Number,
  imageLink: String,
=======
>>>>>>> d4b8d0f (mongo done)
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
