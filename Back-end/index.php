<?
	
	header('Access-Control-Allow-Origin: http://localhost:7878');  
	session_start();
	
	
	//First test
	if(isset($_POST['test'])){
		echo "Data From Backend: ".$_POST['test'];
		
	}
	
	//check if logged in
	if(isset($_POST['isLoggedIn'])){
		
		if(isset($_SESSION['isLoggedIn'])){
			echo "Data From Backend: Is logged in show stuff for logged in.";
		}else{
			echo "notLoggedIn";
		}
		
	}
	
	
	
	//Check to see if user initiated username and password login
	if(isset($_POST['s_username']) && isset($_POST['s_password'])){
		
		if($_POST['s_username'] == "" || $_POST['s_password'] == ""){
			
			echo '{"errorMsg" : "You must provide a username and password"}';
					
		}else if($_POST['s_username'] != "testUser"){
			
			echo '{"errorMsg" : "You have entered the wrong username."}';
			
		}else if($_POST['s_password'] != "testPassword"){
			
			echo '{"errorMsg" : "You have entered the wrong password."}';
			
		}else{
			
			$_SESSION['isLoggedIn'] = $_POST['s_username'];
			
			echo '{"successMsg" : "You have logged in!"}';
		}
	}
	
	
?>