const router = require("express").Router();
const jwt = require('jsonwebtoken');

const userController = require("../controllers/user-controller")

//Show all users
router.get("/", async(req, res) => {
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


});

module.exports = router;