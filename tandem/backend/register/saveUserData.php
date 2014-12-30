<?php


require_once('../mysql/connect.php');

$data = json_decode(file_get_contents('php://input'), true);


class RegisterUser{

	public $post_data = array();

	function __construct($connect){

		$this->connect = $connect;
		$this->post_data = $this->cleanData($data);
	}

	public function saveUserDetails($data){

		extract($data);

		$get_user_count = $this->getUserByEmail($email);

		if($get_user_count >= 1){ 

			$error = 'User is already registered';
			$response_message = $this->responseMessage($success, $error);
			echo $response_message;
			return false;
		}

		$query = $this->connect->prepare("INSERT INTO users (name, email, password, age, phone, image) 
		 		   VALUES (?, ?, ?, ?, ?, ?)");
		$arrayName = array("$name", "$email", "$password", $age, $phone, "$image");
	    $query->execute($arrayName);

	    $success = 'You have been succesfully registered';
		$response_message = $this->responseMessage($success, $error);
		echo $response_message;
		return false;

	}

	public function responseMessage($success = false, $error ){

		$response = array( 
							'success_message' => $success,
							'error_message'   => $error 
					);
		$response_encode  = json_encode($response);
		return $response_encode; 
	}

	public function getUserByEmail($email){

		$query  = $this->connect->prepare("SELECT * FROM users WHERE email = ?");
		$query->execute(array($email));
		$user = $query->rowCount();
		return $user;
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

$connect = new database();
$reg = new RegisterUser($connect->dbh);
$reg->saveUserDetails($data);
?>