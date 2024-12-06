/* const {models} = require('../libs/sequelize'); */

class LogService{

    constructor(){
        this.Log = [];
    }

    async find(){
        return this.Log;
    }

    async create(data){
        this.Log.push(data);
        return(data);
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