import mongoose from 'mongoose';

abstract class Config {
    private _configConnection:any = mongoose.connect('mongodb://localhost:27017/distrilida')

    protected async autenticate(){
        if (this._configConnection) {
            return await this._configConnection;
        }else {
            throw new Error("Error the connected to database");
        }
    }

    get configConnection(){
        return this._configConnection;
    }
}

export default Config;