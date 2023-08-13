const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
const User = require('../models/user');
const { MongoServerError } = require('mongodb'); // Import the MongoServerError class


const userRegister = async (req, res) => {
   try {
        const {
            fullName, 
            email,
            preferences
        } = req.body;
        const password = bcrypt.hashSync(req.body.password, 8);
        const user = new User({
            fullName,
            email,
            preferences,
            password
        });
        await user.save();
        res.status(200).send('Registration successful. ');
   } catch (error) {
        console.log('User registration failed.');
        if (error.code === 11000) {
            res.status(400).json({ error: 'Email already exists.' });
          } else {
            res.status(500).json({ error: 'Internal server error' });
          }
        throw error;
   }
};

const userLogin = async (req, res) => {
   try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: 'Invalid Password'
            })
        }
        let token = Jwt.sign({
            name: user.fullName,
            email:user.email,
            id: user.id,
        }, process.env.API_SECRET, {
            expiresIn: 999999
        });
        console.log(`token , ${token}`);
        let returnObject = {
            user: {
                user: user._id,
                email: user.email,
                fullName: user.fullName
            },
            message: 'Login Successful',
            accessToken: token
        }

        return res.status(200).send(returnObject);
   } catch (error) {
        console.log("login error", error);
        res.status(500).send(error);
        throw error;
   }
}
module.exports = {
        userRegister,
        userLogin
};

