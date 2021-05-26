const express = require('express');
const routes = express.Router();
const ContactosControlles = require('../../Controllers/ContactosControlles')


///////////////contctanos
routes.get('/api/listarContac',ContactosControlles.listarContactos);
routes.post('/api/agregarContac',ContactosControlles.agregarContactos);
routes.delete('/api/EliminarContac/:id',ContactosControlles.EliminaContactos);
routes.put('/api/ModificarContac/:id',ContactosControlles.ModifiContactos);




///////////////tpo_contacto


routes.get('/api/listarTipo_Contac',ContactosControlles.listarTipo_Contactos);
routes.post('/api/agregarTipo_Contac',ContactosControlles.agregarTipo_Contactos);
routes.delete('/api/EliminarTipo_Contac/:id',ContactosControlles.EliminaTipo_Contactos);
routes.put('/api/ModificarTipo_Contac/:id',ContactosControlles.ModifiTipo_Contactos);



module.exports = routes
