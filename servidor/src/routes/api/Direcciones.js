const express = require('express');
const routes = express.Router();
const direccionesConreolles = require('../../Controllers/direccionesConreolles')

routes.get('/api/listarDirecciones',direccionesConreolles.listarDirecciones);
routes.post('/api/agregarDirecciones',direccionesConreolles.agregarDirecciones);
routes.delete('/api/EliminarDirecciones/:id',direccionesConreolles.EliminaDirecciones);
routes.put('/api/ModificarDirecciones/:id',direccionesConreolles.ModifiDirecciones);



module.exports = routes
