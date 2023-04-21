function sendEmailSCO() {
    // obtener los valores de los campos de texto
    const codigoTienda = document.getElementById("codigoTiendaSCO").value;
    const showUser = document.getElementById("showUserSCO").value;
  
    // construir el cuerpo del correo electrónico
    let body = `Código de tienda: ${codigoTienda}\n`;
    body += `Show User: ${showUser}\n`;
  
    // codificar el cuerpo del correo electrónico como un parámetro "body" de la URL
    body = encodeURIComponent(body);
  
    // construir la URL para abrir el cliente de correo electrónico
    const mailto = `mailto:?subject=Despliegue SCO&body=${body}`;
  
    // abrir el cliente de correo electrónico
    window.location.href = mailto;
  }
  