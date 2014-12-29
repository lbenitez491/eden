<?php
	/* Incluimos el fichero de la config_bd */
	include_once("config_bd.php");
	/* Incluimos la clase base-datos */
	include_once("base_datos.php") ;

	/* Clase Articulo */
	class EspeciePlantae{
 
	    private $clase;
	    
	    public function __construct ($clase) {
			$this-> clase = $clase;
			
		}
			
		public function ingresarPlanta(){
		
			/* Creamos la instancia del objeto. Ya estamos conectados */
			$baseDatos = Basedatos:: getInstance();
			
			/* Asigna valores a atributos para ingresar a sql */
			$clase = $this-> clase;
			
			/* Inserta los nuevos datos del articulo */
			$sql = sprintf("INSERT INTO plantae_clase(clase) VALUES('$clase')");
			
			/* Ejecutamos la query */
			$insert = $baseDatos-> ejecutar($sql);
			
			/* Retorna resultado del insert */
			return $insert;
		}
	}
?>