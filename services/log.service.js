/* const {models} = require('../libs/sequelize'); */
const {models} = require('../libs/sequelize');
const boom =  require('@hapi/boom');
class LogService{

    constructor(){
    }
    // funcion que retorna todos los logs
    async find(){
        const logs = await models.Log.findAll();
        return logs;
    }

    // funcion que crea un log
    async create(data){
        const log = await models.Log.create(data);
        return log;
    }

    // funcion que elimina un log dado el id
    async delete(id){
        const log = await models.Log.findOne({where:{id:id}})
        if (!log) {
            throw boom.notFound('log not found');
        }
        await log.destroy();
        const rta = {
            message: "log deleted",
            id: id,
        }
        return rta;
    }
}

// exportamos el servicio de logs para ser usado en las rutas
module.exports = LogService;