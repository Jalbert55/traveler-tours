<?php
// Conexión a la base de datos (ajusta los datos de conexión)
$servername = $_ENV['DB_SERVER'];
$username = $_ENV['DB_USERNAME'];
$password = $_ENV['DB_PASSWORD'];
$dbname = $_ENV['DB_NAME'];

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Consulta SQL
$sql = "SELECT p.id, p.titulo, p.imgPortada, p.duracion, p.fechas, h.nombre AS hotel, v.aerolinea AS vuelo, p.precio
        FROM promociones p
        INNER JOIN hoteles h ON p.id_hotel = h.id
        INNER JOIN vuelos v ON p.id_vuelo = v.id";
$result = $conn->query($sql);

// Crear un array para almacenar los resultados
$promociones = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $promociones[] = $row;
    }
} else {
    echo "0 results";
}

// Cerrar conexión
$conn->close();

// Codificar los datos en JSON y enviar la respuesta
header('Content-Type: application/json');
echo json_encode($promociones);