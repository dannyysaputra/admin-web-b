<?php 
    define("DB_SERVER", "localhost");
    define("DB_USER", "root");
    define("DB_PASSWORD", "");
    define("DB_DATABASE", "karyawan");
    
    
    $conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
    
    if (!$conn) {
        die('Connection failed: ' . mysqli_connect_error());
    }

    $mysql_query = "SELECT check_out - check_in from Karyawan";
    $result = mysqli_query($conn, $mysql_query);
    $res = $result->fetch_array();

    $val = intval($res[0]);

    if ($val == 9) {
        echo 'Normal';
    } elseif ($val < 9) {
        echo 'Minus';
    } elseif ($val > 9) {
        echo 'Overtime';
    }
?>

