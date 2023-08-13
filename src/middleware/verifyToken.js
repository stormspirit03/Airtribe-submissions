const Jwt = require('jsonwebtoken');
const User = require('../users/models/user.js');

const verifyJwt = async (req, res, next) => {
   try {
        console.log(' inside verify jwt');
        if (req.headers && req.headers.authorization) { 
            const token = req.headers.authorization.split(' ')[1] // remove Bearer keyword from auth token
            Jwt.verify(token, process.env.API_SECRET, async (err, decodedValue) => {
                try {
                    if (!err) {
                        console.log('inside verified token ....');
                        const user = await User.findOne({ _id: decodedValue.id });
                        req.user = user;
                        console.log("decoded user", req.user);
                        next(); 
                    } else {
                        console.log(`inside error`);
                        console.log(err);
                        req.user = undefined;
                        res.status(500).send(err);
                        throw err;
                    }
                    
                } catch (err) {
                    res.status(500).send(error);
                }
            });
        } else {
            req.user = undefined;
            res.message = 'Authorization header not found';
            console.log(res.message);
            res.status(500).send(res.message);
            throw error;
        }
   } catch (error) {
        console.log(error);
        res.status(500).send(error);
        throw error;
   }
};

module.exports = verifyJwt;
