const express = require('express');
const routes = express.Router();
const pedidosControlles = require('../../Controllers/pedidosControlles')

routes.get('/api/ListPedidos',pedidosControlles.listarPedidos);
routes.post('/api/agregarPedidos',pedidosControlles.AgregarPedidos);
routes.delete('/api/EliminarPedidos/:id',pedidosControlles.EliminaPedidos);
routes.put('/api/ModificarPedidos/:id',pedidosControlles.ModificarPedidos);



module.exports = routes
