'use strict'
const pool = require('../database');

module.exports = function() {

    async function listarProduct(datos) {
        let sql = `SELECT pr.id_productos, pr.nombre_producto ,
        pr.Codigo ,cp.categoria_producto,pr.precio_unitario, pr.total_stock, pr.descripcion,pr.url_img  
        FROM productos pr , categoria_producto cp
        WHERE pr.id_categoria = cp.id_categoria;`;
        return await pool.query(sql,datos)

    }

    async function listarProductId(datos) {
        let sql = `SELECT pr.id_productos, pr.nombre_producto ,
        pr.Codigo ,cp.categoria_producto,pr.precio_unitario, pr.total_stock, pr.descripcion,pr.url_img  
        
        FROM productos pr , categoria_producto cp
        WHERE pr.id_categoria = cp.id_categoria
        AND pr.id_productos=?;`;
        return await pool.query(sql,datos)

    }
    
    async function listarBebidas(datos) {
        let sql = `        
        SELECT pr.id_productos, pr.nombre_producto, pr.Codigo ,cp.categoria_producto,pr.precio_unitario, pr.total_stock, pr.descripcion,pr.url_img  
        FROM productos pr , categoria_producto cp
        WHERE pr.id_categoria = cp.id_categoria AND cp.id_categoria='7';`;
        return await pool.query(sql,datos)

    }

    async function listarPostres(datos) {
        let sql = `  SELECT pr.id_productos, pr.nombre_producto, pr.Codigo ,cp.categoria_producto,pr.precio_unitario, pr.total_stock, pr.descripcion,pr.url_img  
        FROM productos pr , categoria_producto cp
        WHERE pr.id_categoria = cp.id_categoria AND cp.id_categoria='6'`;
        return await pool.query(sql,datos)

    }




    
    async function listar1categorias(datos) {
        let sql = `SELECT * FROM categoria_producto`;
        return await pool.query(sql,datos)

    }

    


    async function crearProductos(datos) {
        await pool.query('INSERT INTO productos set ?', [datos]);
    } 
    


    async function EliminarProductos(datos) {
        let sql="DELETE FROM productos where id_productos=?";
        return await pool.query(sql,datos)
    }


    async function ModificaProductos(datos) {
       let sql = `UPDATE productos set nombre_producto= ?,
                                                 Codigo= ?,
                                              id_categoria= ?,
                                              precio_unitario= ?,
                                              total_stock= ?,
                                              descripcion= ?,
                                              url_img =?
                                              where id_productos=?`;
       return  await pool.query(sql,datos)
    }
    return {
        listarProduct,
        listar1categorias,
        crearProductos,
        EliminarProductos,
        ModificaProductos,
        listarProductId,
        listarPostres,
        listarBebidas
        

    }



}