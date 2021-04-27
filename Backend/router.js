//Requerimos de express el método Router
const router = require('express').Router();

const userRouter = require("./routes/user-router");
const productRouter = require("./routes/product-router");
const orderRouter = require("./routes/order-router");

router.use("/users",userRouter);
router.use("/products",productRouter);
router.use("/orders",orderRouter);

module.exports = router;