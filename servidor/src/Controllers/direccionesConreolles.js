const todoDirecciones = require('../Models/Direcciones')

async function listarDirecciones(req,res) {
    const Direcciones = await todoDirecciones().ListarDireccion(); 
    res.status(200).json({Direcciones})
}


async function agregarDirecciones(req,res){
    const data = req.body;
    await todoDirecciones().crearCategoria(data);
    res.status(200).json({
        success: 1,
        msj:"gregado con exito"
    }
    )
}

async function EliminaDirecciones(req,res){
    const data = req.params.id;
    await todoDirecciones().ElimiCategoria(data)
    res.status(200).json({
        success: 1,
        msj:" eliminado con exito"
    }
    )
}



async function ModifiDirecciones(req,res){
    const data =[ 
        req.body.direccion,
        req.body.barrio,
        req.body.adiccional,
        req.body.id_usuario,
        req.params.id
    ]
    await todoDirecciones().ModifiCategoria(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



module.exports = {
    listarDirecciones,
    agregarDirecciones,
    EliminaDirecciones,
    ModifiDirecciones
};




