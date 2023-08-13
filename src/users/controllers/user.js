const Jwt = require('jsonwebtoken');
const User = require('../models/user');

async function updateUserPreferences(req,res){
    try {
        const {preferences} = req.body;
        await User.findByIdAndUpdate( req.user._id,{
            preferences
        });
        res.status(200).send('Preferences updated.');
    } catch (error) {
        res.status(500).send(error);
        throw error;
    }
}


async function getUserPreferences(req,res){
    try {
        const user = await User.findOne( {email: req.user.email });
        res.status(201).send(user.preferences);
    } catch (error) {
        res.status(500).send(error);
        throw error;
    }
}

module.exports = {
    updateUserPreferences,
    getUserPreferences,
}