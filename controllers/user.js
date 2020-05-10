const servicesToken = require('../services/jwt');
const {
    agregarUsuario: modelAgregarUsuario,
    obtenerUsuario: modelObtenerUsuarios,
    //eliminarUsuario: modelEliminarUsuario,
    //editarUsuario: modelEditarUsuario,
} = require('../models/user');

const {
    eliminarColoresUsuario: eliminarColoresUsuario
} = require('../models/colores');

function agregarUsuario(user) {
    console.log(user);
    return modelAgregarUsuario(user).then(resultado => {
        return { status: 200, body: { mensaje: resultado,Token: servicesToken.createToken(user) } }
    });
}

function obtenerUsuarios() {
    return modelObtenerUsuarios().then(resultado => {
        return { status: 200, body: resultado }
    });
}
/*
function eliminarUsuario(identificador) {
    return modelEliminarUsuario(identificador).then(resultado => {
        return eliminarColoresUsuario(usuario).then(res=>{
            return {status: 200, body: {mensaje: res}}
        })
    });
}

function editarUsuario(identificador,nombre){
    return modelEditarUsuario(identificador,nombre).then(resultado => {
        return { status: 200, body: { mensaje: resultado } }
    });
}
*/
module.exports = {
    agregarUsuario,
    obtenerUsuarios,
    //eliminarUsuario,
    //editarUsuario
}