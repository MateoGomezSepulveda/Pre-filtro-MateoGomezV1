const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.js');

class Server{
    constructor(){
        this.app = express();

        this.port = process.env.PORT

        this.paths = {
            refugioPath: '/api/refugios',
            animalPath: '/api/animales',
            adoptantePath: '/api/adoptantes',
            veterinarioPath: '/api/veterinarios',
            donantePath: '/api/donantes',
            donacionPath: '/api/donaciones'
        }

        this.middlewares();

        this.connectDB();

        this.routes();
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(express.json());

        this.app.use(cors());
    }
    routes(){
        this.app.use(this.paths.refugioPath, require('../routes/refugio.routes.js'));
        this.app.use(this.paths.animalPath, require('../routes/animal.routes.js'));
        this.app.use(this.paths.adoptantePath, require('../routes/adoptante.routes.js'));
        this.app.use(this.paths.veterinarioPath, require('../routes/veterinario.routes.js'));
        this.app.use(this.paths.donantePath, require('../routes/donante.routes.js'));
        this.app.use(this.paths.donacionPath, require('../routes/donacion.routes.js'));

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`El servidor esta conectado en el puerto: ${this.port}`);
        })
    }
}

module.exports = Server;


