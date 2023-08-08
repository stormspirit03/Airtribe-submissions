import Joi from 'joi';


function registration(res,res,next) {
    try {
        const UserSchema = Joi.object({
            id: Joi.string(),
            email: Joi.string().email().required(),
            name: Joi.string().required(),
            password: Joi.string().required(),
            createdAt: Joi.date(),
            updatedAt: Joi.date()
          });
        const {error} = UserSchema.validate(req.body);
        if error throw error;
        else next();
    } catch (error) {
        console.log("User registration request validation error..");
        throw error;
    }
}

export registration;