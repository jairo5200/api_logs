const boom = require('@hapi/boom');

// funcion que valida ls datos enviados en referencia a los esquemas que creamos en Joi
function validatorHandler(schema, property){
    return (req,res,next) => {
        const data = req[property]
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            next(boom.badRequest(error));
        }
        next();
    }
}

// exportamos la funcion para utilizarla en las rutas
module.exports = validatorHandler;