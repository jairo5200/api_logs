// importamos Model DataTypes y Sequelize para poder utilizarlos
const {Model, DataTypes, Sequelize} = require('sequelize');

// Creamos un nombre para la tabla de logs
const LOG_TABLE = 'logs';
// Creamos un esquema para la tabla de logs
const logSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
    date:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    method:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    responseTime:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'response_time',
    },
    contentLength:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'content_length'
    },
    // Creamos un campo para la fecha de creación
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    }
}

class Log extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: LOG_TABLE,
            modelName: 'Log',
            timestamps: false,
        }
    }
}

// importamos el nombre de la tabla, su esquema y la clase User para que puedan ser utilizados en otros archivos
module.exports = {LOG_TABLE,logSchema,Log};