const Eventosss = require('../Models/Tipo_evento')

async function listarTipo_evento(req,res) {
    const tipo_evento = await Eventosss().tipo_evento();
    res.status(200).json( {tipo_evento} )
}



async function cargarTipo_evento(req,res){
    const data = req.body;
    await Eventosss().AgregaTipo(data);
    res.status(200).json({
        success: 1,
        msj:"gregado con exito"
    }
    )
}
async function EliminaTipo(req,res){
    const data = req.params.id;
    await Eventosss().ElimiTipo(data)
    res.status(200).json({
        success: 1,
        msj:" eliminado"
    }
    )
}



async function ModificarTipooo(req,res){
    const data =[ 
        req.body.eventos,
        req.params.id
    ]
    await Eventosss().ModifiTipo(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



module.exports = {
    listarTipo_evento,
    cargarTipo_evento,
    EliminaTipo,
    ModificarTipooo
};
