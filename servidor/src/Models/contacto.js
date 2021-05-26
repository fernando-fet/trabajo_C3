'use strict'
const pool = require('../database');
module.exports = function() {

    async function ListarConta(datos) {
        let sql =` SELECT  pe.id_contactos, pe.Nombre,texto,pe.email_contacto , us.tipo_contacto 
        FROM contactanos pe , tipo_contacto us 
        WHERE pe.id_contactos = us.id_Contact 
        ;`;
        return await pool.query(sql,datos)

    }
    async function AgregarContact(datos) {
        await pool.query('INSERT INTO contactanos set ?', [datos]);
    }

    async function EliminarContact(datos) {
        let sql = 'DELETE  FROM contactanos where id_contactos=?';
        return await pool.query(sql,datos)

    }
    async function ModificarContact(datos){ 
       let sql = `UPDATE contactanos  set  Nombre=?,
                                texto =?,
                                email_contacto=?,
                                id_Contact=?
                            where id_contactos=?`;
       return await pool.query(sql,datos)
    }
//////////////////////////////////////////////////////////////////////tipo_peticion




async function ListarTipo_peticion(datos) {
    let sql =`SELECT * from tipo_contacto;`;
    return await pool.query(sql,datos)

}

async function AgregarTipo_peticion(datos) {
    await pool.query('INSERT INTO tipo_contacto set ?', [datos]);
}
async function EliminarTipo_peticion(datos) {
    let sql = 'DELETE  FROM tipo_contacto where id_Contact=?';
    return await pool.query(sql,datos)

}

async function ModificarTipo_peticion(datos){ 
   let sql = `UPDATE tipo_contacto  set  tipo_contacto=?,
                        where id_Contact=?`;
   return await pool.query(sql,datos)

}

    return {
        ListarConta,
        ListarTipo_peticion,
        AgregarContact,
        AgregarTipo_peticion,
        EliminarContact,
        EliminarTipo_peticion,
        ModificarContact,
        ModificarTipo_peticion
    }
}
