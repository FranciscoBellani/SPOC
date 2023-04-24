function sendEmailSCO() {
  function enviarFormulario() {
    console.log("Entre a la funcion enviar formulario")
    const selectTarea = document.getElementById("selectTarea");
    const tareaSeleccionada = selectTarea.options[selectTarea.selectedIndex].value;
  
    let body = "";
  
    if (tareaSeleccionada == "SCO") {
      const codigoTienda = document.getElementById("codigoTienda").value;
      const showUser = document.getElementById("showUser").value;
      body = `Se procede a enviar para la activación de los SCO de la tienda: ${codigoTienda}. Muchas gracias.`;
    } else if (tareaSeleccionada == "OnSite") {
      const codigoTienda = document.getElementById("codigoTienda").value;
      const tareaRealizar = document.getElementById("tareaRealizar").value;
      const fecha = document.getElementById("fecha").value;
      body = `Se procede a solicitar la visita a la tienda ${codigoTienda} para el día ${fecha}.`;
    } else if (tareaSeleccionada == "PPC") {
      const codigoTienda = document.getElementById("codigoTienda").value;
      const cargarExcel = document.getElementById("cargarExcel").value;
      body = `Se procede a cargar el archivo Excel para la tienda ${codigoTienda}.`;
    }
  
    body = encodeURIComponent(body);
    const mailto = `mailto:?subject=${tareaSeleccionada}&body=${body}`;
    window.location.href = mailto;
    alert("Formulario enviado correctamente.");
    return false;
  }
  
  }
  