<?php
require_once('../mysql/connect.php');

$sql = "Select * from course";


$result=mysqli_query($conn,$sql);
while ($row = $result->fetch_assoc()) {
  $results_array[] = $row;
}

$json_encode = json_encode($results_array);
print_r($json_encode);
?>