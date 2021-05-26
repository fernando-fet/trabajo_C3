'use strict'
const pool = require('../database');
module.exports = function() {

async function tipo_evento(datos) {
    let sql =`SELECT * FROM tipo_evento `;
    return await pool.query(sql,datos)

}

async function AgregaTipo(datos) {
    await pool.query('INSERT INTO tipo_evento set ?', [datos]);
} 



async function ElimiTipo(datos) {
    let sql="DELETE FROM tipo_evento where id_tipo_evento=?";
    return await pool.query(sql,datos)
}


async function ModifiTipo(datos) {
    let sql = `UPDATE tipo_evento set eventos= ?,
                            where id_tipo_evento=?`;
    return  await pool.query(sql,datos)
 }



    return {
        tipo_evento,
        AgregaTipo,
        ElimiTipo,
        ModifiTipo
    }
}





