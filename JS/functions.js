import axios from 'axios';
function showForm() {
    var formFields = document.getElementById("formFields");
    formFields.innerHTML = "";

    var selectTarea = document.getElementById("selectTarea");
    var tareaSeleccionada = selectTarea.options[selectTarea.selectedIndex].value;

    if (tareaSeleccionada == "") {
        return;
    } else if (tareaSeleccionada == "SCO") {
        formFields.innerHTML += '<label for="codigoTienda">Código de Tienda:</label>';
        formFields.innerHTML += '<input type="text" id="codigoTienda" name="codigoTienda" class="form-control">';
        formFields.innerHTML += '<label for="showUser">Show User:</label>';
        formFields.innerHTML += '<textarea id="showUser" name="showUser" class="form-control"></textarea>';
    } else if (tareaSeleccionada == "OnSite") {
        formFields.innerHTML += '<label for="codigoTienda">Código de Tienda:</label>';
        formFields.innerHTML += '<input type="text" id="codigoTienda" name="codigoTienda" class="form-control">';
        formFields.innerHTML += '<label for="tareaRealizar">Tarea a realizar:</label>';
        formFields.innerHTML += '<input type="text" id="tareaRealizar" name="tareaRealizar" class="form-control">';
        formFields.innerHTML += '<label for="fecha">Fecha:</label>';
        formFields.innerHTML += '<input type="date" id="fecha" name="fecha" class="form-control">';
    } else if (tareaSeleccionada == "PPC") {
        formFields.innerHTML += '<label for="codigoTienda">Código de Tienda:</label>';
        formFields.innerHTML += '<input type="text" id="codigoTienda" name="codigoTienda" class="form-control">';
        formFields.innerHTML += '<label for="cargarExcel">Cargar Excel:</label>';
        formFields.innerHTML += '<input type="file" id="cargarExcel" name="cargarExcel" class="form-control">';

         // Agregar listener al campo de entrada cargarExcel
    const cargarExcelInput = document.getElementById("cargarExcel");
    cargarExcelInput.addEventListener('change', function() {
      uploadFile();
    });

    }
    
    formFields.innerHTML += '<input type="button" class="btn btn-primary" value="Enviar" onclick="enviarFormulario()">';


}
let formData = new FormData();

function enviarFormulario() {
    console.log("Entre a la funcion enviar formulario");
  
    const selectTarea = document.getElementById("selectTarea");
    const tareaSeleccionada = selectTarea.options[selectTarea.selectedIndex].value;
  
    let body = "";
  
    if (tareaSeleccionada == "SCO") {
      const codigoTienda = document.getElementById("codigoTienda").value;
      const showUser = document.getElementById("showUser").value;
      body = `Se procede a enviar para la activación de los SCO de la tienda: ${codigoTienda}. Muchas gracias.`;
      body = `Código de tienda: ${codigoTienda}\n`;
      body += `Show User: ${showUser}\n`;
    } else if (tareaSeleccionada == "OnSite") {
      const codigoTienda = document.getElementById("codigoTienda").value;
      const tareaRealizar = document.getElementById("tareaRealizar").value;
      const fecha = document.getElementById("fecha").value;
      body = `Se procede a solicitar la visita a la tienda ${codigoTienda} para el día ${fecha}.`;
      body += `Tarea a realizar: ${tareaRealizar}\n`;
    } else if (tareaSeleccionada == "PPC") {
      const codigoTienda = document.getElementById("codigoTienda").value;
      const cargarExcel = document.getElementById("cargarExcel").files[0];
      body = `Se procede a cargar el archivo Excel para la tienda ${codigoTienda}.`;
      body += `Archivo Excel: ${cargarExcel}\n`;
  
      const formData = new FormData();
      formData.append("cargarExcel", cargarExcel);
  
      axios
        .post(`mailto:?subject=${tareaSeleccionada}&body=${encodeURIComponent(body)}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          alert("Formulario enviado correctamente.");
          return false;
        })
        .catch((error) => {
          console.log(error);
          alert("Error al enviar el formulario.");
          return false;
        });
      return;
    }
  
    body = encodeURIComponent(body);
    const mailto = `mailto:?subject=${tareaSeleccionada}&body=${body}`;
  
    window.location.href = mailto;
    alert("Formulario enviado correctamente.");
    return false;
  }
  