
const router = require('express').Router();

const productController = require("../controllers/product-controller");

const auth = require('../middlewares/auth')

//get all products
router.get('/',  async (req, res) => {
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

router.delete("/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        const status = "deleted";
        await productController.destroy(id);
        res.json({status, id});

    }catch(error){
        return res.status(500).json({
            message: "Server error"
        });

    };
});






module.exports = router;