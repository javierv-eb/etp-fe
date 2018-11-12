require('dotenv').load();
const express = require('express');
const path = require('path');

let server;

class AppServer {
    constructor() {
        this.app = express();
        this.initMiddleWare();
        this.startServer();
    }

    initMiddleWare() {
        this.app.use(
            '/',
            express.static(
                path.join(`${__dirname}/public`)
            )
        );
    }

    startServer() {
        this.app.listen(
            process.env.ETP_FE_SERVER_PORT,
            () => console.log(`your server up and runnig in port ${process.env.ETP_FE_SERVER_PORT}`)
        );
    }
    
    get application() {
        return this.app;
    }
};


module.exports = {
    getInstance: () => {
        if (server) {
            return server;
        }
        server = new AppServer();
        return server;
    }
}
