const express = require('express');

const {config} = require('../config/config');

const LogService = require('../services/log.service')

const router = express.Router();

//creamos un objeto e inciializamos para poder usar sus metodos
const service = new LogService();

router.get('/',
    async  (req, res, next) => {
        const users = await service.find();
        res.json(users);
});

router.post('/',
    async  (req, res, next) => {
        const body = req.body;
        const newUser = await service.create(body);
        res.status(201).json(newUser);
});

router.delete('/:id', 
    async  (req, res, next) => {
        try {
            const user = await service.delete(req.params.id);
            res.json(user);
        } catch (error) {
            next(error);
        }
});

module.exports = router;