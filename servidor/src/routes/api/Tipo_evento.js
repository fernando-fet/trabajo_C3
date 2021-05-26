const express = require('express');
const routes = express.Router();
const Tipo_eventoControlles = require('../../Controllers/Tipo_eventoControlles')

routes.get('/api/listarTipos_eventos',Tipo_eventoControlles.listarTipo_evento);
routes.post('/api/agregarTipos_eventos',Tipo_eventoControlles.cargarTipo_evento);
routes.delete('/api/EliminarTipos_eventos/:id',Tipo_eventoControlles.EliminaTipo);
routes.put('/api/ModificarTipos_eventos/:id',Tipo_eventoControlles.ModificarTipooo);



module.exports = routes
