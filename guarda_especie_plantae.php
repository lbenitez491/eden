<?php
	include("clases/especie-plantae.php");

	$test = $_POST['clase'];
	$plantae = new EspeciePlantae($test);

	$ingresarPlanta = $plantae-> ingresarPlanta();

	echo $ingresarPlanta;
?>