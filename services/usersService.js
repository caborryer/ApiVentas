const MongoLib = require('../lib/mongo');

class Users {
    constructor() {
        this.colection = 'users';
        this.mongoDB = new MongoLib();
    }

    async createUser({ email, name, ... }) {
        const query = { email, name, ...}
        const createUser = await this.mongoDB.create(this.colection);
        return createUser
    }

}