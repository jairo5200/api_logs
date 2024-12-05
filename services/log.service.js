/* const {models} = require('../libs/sequelize'); */

class LogService{

    constructor(){
        this.Log = [{
            id: 1,
            message: 'Log message',
        },
        {
            id: 2,
            message: 'Another log message',
        },
        {
            id: 3,
            message: 'Yet another log message',
        }
    ]
    }

    async find(){
        return this.Log;
    }
}

module.exports = LogService;