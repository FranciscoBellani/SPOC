function showForm() {
    var formFields = document.getElementById("formFields");
    formFields.innerHTML = "";

    var selectTarea = document.getElementById("selectTarea");
    var tareaSeleccionada = selectTarea.options[selectTarea.selectedIndex].value;

    if (tareaSeleccionada == "") {
        return;
    } else if (tareaSeleccionada == "SCO") {
        formFields.innerHTML += '<label for="codigoTienda">Código de Tienda:</label>';
        formFields.innerHTML += '<input type="text" id="codigoTienda" name="codigoTienda">';
        formFields.innerHTML += '<label for="showUser">Show User:</label>';
        formFields.innerHTML += '<textarea id="showUser" name="showUser"></textarea>';
    } else if (tareaSeleccionada == "OnSite") {
        formFields.innerHTML += '<label for="codigoTienda">Código de Tienda:</label>';
        formFields.innerHTML += '<input type="text" id="codigoTienda" name="codigoTienda">';
        formFields.innerHTML += '<label for="tareaRealizar">Tarea a realizar:</label>';
        formFields.innerHTML += '<input type="text" id="tareaRealizar" name="tareaRealizar">';
        formFields.innerHTML += '<label for="fecha">Fecha:</label>';
        formFields.innerHTML += '<input type="date" id="fecha" name="fecha">';
    } else if (tareaSeleccionada == "PPC") {
        formFields.innerHTML += '<label for="codigoTienda">Código de Tienda:</label>';
        formFields.innerHTML += '<input type="text" id="codigoTienda" name="codigoTienda">';
        formFields.innerHTML += '<label for="cargarExcel">Cargar Excel:</label>';
        formFields.innerHTML += '<input type="file" id="cargarExcel" name="cargarExcel">';
    }

    formFields.innerHTML += '<input type="button" value="Enviar" onclick="enviarFormulario()">';

}

function enviarFormulario() {
    console.log("Entre a la funcion enviar formulario")
     // obtener los valores de los campos de texto
     const codigoTienda = document.getElementById("codigoTienda").value;
     const showUser = document.getElementById("showUser").value;
   
     // construir el cuerpo del correo electrónico
     let body = `Código de tienda: ${codigoTienda}\n`;
     body += `Show User: ${showUser}\n`;
   
     // codificar el cuerpo del correo electrónico como un parámetro "body" de la URL
     body = encodeURIComponent(body);
   
     // construir la URL para abrir el cliente de correo electrónico
     const mailto = `mailto:?subject=Despliegue SCO&body=${body}`;
   
     // abrir el cliente de correo electrónico
     window.location.href = mailto;
     alert("Formulario enviado correctamente.");
  return false;
  }
  