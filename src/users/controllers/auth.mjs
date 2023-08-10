import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import User from '../models/user';

const userRegister = async (req, res) => {
   try {
        const {
            fullname, 
            email,
            preferences
        } = req.body;
        const password = bcrypt.hashSync(req.body.password, 8);
        const user = new User({
            fullname,
            email,
            preferences,
            password
        });
        await user.save();
        res.status(200).send('Registration successful. ');
   } catch (error) {
        console.log('User registration failed.');
        throw error;
   }
};

export default userRegister;
