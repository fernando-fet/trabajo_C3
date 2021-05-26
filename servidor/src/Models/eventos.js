'use strict'
const pool = require('../database');
module.exports = function() {

    async function ListarEven(datos) {
        let sql =`SELECT ev.id_eventos,ev.nombre_evento, ti.eventos,ev.duracion , ev.precio_evento,ev.url_imagen
        FROM eventos ev , tipo_evento ti
        WHERE ev.id_tipo_evento = ti.id_tipo_evento;`;
        return await pool.query(sql,datos)

    }

    async function AgregarEvento(datos) {
        await pool.query('INSERT INTO eventos set ?', [datos]);
    }
    async function EliminarEvento(datos) {
        let sql = 'DELETE  FROM eventos where id_eventos=?';
        return await pool.query(sql,datos)

    }

    async function ModificarEvento(datos){ 
       let sql = `UPDATE eventos  set  nombre_evento=?,
                                id_tipo_evento =?,
                                duracion=?,
                                url_imagen=?,
                                precio_evento=?
                            where id_eventos=?`;
       return await pool.query(sql,datos)

    }

/////////////////////select
    

///////////////// 

async function eventos(datos) {
    let sql =`SELECT * FROM eventos `;
    return await pool.query(sql,datos)

}

//////////////////////cate



async function tipo_evento(datos) {
    let sql =`SELECT * FROM tipo_evento `;
    return await pool.query(sql,datos);
}




    return {
        ListarEven,
        AgregarEvento,
        EliminarEvento,
        ModificarEvento,
        eventos,
        tipo_evento
    }
}
