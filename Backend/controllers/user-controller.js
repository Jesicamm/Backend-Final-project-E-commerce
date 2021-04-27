const User = require("../models/user-model");

const bcrypt = require('bcryptjs');

class UserController {
    constructor() {}

    //Mostrar todos los user
    async showAllUsers(users) {
        return User.find(users);
    };

    
    async Register(user) {
        user.password = await bcrypt.hash(user.password, 5)
        return User.create(user);
    };


};


const userController = new UserController();
module.exports = userController;