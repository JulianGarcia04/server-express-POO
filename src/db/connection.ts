import Config from "./db.config";

class connection extends Config {
    async connection(){
        try {
            await this.autenticate();
            console.log('Conected to database with MongoDB');
        } catch (error) {
            console.log(error);
        }
    }
}

new connection().connection();

