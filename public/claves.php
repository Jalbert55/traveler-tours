<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin

$servername = $_ENV['DB_SERVER'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_NAME'];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if (isset($_GET['key'])) {
    $clave = $_GET['key'];

    // Preparar la consulta con un parámetro para la clave
    $sql = "SELECT img FROM imagenes WHERE clave = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $clave); // Asignar el valor de la clave

    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Array para almacenar los resultados
        $images = array();

        while ($row = $result->fetch_assoc()) {
            $images[] = $row;
        }

        echo json_encode($images); // Devolver los resultados como JSON
    } else {
        echo null;
    }

    $stmt->close();
} else {
    echo "Clave no proporcionada en la URL.";
}

$conn->close();
?>