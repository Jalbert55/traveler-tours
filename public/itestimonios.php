<?php
// Habilitar la visualización de errores
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Datos de conexión a la base de datos (reemplaza con tus datos)
$servername = $_ENV['DB_SERVER'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_NAME'];

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa<br>";
}

// Obtener los datos del testimonio (esto debería venir de una solicitud POST)
$data = json_decode(file_get_contents('php://input'), true);

$nombre = $data['nombre'] ?? null;
$texto = $data['texto'] ?? null;
$calificacion = $data['calificacion'] ?? null;
$imagen = $data['imagen'] ?? null;
$timestamp = date("Y-m-d H:i:s"); // O puedes usar el timestamp que envíes desde el frontend

// Verificar que los datos no sean nulos
if (is_null($nombre) || is_null($texto) || is_null($calificacion) || is_null($imagen)) {
    die("Error: Uno o más campos están vacíos.");
}

// Preparar la consulta
$stmt = $conn->prepare("INSERT INTO testimonios (nombre, texto, calificacion, imagen, timestamp) VALUES (?, ?, ?, ?, ?)");
if ($stmt === false) {
    die("Error en la preparación de la consulta: " . $conn->error);
}

// Vincular parámetros
$stmt->bind_param("ssiss", $nombre, $texto, $calificacion, $imagen, $timestamp);

// Ejecutar la consulta
if ($stmt->execute()) {
    // Obtener el ID del último registro insertado
    $last_id = $stmt->insert_id;

    // Preparar el testimonio insertado para devolverlo
    $inserted_testimonio = [
        'id' => $last_id,
        'nombre' => $nombre,
        'texto' => $texto,
        'calificacion' => $calificacion,
        'imagen' => $imagen,
        'timestamp' => $timestamp
    ];

    // Devolver el testimonio insertado como JSON
    header('Content-Type: application/json');
    echo json_encode($inserted_testimonio);
} else {
    echo "Error al insertar: " . $stmt->error;
}

// Cerrar la declaración y la conexión
$stmt->close();
$conn->close();
?>