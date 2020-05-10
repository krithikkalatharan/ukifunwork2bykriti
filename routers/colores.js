module.exports = router;

var express = require("express");
var router = express.Router();
const auth = require('../middlewares/user');
const {
  agregarColor,
  obtenerLista,
  eliminarColor,
  editarColor
} = require("../controllers/colores");

router.get("/", (req, res) => {
  obtenerLista().then(resultado => {
    res.status(resultado.status);
    res.json(resultado.body);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  agregarColor(req).then(resultado => {
    res.status(resultado.status);
    res.json(resultado.body);
  });
});

router.put('/:id', auth, function(req, res) {
    editarColor(req).then(resultado => {
        res.status(resultado.status);
        res.json(resultado.body);
    })
});


router.delete("/:id", auth,(req, res) => {
  eliminarColor(req).then(resultado => {
    res.status(resultado.status);
    res.json(resultado.body);
  });
});

module.exports = router;
