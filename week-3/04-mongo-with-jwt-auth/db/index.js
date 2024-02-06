const mongoose = require("mongoose");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
const { connection } = require("../config");

// Connect to MongoDB
mongoose.connect(connection);
<<<<<<< HEAD
=======

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://subhadeepsengupta:9SWN0Bj1OR5vvtcz@cluster0.npktvgx.mongodb.net/course-selling-app"
);
>>>>>>> d4b8d0f (mongo done)
=======
const { connection } = require("../config");

// Connect to MongoDB
mongoose.connect(connection);
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
  username: String,
  password: String,
  purchasedCourse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d4b8d0f (mongo done)
=======
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
  title: String,
  description: String,
  price: Number,
  imageLink: String,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d4b8d0f (mongo done)
=======
>>>>>>> ba5556f (mongo-with-jwt-auth done)
=======
>>>>>>> e0d6f782d5f9e61dd7b2bf030da65bb0ebd97f2a
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
