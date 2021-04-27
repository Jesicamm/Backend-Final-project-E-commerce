//Requerimos de express el método Router
const router = require('express').Router();

const userRouter = require("./routes/user-router");

router.use("/users",userRouter);


module.exports = router;