'use strict'
const pool = require('../database');

module.exports = function() {

    async function listNoticias(datos) {
        let sql = `SELECT * FROM noticias;`;
        return await pool.query(sql,datos)

    }
   async function crearNoticias(datos) {
        await pool.query('INSERT INTO noticias set ?', [datos]);
    } 
    


    async function ElimiNoticias(datos) {
        let sql="DELETE FROM noticias where id_noticia=?";
        return await pool.query(sql,datos)
    }


    async function ModificNoticias(datos) {
       let sql = `UPDATE noticias set Nombre_noticia= ?,
                                              Descripcion= ?,
                                              url_img= ?
                                              where id_noticia=?`;
       return  await pool.query(sql,datos)
    }
    return {
        listNoticias,
        crearNoticias,
        ElimiNoticias,
        ModificNoticias
        

    }



}