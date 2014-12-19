<?php

require_once('../mysql/connect.php');

$data = json_decode(file_get_contents('php://input'), true);


class RegisterUser{

	public $post_data = array();

	function __construct( $data ){

		$this->connect = new database();
		$this->post_data = $this->cleanData( $data );
	}

	public function saveUserDetails( ){


		print_R("-----------".$this->connect->query("select * from courses"));



	}

	public function buildData( $input ){

	    $input = strip_tags ( $input );
	    $input = trim ( $input );
	    return $input;

	}

	public function cleanData( $data ){

		$return_data = array();
		if(isset($data)){
			foreach ($data as $key => $value) {
				$return_data[$key] = $this->buildData($value);
			}
			return $return_data;
		}

	}
}

$connect = new database();print_R($connect);
$reg = new RegisterUser($data);
$reg->saveUserDetails();
?>