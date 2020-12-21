<?php
echo 1;
$servername = "127.0.0.1:3315";
$username = "root";
$password = "Ou891007";

echo 2;
$conn = new mysqli($servername, $username, $password);

echo 3;
if ($conn->connect_error) {
    echo 4;
    die("error: " . $conn->connect_error);
}

echo 5;
echo "success";


