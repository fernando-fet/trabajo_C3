'use strict'
const pool = require('../database');

module.exports = function() {

    async function ListarUsuario(datos) {
        let sql =`SELECT us.id_usuario,us.Usuarios,us.nombre,us.apellidos,us.email,us.pass,r.rol
        FROM usuarios us , rol r
        WHERE us.id_rol = r.id_rol;`;
        return await pool.query(sql,datos)

    }

    async function ListarUSElec(datos) {
        let sql =`SELECT * FROM rol;`;
        return await pool.query(sql,datos)
 }


    async function AgregarUsuario(datos) {
        await pool.query('INSERT INTO usuarios set?', [datos]);
    }



    
    async function EliminarUsuarios(datos) {
        let sql = 'DELETE  FROM usuarios where id_usuario=?';
        return await pool.query(sql,datos)
    }



    async function ModificarUsaurios(datos){ 
       let sql = `UPDATE usuarios  set  nombre=?,
                                  apellidos=?,
                                Usuarios=?,
                                email=?,
                                pass=?,
                                id_rol =?
                            where id_usuario=?`;
       return await pool.query(sql,datos)

    }

/////////////////////Roles usuarios /////////////////////



async function ListarRol(datos) {
    let sql =`SELECT * FROM rol;`;
    return await pool.query(sql,datos)

}

async function AgregarRol(datos) {
    await pool.query('INSERT INTO rol set ?', [datos]);
}
async function EliminarRol(datos) {
    let sql = 'DELETE  FROM rol where id_rol=?';
    return await pool.query(sql,datos)

}

async function ModificarRol(datos){ 
   let sql = `UPDATE rol  set  rol=?
                        where id_rol=?`;
   return await pool.query(sql,datos)

}
    return {
        ListarUsuario,
        AgregarUsuario,
        ListarUSElec,

        EliminarUsuarios,
        ModificarUsaurios,
        ListarRol,
        AgregarRol,
        EliminarRol,
        ModificarRol
    }
}
