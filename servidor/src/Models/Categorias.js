'use strict'
const pool = require('../database');

module.exports = function() {

    async function listCategoria(datos) {
        let sql = `SELECT * FROM categoria_producto;`;
        return await pool.query(sql,datos)

    }
   async function crearCategoria(datos) {
        await pool.query('INSERT INTO categoria_producto set ?', [datos]);
    } 
    


    async function ElimiCategoria(datos) {
        let sql="DELETE FROM categoria_producto where id_categoria=?";
        return await pool.query(sql,datos)
    }


    async function ModifiCategoria(datos) {
       let sql = `UPDATE categoria_producto set categoria_producto= ?
                                              where id_categoria=?`;
       return  await pool.query(sql,datos)
    }
    return {
        listCategoria,
        crearCategoria,
        ElimiCategoria,
        ModifiCategoria
        

    }



}