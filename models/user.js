
var usuarios = [
    {
        id:1,
        usuario: "pablocrts",
        password: "1234578",
    }
 ];
 
 function agregarUsuario(user){
    console.log(user);
     return new Promise ((resolve,reject)=> {
        user.id=usuarios.length > 0 ? (usuarios[usuarios.length -1].id +1):1;
         usuarios.push(user);
         resolve('Usuario agregado correctamente');
     });
 }
 
 function obtenerUsuario(){
     return new Promise ((resolve,reject)=>{
         resolve(usuarios);
      });
 }
 
 module.exports={
     agregarUsuario,
     obtenerUsuario, 
    // eliminarUsuario,
     //editarUsuario,
 }
 