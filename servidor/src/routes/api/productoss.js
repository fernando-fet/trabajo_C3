const express = require('express');
const routes = express.Router();
const productoContollres = require('../../Controllers/productosControlles')

routes.get('/api/listarProductos',productoContollres.listarProductos);
routes.get('/api/listarProductosId/:id',productoContollres.listarProductosId);

routes.post('/api/agregarProduct',productoContollres.cargarProductos);
routes.delete('/api/EliminarProduct/:id',productoContollres.EliminaProduct);
routes.put('/api/ModificarProduct/:id',productoContollres.ModificarProductos);



module.exports = routes
