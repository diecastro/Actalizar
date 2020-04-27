fetch('/registrarTareas/mostrarTareas')
    .then(function (data) {
        return data.json();
    })
    .then(function (res) {
        let tareaUsuario = {};
        tareaUsuario = res;
        for (let listadoTareas of tareaUsuario) {

            tablaTareas.innerHTML += `
  <tr>
  <td>${listadoTareas.entregaTarea}</td>
  <td>${listadoTareas.nombre}</td>
  <td>${listadoTareas.descripcionTarea}</td>
  <td>${listadoTareas.prioridadTarea}</td>
  <td>${listadoTareas.encargadoTarea}</td>
  <td><i type="button" onclick="actualizar('${listadoTareas.nombre}')"class="far fa-edit"></i></td>

  </tr>
  `;


        }
    })
    .catch(function (err) {
        console.log(err);

    });





function actualizar(nombre) {
    var url = `/registrarTareas/actualizar/${nombre}`;
    fetch(url, { method: 'PUT' })
        .then(function (result) {
            return result.json();
        })
        .then(function (result) {
            console.log(result)
        })
        .catch(function (err) {
            console.log(err);
        });
}
