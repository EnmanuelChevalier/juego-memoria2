<?php
header("Content-Type: application/json");
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario_id = isset($_POST['usuario_id']) ? intval($_POST['usuario_id']) : 0;
    $nivel = isset($_POST['nivel']) ? intval($_POST['nivel']) : 1;
    $puntos = isset($_POST['puntos']) ? intval($_POST['puntos']) : 0;
    $numero_adivinado = isset($_POST['numero_adivinado']) ? intval($_POST['numero_adivinado']) : 0;

    if ($usuario_id > 0) {
        $sql = "INSERT INTO partidas (usuario_id, nivel, puntos, numero_adivinado) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iiii", $usuario_id, $nivel, $puntos, $numero_adivinado);
        
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Partida guardada"]);
        } else {
            echo json_encode(["status" => "error", "message" => $stmt->error]);
        }
        
        $stmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Usuario no válido"]);
    }
}

$conn->close();
?>
