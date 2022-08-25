import express, {Express} from 'express';

class App  {
    private _app:Express = express();

    get app(){
        return this._app;
    }
}

export default App;