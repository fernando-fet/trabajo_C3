const express = require('express');
const routes = express.Router();
const EventosConttolles = require('../../Controllers/EventosControlles')

routes.get('/api/listarEventos',EventosConttolles.listarEventos);
routes.post('/api/agregarEventos',EventosConttolles.cargarEventos);
routes.delete('/api/EliminarEventos/:id',EventosConttolles.EliminaEventos);
routes.put('/api/ModificarEventos/:id',EventosConttolles.ModificarEvento);



module.exports = routes
