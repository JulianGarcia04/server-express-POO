import App from "./app";

abstract class Config extends App {
    constructor() {
        super()

        this.app.set('PORT', 8000);
    }
}

export default Config;