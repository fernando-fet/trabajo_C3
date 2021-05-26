const express = require('express');
const routes = express.Router();
const noticiasConttolles = require('../../Controllers/noticiasConttolles')

routes.get('/api/listarNoticias',noticiasConttolles.listarNoticias);
routes.post('/api/agregarNoticias',noticiasConttolles.cargarNoticias);
routes.delete('/api/EliminarNoticias/:id',noticiasConttolles.EliminaNoticias);
routes.put('/api/ModificarNoticias/:id',noticiasConttolles.ModificarNoticias);



module.exports = routes
