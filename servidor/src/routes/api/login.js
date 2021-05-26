const express = require('express');
const routes = express.Router();
const loginControlles = require('../../Controllers/loginControlles')

routes.get('/api/listarUser',loginControlles.listarUser);

routes.post('/api/agregarUser',loginControlles.AgregarUser);

routes.delete('/api/EliminarUser/:id',loginControlles.EliminaUser);

routes.put('/api/ModificarUser/:id',loginControlles.ModificarUser);




//////////////////////////////login //////////////////////////




routes.get('/api/listarRol',loginControlles.listaRrol);
routes.post('/api/agregarRol',loginControlles.AgregaRrol);
routes.delete('/api/EliminarRol/:id',loginControlles.EliminaRrol);
routes.put('/api/ModificarRol/:id',loginControlles.ModificaRrol
);



module.exports = routes
