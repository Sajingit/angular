<?php
require_once('../mysql/connect.php');

class Cources{

	public function __construct($connect){
		$this->connect = $connect;
	}

	public function getCources ( ){

		$results_array  = array();
		$sql    		= "Select * from course";
		$result 		= $this->connect->query($sql);
		
		foreach ($result as $value) {
			$results_array[] = $value;
		}
		return $results_array;
	}

}
$connect 		= new database();
$course 		= new Cources($connect->dbh);
$cources 		= $course->getCources();
$json_encode 	= json_encode($cources);

print_r($json_encode);
die();
?>