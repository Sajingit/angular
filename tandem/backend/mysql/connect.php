<?php

class database{

	public function __construct(){

		try {

			$this->hostname = 'localhost';
			$this->username = 'root';
			$this->password = 'qburst';

		    $this->dbh = new PDO("mysql:host=".$this->hostname.";dbname=tandem", $this->username, $this->password);
		}
		catch(PDOException $e){

		    echo $e->getMessage();
		}
	}
}


?>


