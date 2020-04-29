/*  const express = require('express');
    const routes = require('./routes'); */
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';


class App {
    constructor(){
        this.app = express();

        mongoose.connect('mongodb+srv://web202001:web202001@web-2020-01-of065.mongodb.net/test?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            });

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(routes);
    }
}

export default new App().app;
//module.exports = new App().app;