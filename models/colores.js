var colores = [
  {
    id: 1,
    color : "azul",
    rgb : "#0000ff",
    idUsuario : null
  }
];

function agregarColor(color, usuarioId){
  return new Promise ((resolve,reject) => {
    color.id = colores.length > 0 ? (colores[colores.length - 1].id + 1) : 1;
    color.usuarioId = usuarioId;
    colores.push(color);
    resolve("Color agregado");
  })
}

function obtenerLista(){
  return new Promise ((resolve, reject) => {
    resolve(colores);
  })
}

function eliminarColor(colorId, usuarioId){
    return new Promise ((resolve,reject)=>{
      var index = colores.findIndex(color => color.id == colorId);
      if(index != -1){
        if((colores[index].usuarioId == usuarioId || colores[index].usuarioId == null) && usuarioId != null){
          colores.splice(index,1);
          resolve("Color Eliminado");
        }
        else{
          reject("No tienes autorizacion");
        }
      }else{
        resolve("Color no Encontrado");
      }
    });
}

function editarColor(id, nombre, rgb, usuarioId){
  return new Promise ((resolve,reject)=>{
  const index = colores.findIndex(element => element.id == id);
  if(index != -1) {
    if((colores[index].usuarioId == usuarioId || colores[index].usuarioId == null) && usuarioId != null){
      colores[index].color = nombre;
      colores[index].rgb = rgb;
      resolve('Color editado');  
    } else{
      reject('No tienes autorizacion');
    }
  }else{
    resolve('Color no Encontrado');
  }
  
});
}

module.exports = {
  agregarColor,
  obtenerLista,
  eliminarColor,
  editarColor,
}


