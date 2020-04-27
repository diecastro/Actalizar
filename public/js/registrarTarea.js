window.addEventListener('load', init, false);
/*EL CAMPO ROJO AL ESTAR VACIO SE MUESTRA POCO PROFESOR PERO SI APLICA, 
LE COLOQUE 2PX AL BORDE PARA QUE NO DESTRUYERA EL DISEÑO TANTO Y AL REGISTRAR BIEN LOS DATOS VUELVE A SU NORMALIDAD*/
var datosinit;
function init() {
    var name = document.getElementById('nombre');
    var descripcionTarea = document.getElementById('descripcionTarea');
    var prioridadTarea = document.getElementById('prioridadTarea');
    var encargadoTarea = document.getElementById("encargadoTarea");
    var entregaTarea = document.getElementById("entregaTarea");
    var Hoy = new Date();
    var encargadosList = [
        "Mayra Fonseca",
        "Flor Padilla",
        "Stephano Maietta",
        "Juan Arias",
        "Ericka Villar",
        "Ricador Seravalli",
        "Mario Solano",
        "Larissa Fonseca",
    ];

    mostrarQuemados();

    //Split me divide el string como arreglo 
    //ParseInt pasa numero a string

    //funcion Actualizar y llenar todos los selects
    function mostrarQuemados() {
        encargadosList.forEach((enc) => {
            var option = document.createElement('option');
            option.innerHTML = enc;
            option.value = enc;
            encargadoTarea.appendChild(option);
        });
    }

    agregarBtn.onclick = function agregarBtnOnClick(e) {
        e.preventDefault();
        var nombre = name.value;
        var descrip = descripcionTarea.value;
        var prioridad = prioridadTarea.value;
        var personaEncargada = encargadoTarea.value;
        var entregarTarea = entregaTarea.value;

        var Fecha_aux = document.getElementById("entregaTarea").value.split("-");
        var Fecha1 = new Date(parseInt(Fecha_aux[0]), parseInt(Fecha_aux[1] - 1), parseInt(Fecha_aux[2]));

        if (Fecha1 < Hoy) {
            Swal.fire({
                icon: 'error',
                text: 'La fecha introducida es anterior a Hoy',
                confirmButtonColor: '#ff6509',
            })
            document.getElementById("entregaTarea").style.border = "2px solid red";
            return false;
        }

        if (entregarTarea == '') {
            Swal.fire({
                icon: 'warning',
                text: 'Seleccione una fecha',
                confirmButtonColor: '#ff6509',
            })
            document.getElementById("entregaTarea").style.border = "2px solid red";
            return false;
        } else if (nombre == '') {
            Swal.fire({
                icon: 'warning',
                text: 'El nombre de la tarea esta vacio',
                confirmButtonColor: '#ff6509',
            })
            document.getElementById("nombre").style.border = "2px solid red";
            return false;
        } else if (descrip == '') {
            Swal.fire({
                icon: 'warning',
                text: 'Describa la tarea',
                confirmButtonColor: '#ff6509',
            })
            document.getElementById("descripcionTarea").style.border = "2px solid red";
            return false;
        } else if (prioridad == null || prioridad == "selectPrioridad") {
            Swal.fire({
                icon: 'warning',
                text: 'Seleccione la prioridad de la tarea',
                confirmButtonColor: '#ff6509',
            })
            document.getElementById("prioridadTarea").style.border = "2px solid red";
            return false;
        } else if (personaEncargada == null || personaEncargada == "selectEncargadoTarea") {
            Swal.fire({
                icon: 'warning',
                text: 'Seleccione una persona encargada',
                confirmButtonColor: '#ff6509',
            })
            document.getElementById("encargadoTarea").style.border = "2px solid red";
            return false;
        } else {
            var data = {
                _id: "",
                entregaTarea: entregarTarea,
                nombre: nombre,
                descripcionTarea: descrip,
                prioridadTarea: prioridad,
                encargadoTarea: personaEncargada,
            };
            sendForm(data);
        }
    }

    function sendForm(data) {
        console.log('data = ', data);

        fetch('/registrarTareas/insertarTareas', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            clearForm();
            Swal.fire({
                position: 'center',
                text: 'Tarea registrada',
                icon: 'success',
                confirmButtonColor: '#ff6509',
                showCancelButton: false,
                confirmButtonText: 'Aceptar',
            })
            //COLOCA COLOR DEFAULT AL ENVIAR
            document.getElementById("entregaTarea").style.border = "1px solid Silver";
            document.getElementById("nombre").style.border = "1px solid Silver";
            document.getElementById("descripcionTarea").style.border = "1px solid Silver";
            document.getElementById("prioridadTarea").style.border = "1px solid Silver";
            document.getElementById("encargadoTarea").style.border = "1px solid Silver";
        });
    }

    function clearForm() {
        name.value = '';
        descripcionTarea.value = '';
        prioridadTarea.value = '';
        encargadoTarea.value = '';
        entregaTarea.value = '';
    }
}