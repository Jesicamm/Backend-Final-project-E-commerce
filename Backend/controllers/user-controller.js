
const User = require("../models/user-model");


const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'unapalabrasecreta';


class UserController {
    constructor() {}

    //Show all user
    async showAllUsers(users) {
        return User.find(users);
    };

    //Register function
    async Register(user) {
        user.password = await bcrypt.hash(user.password, 5)
        return User.create(user);
    };

    // Login function
    async login(email, password) {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error('Email does not exist')
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new Error('Password incorrect')
        }

        const payload = {
            userId: user.id,
            tokenCreationDate: new Date,
        }

        const token = jwt.sign(payload, secret);
        return { token, user }
    };

        //Actualizar user por Id
        async updateUser(id, user) {
            return User.findByIdAndUpdate(id, user, { new: true });
        };
    
        //Eliminar user por Id
        async destroy(id) {
            return User.findByIdAndRemove(id);
        };



};


const userController = new UserController();
module.exports = userController;