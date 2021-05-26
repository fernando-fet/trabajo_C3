'use strict'
const pool = require('../database');
module.exports = function() {

    async function ListarDireccion(datos) {
        let sql =`SELECT  di.direccion , di.barrio , di.adiccional, us.nombre , us.apellidos
        FROM direcciones di , usuarios us
        WHERE di.id_usuario = us.id_usuario;`;
        return await pool.query(sql,datos)

    }

    async function AgregarDireccion(datos) {
        await pool.query('INSERT INTO direcciones set ?', [datos]);
    }
    async function EliminarDireccion(datos) {
        let sql = 'DELETE  FROM direcciones where id_direcciones=?';
        return await pool.query(sql,datos)

    }

    async function ModificarDireccion(datos){ 
       let sql = `UPDATE direcciones  set  direccion=?,
                                barrio =?,
                                adiccional=?,
                                id_usuario=?
                            where id_direcciones=?`;
       return await pool.query(sql,datos)

    }





    return {
        ListarDireccion,
        AgregarDireccion,
        EliminarDireccion,
        ModificarDireccion
    }
}
