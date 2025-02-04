<?php
// Datos de conexión a la base de datos (reemplaza con tus datos)
$servername = $_ENV['DB_SERVER'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_NAME'];

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(['error' => 'Conexión fallida: ' . $conn->connect_error]));
}

// Consulta para obtener los testimonios
$sql = "SELECT * FROM testimonios";
$result = $conn->query($sql);

$testimonios = [];

if ($result->num_rows > 0) {
    // Recorrer los resultados y almacenarlos en un array
    while ($row = $result->fetch_assoc()) {
        $testimonios[] = $row;
    }
}

// Devolver los testimonios en formato JSON
header('Content-Type: application/json');
echo json_encode($testimonios);

// Cerrar conexión
$conn->close();
?>