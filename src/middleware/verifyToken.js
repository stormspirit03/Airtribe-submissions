const Jwt = require('jsonwebtoken');
const User = require('../users/models/user.js');

const verifyJwt = async (req, res, next) => {
   try {
        if (req.headers && req.headers.authorization) { // Corrected typo in "headers"
            Jwt.verify(req.headers.authorization, process.env.API_SECRET, async (err, decodedValue) => {
                try {
                    if (err) {
                        req.user = undefined;
                    } else {
                        const user = await User.findOne({ _id: decodedValue.id });
                        req.user = user;
                    }
                    next();
                } catch (error) {
                    res.status(500).send(error);
                }
            });
        } else {
            req.user = undefined;
            res.message = 'Authorization header not found';
            next();
        }
   } catch (error) {
        console.log(error);
        res.status(500).send(error);
        throw error;
   }
};

module.exports = verifyJwt;
