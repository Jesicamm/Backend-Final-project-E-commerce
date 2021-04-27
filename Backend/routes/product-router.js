
const router = require('express').Router();

const productController = require("../controllers/product-controller");

//get all products
router.get('/', async (req, res) => {
    try{
        res.json(await productController.indexAll())

    } catch (error) {
        return res.Status(500).json({
            message: "Server Error"
        });

    }

});

//Create a product
router.post('/', async(req, res)=>{
    try{
        const createProduct = await productController.createProduct(req.body);
        res
        .status(200)
        .json(createProduct);

    }catch(error){
        return res.status(500).json({
            message: "Server Error"
        });
    };
});




module.exports = router;