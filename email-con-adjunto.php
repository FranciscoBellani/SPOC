<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  // Si la petición no es POST, devolvemos un error
  http_response_code(405);
  echo json_encode(array('error' => 'Método no permitido.'));
  die();
}

if (!isset($_FILES['cargarExcel'])) {
  // Si no se ha enviado el archivo, devolvemos un error
  http_response_code(400);
  echo json_encode(array('error' => 'No se ha proporcionado un archivo.'));
  die();
}

$codigoTienda = $_POST['codigoTienda'];

// Configuramos los datos del correo electrónico
$to = 'creaproy@gmail.com';
$subject = 'Carga de archivo Excel';
$message = "Se ha recibido un archivo Excel para la tienda {$codigoTienda}.\n";

// Adjuntamos el archivo Excel al correo electrónico
$attachment = $_FILES['cargarExcel'];
$attachment_name = basename($attachment['name']);
$attachment_content = file_get_contents($attachment['tmp_name']);
$attachment_encoded = chunk_split(base64_encode($attachment_content), 70);

$boundary = md5(time());
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
$headers .= "From: francisco.bellani@gmail.com\r\n";

$body = "--{$boundary}\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $message;
$body .= "--{$boundary}\r\n";
$body .= "Content-Type: application/vnd.ms-excel; name=\"{$attachment_name}\"\r\n";
$body .= "Content-Transfer-Encoding: base64\r\n";
$body .= "Content-Disposition: attachment\r\n\r\n";
$body .= $attachment_encoded;
$body .= "--{$boundary}--";

// Enviamos el correo electrónico
if (mail($to, $subject, $body, $headers)) {
  echo json_encode(array('success' => 'El correo electrónico se ha enviado correctamente.'));
} else {
  http_response_code(500);
  echo json_encode(array('error' => 'Ha habido un error al enviar el correo electrónico.'));
}
