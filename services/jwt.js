const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../services/config');
function createToken(user){
    const payload = {
        id: user.id,
        iat: moment().unix(),
        exp: moment().add(14,'days').unix()
    }
    return jwt.encode(payload, config.key);
}

function decodeToken(token){
    const decoded = new Promise((resolve, reject) => {
        try{
            console.log(token);
            const decod = jwt.decode(token, config.key);
            if(decod.exp <= moment().unix()){
                reject({
                    status: 401,
                    mensaje: 'El token ha expirado'
                })
            }
            resolve(decod.id)
        }catch(err){
            console.log(err);
            reject({
                status: 500,
                mensaje: 'Token Invalido'
            })
        }
    })
    return decoded;
}

module.exports = {
    createToken,
    decodeToken
}