const { MongoClient } = require("mongodb");

class DatabaseConnection {
    constructor(uri) {
        if (!DatabaseConnection._instance) {
            DatabaseConnection._instance = this;
        }
        this.setDbUri(uri);
        this.setConnection();
        return DatabaseConnection._instance;
    }

    setDbUri(uri)
    {
        this.dbUri = uri;
    }

    setConnection()
    {
        this.connection = this.dbUri !== '' ?  new MongoClient(this.dbUri) : null;
        if(!this.connection) return;

        try {
            this.connection.connect()
            console.log('db connection succeed');
        }
        catch (e) {
            this.connection.close();
            console.log('db connection failed');
            console.log(e.message);
        }
    }

    static getInstance() {
        return this._instance;
    }
}

module.exports = DatabaseConnection;