<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$telefono = $_POST['telefono'];
$comentarios=$_POST['comentarios'];

$header = 'From: ' . $mail ."\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su correo electrónico es: " . $mail . " \r\n";
$mensaje .= "Su teléfono es" . $telefono . " \r\n";
$mensaje .= "Comentarios: " . $_POST['comentarios'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'sol081105@gmail.com';
$asunto = 'Tienes un nuevo mensaje de tu sitio web';

mail($para, $asunto, utf8_decode($mensaje), $header);

header('Location:formsended.html')

?>