
const jwtToken = require('../services/jwt')
const jwt = require('jwt-simple');
const config = require('../services/config');
const moment = require('moment');
const {
    agregarColor: modelAgregarColor,
    obtenerLista: modelObtenerLista,
    eliminarColor: modelEliminarColor,
    editarColor: modelEditarColor
} = require('../models/colores');

function agregarColor (req){
    const color = req.body;
    var usuarioId = null;
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];

        try{
            console.log(token);
            const decoded = jwt.decode(token, config.key);
            if(decoded.exp >= moment().unix()){
                usuarioId = decoded.id
            }
        }catch(err){
            console.log(err);
            
        }
    }
    return modelAgregarColor(color, usuarioId).then(resultado=>{
        console.log(resultado);
        return {status: 200, body: {mensaje: resultado}}
    });
}

function obtenerLista(){
    return modelObtenerLista().then(resultado=>{
        return {status: 200, body: resultado}
    });
}

function editarColor(req){
    const id = req.params.id;
    const color = req.body.color;
    const rgb = req.body.rgb;
    var usuarioId = null;
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];
        try{
            const decoded = jwt.decode(token, config.key);
            if(decoded.exp >= moment().unix()){
                usuarioId = decoded.id
            }
        }catch(err){
            console.log(err);
            
        }
    }
    return modelEditarColor(id, color, rgb, usuarioId).then(resultado=>{
        return {status: 200, body: resultado}
    }).catch(res=>{
        return {status: 403, body: res}
    });
}
function eliminarColor (req){
    const colorId = req.params.id;
    var usuarioId = null;
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];
        try{
            const decoded = jwt.decode(token, config.key);
            if(decoded.exp >= moment().unix()){
                usuarioId = decoded.id
            }
        }catch(err){
            console.log(err);
            
        }
    }
    return modelEliminarColor(colorId, usuarioId).then(resultado=>{
        return {status: 200, body: {mensaje: resultado}}
    }).catch(res => {
        return {status: 403, body: res}
    });
}


module.exports = {
    agregarColor,
    obtenerLista,
    eliminarColor,
    editarColor
}