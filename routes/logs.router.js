const express = require('express');

const {config} = require('../config/config');

const LogService = require('../services/log.service')

const router = express.Router();

//creamos un objeto e inciializamos para poder usar sus metodos
const service = new LogService();

router.get('/',async  (req, res, next) => {
    const users = await service.find();
    res.json(users);
});

module.exports = router;