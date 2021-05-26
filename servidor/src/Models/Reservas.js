'use strict'
const pool = require('../database');

module.exports = function() {

    async function listReservas(datos) {
        let sql = `SELECT * FROM reservaciones;`;
        return await pool.query(sql,datos)

    }
   async function AgregaReservas(datos) {
        await pool.query('INSERT INTO reservaciones set ?', [datos]);
    } 
    


    async function ElimiReservas(datos) {
        let sql="DELETE FROM reservaciones where id_reservaciones=?";
        return await pool.query(sql,datos)
    }


    async function ModifiReservas(datos) {
       let sql = `UPDATE reservaciones set nombre= ?,
                                           apellido= ?,
                                           telefono= ?,
                                           hora_llegada= ?,
                                           acompañantes= ?
                                           where id_reservaciones=?`;
       return  await pool.query(sql,datos)
    }
    return {
        listReservas,
        AgregaReservas,
        ElimiReservas,
        ModifiReservas
        

    }



}