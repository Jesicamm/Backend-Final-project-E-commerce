const router = require("express").Router();


//importamos el controlador de user
const userController = require("../controllers/user-controller")

//traecr todos los users
router.get("/", async(req, res) => {
    try {
        res.json(await userController.showAllUsers());

    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    };
});

//Crear un user
router.post("/", async(req, res) => {
    try {
        const user = await userController.Register(req.body);
        const status = "Success";
        res.json({ status, user });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };


});

module.exports = router;