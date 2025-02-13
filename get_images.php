<?php
$folder = "img/";
$images = array_values(array_diff(scandir($folder), array('.', '..'))); // Get all image files
echo json_encode($images); // Return JSON response
?>
