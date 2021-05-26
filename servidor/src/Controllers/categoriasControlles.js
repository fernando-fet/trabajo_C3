const todoCategorias = require('../Models/Categorias')

async function listarCategorias(req,res) {
    const eventos = await todoCategorias().listCategoria(); 
    res.status(200).json({eventos})
}


async function agregarCategorias(req,res){
    const data = req.body;
    await todoCategorias().crearCategoria(data);
    res.status(200).json({
        success: 1,
        msj:"categoria a gregado con exito"
    }
    )
}


async function EliminaCategorias(req,res){
    const data = req.params.id;
    await todoCategorias().ElimiCategoria(data)
    res.status(200).json({
        success: 1,
        msj:"Noticias eliminada"
    }
    )
}



async function ModifiCategorias(req,res){
    const data =[ 
        req.body.categoria_producto,
        req.params.id
    ]
    await todoCategorias().ModifiCategoria(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



module.exports = {
    listarCategorias,
    agregarCategorias,
    EliminaCategorias,
    ModifiCategorias
};




