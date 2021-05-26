const Productos = require('../Models/productos')

async function listarProductos(req,res) {
    const todoProductos = await Productos().listarProduct();
    const Bebidas = await Productos().listarBebidas();
    const Postres = await Productos().listarPostres();
    const categorias = await Productos().listar1categorias(req.body);
    res.status(200).json({todoProductos,categorias,Bebidas,Postres})
}



async function listarProductosId(req,res) {
    const data =[
         req.params.id
        ];
    const productoss = await Productos().listarProductId(data);
    res.status(200).json({productoss})
}

async function cargarProductos(req,res){
    const data = req.body;
    await Productos().crearProductos(data);
    res.status(200).json({
        success: 1,
        msj:"usuario a gregado con exito"
    }
    )
}
async function EliminaProduct(req,res){
    const data = req.params.id;
    await Productos().EliminarProductos(data)
    res.status(200).json({
        success: 1,
        msj:"usuario eliminado"
    }
    )
}




async function ModificarProductos(req,res){
    const data =[ 
        req.body.nombre_producto,
        req.body.Codigo,
        req.body.id_categoria,
        req.body.precio_unitario,
        req.body.total_stock,
        req.body.descripcion,
        req.body.url_img,
        req.params.id
    ]
    await Productos().ModificaProductos(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



module.exports = {
    listarProductos,
    listarProductosId,
    cargarProductos,
    EliminaProduct,
    ModificarProductos
};




