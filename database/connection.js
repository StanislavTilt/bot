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
            this.listDatabases(this.connection)
            console.log('db connection succeed');
        }
        catch (e) {
            console.log('db connection failed');
        }
    }

    listDatabases(client){
        this.databasesList = client.db().admin().listDatabases();

        console.log("Databases:");
        this.databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    };

    static getInstance() {
        return this._instance;
    }
}

module.exports = DatabaseConnection;