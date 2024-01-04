<?php
$conn = mysqli_connect("localhost", "root", "", "claruz") or die("Connection Error: " . mysqli_error($conn));
// $result = mysqli_query($conn, "SELECT Name,Email,Phone,Message FROM claruzform");

// header("Content-type: application/json");
// header("Access-Control-Allow-Credentials: true");
// header("Access-Control-Allow-Origin: *.ampproject.org");
// header("AMP-Access-Control-Allow-Source-Origin: https://www.domain.com");
// header("Access-Control-Expose-Headers: AMP-Access-Control-Allow-Source-Origin");

if(!empty($_POST["send"])) {
 
	$name = $_POST["name"];
	$email = $_POST["email"];
	$phone =$_POST["phone"];
	$message = $_POST["message"];
	
	// $phone =$_POST["phone"];

	// $phone = $_POST["phone"];. " " . $_POST["phone"];

	// $echo countrycode;





// $conn = mysqli_connect("localhost", "root", "", "ecesis") or die("Connection Error: " . mysqli_error($conn));
mysqli_query($conn,"INSERT INTO claruzform(Name,Email,Phone,Message) VALUES ('" . $name. "', '" . $email. "','" . $phone. "','" . $message. "')");
$insert_id = mysqli_insert_id($conn);
echo $insert_id;
if(!empty($insert_id)) 
{
    
$message = "Your contact information is saved successfully";

 header("Location: ThankYou.html");
die();
}	
}
?>