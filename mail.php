<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $pago_menor = $_POST['pago_menor'];
    $pago_mayor = $_POST['pago_mayor'];
    $tarifa = $_POST['tarifa'];
    $estado = $_POST['estado'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Correo al que se enviará la información
    $to = "roofstein@gmail.com"; 
    $subject = "Nueva cotización desde el sitio web";

    // Cuerpo del mensaje
    $body = "
    <h2>Solicitud de cotización</h2>
    <p><strong>Nombre:</strong> $name</p>
    <p><strong>Celular:</strong> $phone</p>
    <p><strong>Pago menor:</strong> $pago_menor</p>
    <p><strong>Pago mayor:</strong> $pago_mayor</p>
    <p><strong>Tarifa:</strong> $tarifa</p>
    <p><strong>Estado:</strong> $estado</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Descripción:</strong><br>$mensaje</p>
    ";

    // Cabeceras del correo
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    // Envío del correo
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>
            alert('¡Gracias! Tu cotización ha sido enviada con éxito.');
            window.location.href = 'index.html';
        </script>";
    } else {
        echo "<script>
            alert('Error al enviar el mensaje. Intenta de nuevo.');
            window.location.href = 'index.html';
        </script>";
    }
}
?>