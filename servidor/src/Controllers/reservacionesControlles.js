const TodasReservas = require('../Models/Reservas')

async function listarReservas(req,res) {
    const Reservastodo = await TodasReservas().listReservas();
    res.status(200).json({Reservastodo})
}


async function AgregarReservas(req,res){
    const data = req.body;
    await TodasReservas().AgregaReservas(data);
    res.status(200).json({
        success: 1,
        msj:"Agregado con exito"
    }
    )
}
async function EliminaReservas(req,res){
    const data = req.params.id;
    await TodasReservas().ElimiReservas(data)
    res.status(200).json({
        success: 1,
        msj:"Noticias eliminada"
    }
    )
}

async function ModifiReservas(req,res){
    const data =[ 
        req.body.nombre,
        req.body.apellido,
        req.body.telefono,
        req.body.hora_llegada,
        req.body.acompañantes,
        req.params.id
    ]
    await TodasReservas().ModifiReservas(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



module.exports = {
    listarReservas,
    AgregarReservas,
    EliminaReservas,
    ModifiReservas
};




