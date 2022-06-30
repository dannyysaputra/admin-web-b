<?php
define("DB_SERVER", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "");
define("DB_DATABASE", "karyawan");


$conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$query = mysqli_query($conn, "SELECT * FROM Karyawan");
while ($data = mysqli_fetch_object($query)) {
    $data_karyawan[] = $data;
}
echo json_encode($data_karyawan);
