import {Sequelize} from 'sequelize';

abstract class Config {
    private _configConnection:Sequelize = new Sequelize('DistriLida', 'root', '',{
        dialect: 'mysql',
        host : 'localhost',
        port: 3306
    })

    protected async autenticate(){
        await this._configConnection.authenticate();
    }

    get configConnection(){
        return this._configConnection;
    }
}

export default Config;