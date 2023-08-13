const express = require ("express");
const userPreferences = require("../controllers/user");
const authController = require("../controllers/auth");
const userValidator = require("../../middleware/validator");
const  verifyJwt =  require("../../middleware/verifyToken");
const router = express.Router();


router.post('/register', authController.userRegister);
router.post('/login', authController.userLogin);

router.get('/preferences', verifyJwt, userPreferences.getUserPreferences);


router.put('/preferences', verifyJwt, userPreferences.updateUserPreferences);

module.exports = {
    router 
}