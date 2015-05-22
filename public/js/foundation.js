$(document).ready(function(){
	var socket = io();
	var ipAddressKept;
	var keptSocket;
	var hasArrived = false;
	var isLoggedIn = false;
	

	runTest1();
	
	
	//First launch, check to see if a user has a session
	socket.on('server variables', function(skid, clientAddress){
		if(!hasArrived){
			hasArrived = true;
			ipAddressKept = clientAddress;
			
			$("#clientAddress").append(ipAddressKept);
			keptSocket = skid;
			//user has joined page, check to see that they are logged in
			checkIfLoggedIn();
		}
	});
	
	//initiate login for login button to work
	$("#loginBtn").click(function(){
		signIn($("#usernameField").val(), $("#passwordField").val());
	});

	
});

function signIn(usr, pass){
	
	
	$.post("http://localhost:775", {
		s_username : usr,
		s_password : pass
		
	}, function(data, status){
		
		if(data.errorMsg){
			$("#errMsg").text("");
			$("#errMsg").append(data.errorMsg);
			
		}else if(data.successMsg){
			
			$("#errMsg").text("");
			$("#errMsg").append(data.successMsg);
			$("#errMsg").css({"color" : "green"});
		}
		
	}, "json");
	
}

function runTest1(){
	
	$.post("http://localhost:775", {
		test : true
		
	}, function(data, status){
		console.log("Data: " + data + "\nStatus: " + status);
		
		if(status == "success"){
			$("#test1 span").append("Congrats, this test passes");
		}
	});
}

function checkIfLoggedIn(){
	
	$.post("http://localhost:775", {
		isLoggedIn : true
		
	}, function(data, status){
		console.log("Data: " + data + "\nStatus: " + status);
		
		if(data == "notLoggedIn"){
			$("#test2 span").append("The user is NOT logged in log in below");
		}
	});

}