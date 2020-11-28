<?php

	$name = $_POST['name'];
	$email = $_POST['email'];
	$number = $_POST['number'];
	$msg = $_POST['msg'];

	$to_email = "prajyothalingale05@gmail.com,patilsudhir@hdfcsales.com";
	$subject = "Enquiry related to loan";

	$body = "Name :". $name;
	$body .= "\r\n";
	$body .= "Email :".$email;
	$body .= "\r\n";
	$body .="Mobile number :". $number;
	$body .= "\r\n";
	$body .="Message :". $msg;
	$body .= "\r\n";

	$headers = "From: ";
	$headers .= $email;

	if(mail($to_email,$subject,$body,$headers)){
		echo "Date saved...";
	}
	else{
		echo "Error occured...";
	}

?>