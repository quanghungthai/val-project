<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$folder = __DIR__ . "/images/"; // Path to images folder

if (!is_dir($folder) || !is_readable($folder)) {
    echo json_encode(["error" => "Image folder not found or not readable"]);
    exit;
}

$allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp']; 

$images = array_values(array_filter(scandir($folder), function ($file) use ($folder, $allowedExtensions) {
    $filePath = $folder . $file;
    $ext = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));
    return is_file($filePath) && in_array($ext, $allowedExtensions);
}));

if (empty($images)) {
    echo json_encode(["error" => "No images found"]);
    exit;
}

echo json_encode($images);
exit;
?>
