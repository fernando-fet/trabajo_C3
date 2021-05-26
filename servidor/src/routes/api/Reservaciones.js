const express = require('express');
const routes = express.Router();
const reservacionesControlles = require('../../Controllers/reservacionesControlles')

routes.get('/api/listarReservas',reservacionesControlles.listarReservas);
routes.post('/api/agregarReservas',reservacionesControlles.AgregarReservas);
routes.delete('/api/EliminarReservas/:id',reservacionesControlles.EliminaReservas);
routes.put('/api/ModificarReservas/:id',reservacionesControlles.ModifiReservas);



module.exports = routes
