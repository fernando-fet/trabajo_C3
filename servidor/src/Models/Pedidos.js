'use strict'
const pool = require('../database');

module.exports = function() {

    async function listPedidos(datos) {
        let sql = `SELECT   us.nombre , us.apellidos , di.direccion , di.barrio 
        FROM pedidos pe , direcciones di , usuarios us
        WHERE pe.id_usuario = us.id_usuario 
        AND pe.id_direcciones = di.id_direcciones;`;
        return await pool.query(sql,datos)

    }
   async function crearPedidos(datos) {
        await pool.query('INSERT INTO pedidos set ?', [datos]);
    } 
    


    async function ElimiPedidos(datos) {
        let sql="DELETE FROM pedidos where id_pedidos=?";
        return await pool.query(sql,datos)
    }


    async function ModifiPedidos(datos) {
       let sql = `UPDATE pedidos set id_direcciones= ?,
                                              id_usuarios= ?
                                              where id_pedidos=?`;
       return  await pool.query(sql,datos)
    }
    return {
        listPedidos,
        crearPedidos,
        ElimiPedidos,
        ModifiPedidos
        

    }



}