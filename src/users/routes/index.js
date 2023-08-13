const express = require ("express");
const userPreferences = require("../controllers/user");
const authController = require("../controllers/auth");
const userValidator = require("../../middleware/validator");
const  verifyToken =  require("../../middleware/verifyToken");
const router = express.Router();
const verifyJwt = verifyToken.verifyJwt();

router.post('/register', authController.userRegister);
router.post('/login', authController.userLogin);

router.get('/preferences', verifyJwt, userPreferences.getUSerPreferences);


router.put('/preferences', verifyJwt, userPreferences.updateUSerPreferences);

module.exports = {
    router 
}