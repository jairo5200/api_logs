// importamos el modulo del modelo de logs para incializarlo
const {Log, logSchema} = require('./log.model')


function setupModels(sequelize){
    // definimos el modelo de logs
    Log.init(logSchema, Log.config(sequelize));
}



module.exports = {setupModels};