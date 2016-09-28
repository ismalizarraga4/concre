<?php 
	$server	= 'localhost';
	$db 	= 'venta';
	$user	= 'root';
	$pass  	= '';
	$conexion;

try {
    $conexion = new PDO('mysql:host=localhost;dbname=venta', $user, $pass);
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}

?>
