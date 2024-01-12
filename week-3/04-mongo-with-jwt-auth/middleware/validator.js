const zod = require("zod");

function courseSchema(req, res, next) {
  console.log("Reached courseSchema");
  const course = zod.object({
    title: zod.string(),
    description: zod.string(),
    price: zod.number(),
    imageLink: zod.string(),
  });
  console.log("before check");
  const check = course.safeParse({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  });
  console.log("After check");
  if (check) {
    next();
  } else {
    res.status(411).send(`Wrong input format`);
  }
}
module.exports = courseSchema;
