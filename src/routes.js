//const { Router } = require('express');
import { Router } from 'express';

import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from './controllers/SessionController'
import HotelController from './controllers/HotelController'
import ReservaController from './controllers/ReservaController'

const routes = new Router();
const upload = multer(uploadConfig);

//Rotas referentes a sessões de usuários
routes.get('/sessao', SessionController.index);
routes.post('/sessao', SessionController.store);
routes.put('/sessao', SessionController.update);
routes.delete('/sessao/:usuario_id', SessionController.destroy);

//Rotas referentes a manutenções de hoteis
routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', upload.single('imagem'), HotelController.store);
routes.put('/hoteis/:hotel_id', HotelController.update);
routes.delete('/hoteis/:hotel_id', HotelController.destroy);
//Não está funcionando 
//routes.get('/hoteis/:hotel_id', HotelController.show);

//rotas referentes a reservas
routes.get('/hoteis/:usuario_id', ReservaController.index);
routes.post('/hoteis/:hotel_id/reserva', ReservaController.store);
//Não está funcionando 
//routes.get('/sessao/:usuario_id/reserva', ReservaController.show);
//routes.put('/reserva/:id', ReservaController.update);
//routes.delete('/reserva/:id', ReservaController.destroy);


export default routes;
//module.exports = routes;