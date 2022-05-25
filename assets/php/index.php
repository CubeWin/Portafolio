<?php
$nombres = $_POST["email"];

$to = $nombres;
$subject = "Mensaje Enviado desde la WEB";

// compose headers
$headers = "From: eliud16pc@hotmail.com\r\n";
$headers .= "X-Mailer: PHP/".phpversion();
$headers .= "Mime-Version: 1.0 \r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

// compose message
$message = "<html>";
$message .= "<head><title>Email con HTML</title></head>";
$message .= "<body><h1>Contactos</h1>";
$message .= "<br>";
$message .= "<p>Hola, Soy Eliud y estos son mis datos para contactarme:</p>";
$message .= "<table><thead><th colspan=\"2\" style=\"font-size:18px\">Datos</th></thead><tbody>";
$message .= "<tr><td style=\"width:100px; padding-right: 10px; text-align: right;\">Teléfono:</td><td>+51 955 102 047</td></tr>";
$message .= "<tr><td style=\"width:100px; padding-right: 10px; text-align: right;\">Correo:</td><td>eliud16pc@hotmail.com</td></tr>";
$message .= "<tr><td style=\"width:100px; padding-right: 10px; text-align: right;\">Correo2:</td><td>eliud16pc@gmail.com</td></tr>";
$message .= "<tr><td style=\"width:100px; padding-right: 10px; text-align: right;\">LinkedIn:</td>";
$message .= "<td><a href=\"https://linkedin.com/in/eliudpedraza\" target=\"_blank\">linkedin.com/in/eliudpedraza</a></td></tr>"
$message .= "<tr><td style=\"width:100px; padding-right: 10px; text-align: right;\">Git Hub:</td>";
$message .= "<td><a href=\"https://github.com/CubeWin\" target=\"_blank\">https://github.com/CubeWin</a></td></tr>"
$message .= "<tr><td style=\"width:100px; padding-right: 10px; text-align: right;\">Twitter:</td>";
$message .= "<td><a href=\"https://twitter.com/CubeEliud\" target=\"_blank\">https://twitter.com/CubeEliud</a></td></tr>"
$message .= "</tbody></table><hr><small>Mensaje enviado desde la WEB <a href=\"https://cubewin.sempeperusac.com/\" target=\"_blank\">CubeWin</a></small>";
$message .= "</body>";
$message .= "</html>";

// send email
$result = mail($to, $subject, $message, $headers);

if ($result === true) {
  echo "true";
} else {
  echo "false";
}
?>