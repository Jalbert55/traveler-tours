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
}

// Obtener los datos del testimonio (esto debería venir de una solicitud POST)
$data = json_decode(file_get_contents('php://input'), true);

$nombre = $data['nombre'] ?? null;
$email = $data['email'] ?? null;
$telefono = $data['telefono'] ?? null;
$mensaje = $data['mensaje'] ?? null;
$timestamp = date("Y-m-d H:i:s"); // O puedes usar el timestamp que envíes desde el frontend

// Verificar que los datos no sean nulos
if (is_null($nombre) || is_null($email) || is_null($mensaje)) {
    die("Error: Uno o más campos están vacíos.");
}

// Preparar la consulta
$stmt = $conn->prepare("INSERT INTO comentarios (nombre, email, telefono, mensaje, timestamp) VALUES (?, ?, ?, ?, ?)");
if ($stmt === false) {
    die("Error en la preparación de la consulta: " . $conn->error);
}

// Vincular parámetros
$stmt->bind_param("ssiss", $nombre, $email, $telefono, $mensaje, $timestamp);

// Ejecutar la consulta
if ($stmt->execute()) {
    // Obtener el ID del último registro insertado
    $last_id = $stmt->insert_id;

    // Preparar el testimonio insertado para devolverlo
    $inserted_testimonio = [
        'id' => $last_id,
        'nombre' => $nombre,
        'email' => $email,
        'telefono' => $telefono,
        'mensaje' => $mensaje,
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