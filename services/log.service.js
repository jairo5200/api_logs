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

    async create(data){
        const log = this.Log.find((log) => log.id === data.id);
        if (log) {
            log.message = data.message
            } else
            {
                this.Log.push(data);
                }
                return data;
    }

    async delete(id){
        const index = this.Log.findIndex((log) => log.id == id);
        if (index !== -1) {
            this.Log.splice(index, 1);
            }
            return { message: 'Log deleted' };
    }
}

module.exports = LogService;