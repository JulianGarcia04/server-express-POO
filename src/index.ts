import Config from "./index.config";
import './db/connection';

class Server extends Config {
    private _PORT:number = this.app.get('PORT');
    listen(){
        this.app.listen(this._PORT, ()=>{
            console.log('Server to listen with port '+ this._PORT);
        })
    }
}

new Server().listen();

// //routes
// app.get('/', (req, res)=>{
//     //Services
//     res.send('hello world!!');
// })
