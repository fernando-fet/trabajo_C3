const login = require('../Models/login')

async function listarUser(req,res) {
    const todoUser = await login().ListarUsuario();
    const roles = await login().ListarUSElec();
    res.status(200).json({todoUser,roles})
}



async function AgregarUser(req,res){
    const data = req.body;
    await login().AgregarUsuario(data);
    res.status(200).json({
        success: 1,
        msj:"agregado con exito"
    }
    )
}


async function EliminaUser(req,res){
    const data = req.params.id;
    await login().EliminarUsuarios(data)
    res.status(200).json({
        success: 1,
        msj:"user eliminada"
    }
    )
}

async function ModificarUser(req,res){
    const data =[ 
        req.body.nombre,
        req.body.apellidos,
        req.body.email,
        req.body.Usuarios,
        req.body.pass,
        req.body.id_rol,
        req.params.id
    ]
    await login().ModificarUsaurios(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}




////////////////login//////////////////////////////////////






async function listaRrol(req,res) {
    const todoRol = await login().ListarRol();
    res.status(200).json({todoRol})
}


async function AgregaRrol(req,res){
    const data = req.body;
    await login().AgregarRol(data);
    res.status(200).json({
        success: 1,
        msj:"gregado con exito"
    }
    )
}
async function EliminaRrol(req,res){
    const data = req.params.id;
    await login().EliminarRol(data)
    res.status(200).json({
        success: 1,
        msj:"user eliminada"
    }
    )
}



async function ModificaRrol(req,res){
    const data =[ 
        req.body.rol,
        req.params.id
    ]
    await login().ModificarRol(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}


module.exports = {
    listarUser,
    AgregarUser,
    EliminaUser,
    ModificarUser,
    listaRrol,
    AgregaRrol,
    EliminaRrol,
    ModificaRrol
}




