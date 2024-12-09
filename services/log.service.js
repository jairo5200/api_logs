/* const {models} = require('../libs/sequelize'); */
const {models} = require('../libs/sequelize');
const boom =  require('@hapi/boom');
class LogService{

    constructor(){
    }

    async find(){
        const logs = await models.Log.findAll();
        return logs;
    }

    async create(data){
        const log = await models.Log.create(data);
        return log;
    }

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

module.exports = LogService;