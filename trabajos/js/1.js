let pers = JSON.parse(localStorage.getItem("pers"));
if (!pers) { localStorage.setItem("pers", JSON.stringify([])); }
var add = document.querySelector("#agregar")

add.onclick = () => {
  //RECOPILA DATOS
  let nombre = document.querySelector("#nombre").value;
  let apellidos = document.querySelector("#apellidos").value;
  let direccion = document.querySelector("#dire").value;
  let telefono = document.querySelector("#tel").value;

  //VALIDAR DATOS
  if (nombre.trim() === '' || apellidos.trim() === '' || direccion.trim() === '' || telefono.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'Llena todos los campos faltantes',
      footer: 'Registro de Usuario "Datos"'
    })
    return;
  }
  let per = { nombre, apellidos, direccion, telefono }
  
  pers.push(per);
  localStorage.setItem("pers", JSON.stringify(pers))
  document.querySelector("#formAdd").reset();
  document.querySelector("#addModalper").click()
  mostrarpers();
}

const mostrarpers = () => {
  var persHTML = "";
  pers = JSON.parse(localStorage.getItem("pers"))
  let i=1;
  pers.map(per => {
    persHTML += `<div>
    <p><b>Nombre:  </b>${per.nombre}</p>
    <p><b>Apellidos: </b>${per.apellidos}</p>
    <p><b>Direccion:    </b>${per.direccion}</p>
    <p><b>Telefono:  </b>${per.telefono}</p>
    <button onclick="eliminarper(${i})">Borrar</button>
    </div>`
  })
  document.querySelector("#listUS").innerHTML=persHTML;
}

const eliminarper=(id)=>{
  Swal.fire({
    title: '¿Estás seguro de eliminar estos Datos?',
    showDenyButton: true,
    confirmButtonText: 'SI',
    denyButtonText: 'NO',
  }).then ((result) => {
    if (result.isConfirmed) {
      pers=JSON.parse(localStorage.getItem("pers"))
      let pers2=new Array();
      let i=1
      pers.map(pers=>{
        if(i!=id){
          pers2.push(pers)
      }
        i++;
        })
        localStorage.setItem("pers",JSON.stringify(pers2))
        mostrarpers();
      }else if (result.isDenid){
        return;
      }
    })
}