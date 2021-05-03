//Requerimos de la librería express el método router
const router = require("express").Router();
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth')

//importamos el controlador de user
const userController = require("../controllers/user-controller")

//Show all users
router.get("/", auth, async(req, res) => {
    try {
        res.json(await userController.showAllUsers());

    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        });
    };
});

//Register 
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


//Login
router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const jwt = await userController.login(email, password);
        res.json({ jwt })
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
});

//Delete user by Id
router.delete("/:id", auth, async(req, res) => {
    try {
        const id = req.params.id;
        const status = "deleted";
        await userController.destroy(id);
        res.json({status});
    } catch (err) {
        return res.status(500).json({
            message: "Server error" + err 
        });

    };
});

//Update User
router.put("/:id", auth, async(req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await userController.updateUser(id, req.body);
        res.status(200).json(updatedUser);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;