const Noticias = require('../Models/noticias')

async function listarNoticias(req,res) {
    const todoNoticias = await Noticias().listNoticias();
    res.status(200).json({todoNoticias})
}


async function cargarNoticias(req,res){
    const data = req.body;
    await Noticias().crearNoticias(data);
    res.status(200).json({
        success: 1,
        msj:"Noticia a gregado con exito"
    }
    )
}
async function EliminaNoticias(req,res){
    const data = req.params.id;
    await Noticias().ElimiNoticias(data)
    res.status(200).json({
        success: 1,
        msj:"Noticias eliminada"
    }
    )
}



async function ModificarNoticias(req,res){
    const data =[ 
        req.body.Nombre_noticia,
        req.body.Descripcion,
        req.body.url_img,
        req.params.id
    ]
    await Noticias().ModificNoticias(data);
    res.status(200).json({
        success: 1,
        msj:"Lo modifico con exito"
    }
    )
}



module.exports = {
    listarNoticias,
    cargarNoticias,
    EliminaNoticias,
    ModificarNoticias
};




