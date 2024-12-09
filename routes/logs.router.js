const express = require('express');
const {config} = require('../config/config');
const LogService = require('../services/log.service');
const router = express.Router();
const validatorHandler = require('../middlewares/validator.handler');
const {createLogSchema,getLogSchema} = require('../schemas/log.schema');

//creamos un objeto e inciializamos para poder usar sus metodos
const service = new LogService();

// ruta para listar los logs
router.get('/',
    async  (req, res, next) => {
        const users = await service.find();
        res.json(users);
});


// ruta para crear un log
router.post('/',
    validatorHandler(createLogSchema,'body'),
    async  (req, res, next) => {
        const body = req.body;
        const newUser = await service.create(body);
        res.status(201).json(newUser);
});

// ruta para eliminar un log dado un id
router.delete('/:id', 
    validatorHandler(getLogSchema,'params'),
    async  (req, res, next) => {
        try {
            const user = await service.delete(req.params.id);
            res.json(user);
        } catch (error) {
            next(error);
        }
});

//exportamos la ruta para utilizarla en el inde3x de rutas
module.exports = router;