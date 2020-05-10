var express = require('express');
var router = express.Router();
const {
    agregarUsuario,
    obtenerUsuarios,
   // eliminarUsuario,
    //editarUsuario,
} = require('../controllers/user');


router.get('/', function(req, res) {
    obtenerUsuarios().then(resultado => {
        res.status(resultado.status);
        res.json(resultado.body);
    });
});

router.post('/', function(req, res) {
    agregarUsuario(req.body).then(resultado => {
        res.status(resultado.status);
        res.json(resultado.body);
    });
});


module.exports = router;