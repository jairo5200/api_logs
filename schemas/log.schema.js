const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email().min(1).max(50);
const date = Joi.date();
const method = Joi.string();
const url = Joi.string();
const status = Joi.number().integer();
const responseTime = Joi.string();
const contentLength = Joi.string();

const createLogSchema = Joi.object({
    email: email.required(),
    date: date.required(),
    method: method.required(),
    url: url.required(),
    status: status.required(),
    responseTime: responseTime.required(),
    contentLength: contentLength.required(),
});

const getLogSchema = Joi.object({
    id: id.required(),
});

module.exports = {createLogSchema,getLogSchema};