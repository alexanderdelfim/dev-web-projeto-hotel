//const { Router } = require('express');
import { Router } from 'express';

import SessionController from './controllers/SessionController'
import HotelController from './controllers/HotelController'
import ReservaController from './controllers/ReservaController'

const routes = new Router();

//Rotas referentes a sessões de usuários
routes.get('/sessao', SessionController.index);
routes.get('/sessao/:id', SessionController.show);
routes.post('/sessao', SessionController.store);
routes.put('/sessao/:id', SessionController.update);
routes.delete('/sessao/:id', SessionController.destroy);

//Rotas referentes a manutenções de hoteis
routes.get('/hoteis', HotelController.index);
routes.get('/hoteis/:id', HotelController.show);
routes.post('/hoteis', HotelController.store);
routes.put('/hoteis/:id', HotelController.update);
routes.delete('/hoteis/:id', HotelController.destroy);

//rotas referentes a reservas
routes.get('/reserva', ReservaController.index);
routes.get('/reserva/:id', ReservaController.show);
routes.post('/reserva', ReservaController.store);
routes.put('/reserva/:id', ReservaController.update);
routes.delete('/reserva/:id', ReservaController.destroy);




export default routes;
//module.exports = routes;