const express = require('express');
const routes = express.Router();
const categoriasControlles = require('../../Controllers/categoriasControlles')

routes.get('/api/listarCategorias',categoriasControlles.listarCategorias);
routes.post('/api/agregarCategorias',categoriasControlles.agregarCategorias);
routes.delete('/api/EliminarCategorias/:id',categoriasControlles.EliminaCategorias);
routes.put('/api/ModificarCategorias/:id',categoriasControlles.ModifiCategorias);



module.exports = routes
