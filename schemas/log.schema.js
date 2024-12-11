const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email().min(1).max(50);
const date = Joi.string();
const method = Joi.string();
const url = Joi.string();
const status = Joi.number().integer();



// esquema usado para la busqueda de un log por id
const getLogSchema = Joi.object({
    id: id.required(),
});

//exportamos los esquemas para ser usados en las validaciones
module.exports = {getLogSchema};