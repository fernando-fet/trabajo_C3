const Todoseventos = require('../Models/eventos')

async function listarEventos(req,res) {
    const eventosTodo = await Todoseventos().ListarEven();
    const tipo_evento = await Todoseventos().tipo_evento();
    const eventos = await Todoseventos().eventos(); 
    res.status(200).json({
        eventosTodo,
        tipo_evento,
        eventos})
}


async function cargarEventos(req,res){
    const data = req.body;
    await Todoseventos().AgregarEvento(data);
    res.status(200).json({
        success: 1,
        msj:"Noticia a gregado con exito"
    }
    )
}

async function EliminaEventos(req,res){
    const data = req.params.id;
    await Todoseventos().EliminarEvento(data)
    res.status(200).json({
        success: 1,
        msj:"Noticias eliminada"
    }
    )
}



async function ModificarEvento(req,res){
    const data =[ 
        req.body.nombre_evento,
        req.body.id_tipo_evento,
        req.body.duracion,
        req.body.precio_evento,
        req.body.url_imagen,
        req.params.id
    ]
    await Todoseventos().ModificarEvento(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



module.exports = {
    listarEventos,
    cargarEventos,
    EliminaEventos,
    ModificarEvento
};




