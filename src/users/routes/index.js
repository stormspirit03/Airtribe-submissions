const express = require ("express");
const authController = require("../../users/controllers/auth");
const userValidator = require("../../middleware/validator");
const router = express.Router();

router.post('/register', authController.userRegister);
router.post('/login', authController.userLogin);

module.exports = {
    router 
}