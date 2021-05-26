const Contactanos = require('../Models/contacto')


async function listarContactos(req,res) {
    const Direcciones = await Contactanos().ListarConta(); 
    res.status(200).json({Direcciones})
}



async function agregarContactos(req,res){
    const data = req.body;
    await Contactanos().AgregarContact(data);
    res.status(200).json({
        success: 1,
        msj:"gregado con exito"
    }
    )
}

async function EliminaContactos(req,res){
    const data = req.params.id;
    await Contactanos().EliminarContact(data)
    res.status(200).json({
        success: 1,
        msj:" eliminado con exito"
    }
    )
}



async function ModifiContactos(req,res){
    const data =[ 
        req.body.Nombre,
        req.body.texto,
        req.body.email_contacto,
        req.body.id_Contact,
        req.params.id
    ]
    await Contactanos().ModificarContact(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



///////////////////////////////////////////tipo de contacto////////////////



async function listarTipo_Contactos(req,res) {
    const Tipo = await Contactanos().ListarTipo_peticion(); 
    res.status(200).json({Tipo})
}



async function agregarTipo_Contactos(req,res){
    const data = req.body;
    await Contactanos().AgregarTipo_peticion(data);
    res.status(200).json({
        success: 1,
        msj:"gregado con exito"
    }
    )
}

async function EliminaTipo_Contactos(req,res){
    const data = req.params.id;
    await Contactanos().EliminarTipo_peticion(data)
    res.status(200).json({
        success: 1,
        msj:" eliminado con exito"
    }
    )
}



async function ModifiTipo_Contactos(req,res){
    const data =[ 
        req.body.tipo_contacto,
        req.params.id
    ]
    await Contactanos().ModificarTipo_peticion(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}

module.exports = {
    listarContactos,
    agregarContactos,
    EliminaContactos,
    ModifiContactos,
    listarTipo_Contactos,
    agregarTipo_Contactos,
    EliminaTipo_Contactos,
    ModifiTipo_Contactos
};




