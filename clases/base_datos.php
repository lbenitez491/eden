<?php
	/* Clase encargada de gestionar las conexiones a la base de datos */
	Class Basedatos{
	
	   private $servidor;
	   private $usuario;
	   private $password;
	   private $baseDatos;
	   private $link;
	   private $consulta;
	   private $array;
	   static $_instance;
	
	   /* La función construct es privada para evitar que el objeto pueda ser creado mediante new */
	   private function __construct(){
	      $this-> setConexion();
	      $this-> conectar();
	   }
	
	   /* Método para establecer los parámetros de la conexión */
	   private function setConexion(){
	      $conf = config_bd::getInstance();
	      $this-> servidor = $conf-> getHostDB();
	      $this-> base_datos = $conf-> getDB();
	      $this-> usuario = $conf-> getUserDB();
	      $this-> password = $conf-> getPassDB();
	   }
	
	   /* Evitamos el clonaje del objeto. Patrón Singleton */
	   private function __clone(){
		   
	   }
	
	   /* Función encargada de crear, si es necesario, el objeto. Esta es la función que debemos llamar desde fuera de la clase para instanciar el objeto, y así, poder utilizar sus métodos */
	   public static function getInstance(){
	      if (!(self::$_instance instanceof self)){
	         self::$_instance=new self();
	      }
	         return self::$_instance;
	   }
	
	   /* Realiza la conexión a la base de datos */
	   private function conectar(){
	      $this->link=mysql_connect($this-> servidor, $this-> usuario, $this-> password);
	      mysql_select_db($this-> base_datos, $this-> link);
	      @mysql_query("SET NAMES 'utf8'");
	   }
	
	   /* Método para ejecutar una sentencia sql */
	   public function ejecutar($sql){
	      $this-> consulta = mysql_query($sql,$this->link);
	      return $this-> consulta;
	   }
	
	   /* Método para obtener una fila de resultados de la sentencia sql */
	   public function obtenerFila($consulta,$fila){
	      if ($fila==0){
	         $this-> array = mysql_fetch_array($consulta);
	      }else{
	         mysql_data_seek($consulta,$fila);
	         $this-> array = mysql_fetch_array($consulta);
	      }
	      return $this->array;
	   }
	
	   /* Devuelve el último id del insert introducido */
	   public function obtenerUltimoId(){
	      return mysql_insert_id($this->link);
	   }
	
	}
?>