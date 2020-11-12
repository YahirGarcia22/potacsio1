<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "potacsio";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: Pos falló " . $conn->connect_error);
}

    $id_cliente=$_POST['id'];
    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    $direccion=$_POST['direccion'];
    $correo=$_POST['correo'];
    $tipopago=$_POST['tipopago'];
    $pedido=$_POST['pedido'];

    $sql = "INSERT INTO pedidos VALUES ('$id_cliente','$nombre', '$apellido','$direccion','$tipopago','$correo','$pedido')";

    if ($conn->query($sql) === TRUE) {
      header("Location:factura.php");
      } else {
        echo "Error: No se pudo completar el pedido" . $sql . "<br>" . $conn->error;
      }
           $conn->close();
    
?>