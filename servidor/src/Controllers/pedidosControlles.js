const todosPedidos = require('../Models/Pedidos')

async function listarPedidos(req,res) {
    const Pedidostodo = await todosPedidos().listPedidos();
    res.status(200).json({Pedidostodo})
}


async function AgregarPedidos(req,res){
    const data = req.body;
    await todosPedidos().crearPedidos(data);
    res.status(200).json({
        success: 1,
        msj:"Noticia a gregado con exito"
    }
    )
}
async function EliminaPedidos(req,res){
    const data = req.params.id;
    await todosPedidos().ElimiPedidos(data)
    res.status(200).json({
        success: 1,
        msj:"Noticias eliminada"
    }
    )
}



async function ModificarPedidos(req,res){
    const data =[ 
        req.body.id_direcciones,
        req.body. id_usuarios,
        req.params.id
    ]
    await todosPedidos().ModifiPedidos(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



module.exports = {
    listarPedidos,
    AgregarPedidos,
    EliminaPedidos,
    ModificarPedidos
};




