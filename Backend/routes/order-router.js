
const router = require("express").Router();
const orderController = require("../controllers/order-controller");
const auth = require('../middlewares/auth')

//Create a new order
router.post('/',   async (req, res) => {
    try{
        const order = await orderController.buy(req.body.userId, req.body.productId);
        const status = 'success';
        res.json({status,order});
    } catch( error ){
        return res.status(404).json(
        );
    };
});
//Find all orders
router.get('/',  async (req, res)=>{
    try{
        res.json(await orderController.showAllOrders());
    }catch(error){
        return res.status(404).json({
            message: "Orders not found"
        });
    };
});

module.exports = router;