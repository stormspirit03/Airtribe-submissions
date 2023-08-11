const Joi = require ('joi');


function userValidator(req,res,next) {
    try {
        const UserSchema = Joi.object({
            id: Joi.string(),
            email: Joi.string().email().required(),
            fullName: Joi.string().required(),
            password: Joi.string().required(),
            createdAt: Joi.date(),
            updatedAt: Joi.date()
          });
        const {error} = UserSchema.validate(req.body);
        if (error) {
            console.log(error);
            res.status(500).send(error.details[0].message);
            throw error;
        }
        else {
            next();
        }
    } catch (error) {
        console.log("User registration request validation error..");
        throw error;
    }
}

module.exports =  userValidator;