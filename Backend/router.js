//Requerimos de express el método Router
const router = require('express').Router();

const userRouter = require("./routes/user-router");
const productRouter = require("./routes/product-router");

router.use("/users",userRouter);
router.use("/products",productRouter);


module.exports = router;