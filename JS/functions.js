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
    const selectTarea = document.getElementById("selectTarea");
    const tareaSeleccionada = selectTarea.options[selectTarea.selectedIndex].value;

    let body = "";

    if (tareaSeleccionada == "SCO") {
        const codigoTienda = document.getElementById("codigoTienda").value;
        const showUser = document.getElementById("showUser").value;
        body = `Código de tienda: ${codigoTienda}\n`;
        body += `Show User: ${showUser}\n`;
    } else if (tareaSeleccionada == "OnSite") {
        const codigoTienda = document.getElementById("codigoTienda").value;
        const tareaRealizar = document.getElementById("tareaRealizar").value;
        const fecha = document.getElementById("fecha").value;
        body = `Código de tienda: ${codigoTienda}\n`;
        body += `Tarea a realizar: ${tareaRealizar}\n`;
        body += `Fecha: ${fecha}\n`;
    } else if (tareaSeleccionada == "PPC") {
        const codigoTienda = document.getElementById("codigoTienda").value;
        const cargarExcel = document.getElementById("cargarExcel").value;
        body = `Código de tienda: ${codigoTienda}\n`;
        body += `Archivo Excel: ${cargarExcel}\n`;
    }

    body = encodeURIComponent(body);
    const mailto = `mailto:?subject=${tareaSeleccionada}&body=${body}`;
    window.location.href = mailto;
    alert("Formulario enviado correctamente.");
    return false;
}

  