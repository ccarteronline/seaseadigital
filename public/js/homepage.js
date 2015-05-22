$(document).ready(function(){
	
	

	aniAndCloudGen();
	animateBirds();
	swayOuterMountains();
	swayInnerMountains();
	swaySandDunes();
	makeWaves();
	moveBoat();
	
	
	checkWidthAdjust();

	enableNavButtons();
	
	GetNavigatorInformationForMobile();

	
});

function GetNavigatorInformationForMobile(){
	var sBrowser, sUsrAg = navigator.userAgent;

	if(sUsrAg.indexOf("Chrome") > -1) {
	    sBrowser = "Google Chrome";
	} else if (sUsrAg.indexOf("Safari") > -1) {
	    sBrowser = "Apple Safari";
	    
	} else if (sUsrAg.indexOf("Opera") > -1) {
	    sBrowser = "Opera";
	} else if (sUsrAg.indexOf("Firefox") > -1) {
	    sBrowser = "Mozilla Firefox";
	} else if (sUsrAg.indexOf("MSIE") > -1) {
	    sBrowser = "Microsoft Internet Explorer";
	}
	
	//alert("You are using: " + sBrowser);
}

function enableNavButtons(){
	
	var scrollTime = 500;
	
	$("#logo").click(function(){
		
		$('html, body').animate({
	        scrollTop: $("#homepageIsland").offset().top
	    }, scrollTime);		

	});
	
	$("#designBtn").click(function(){
		
		$('html, body').animate({
	        scrollTop: $("#DesignOcean").offset().top
	    }, scrollTime);
		
	});
	
	$("#developBtn").click(function(){
		
		$('html, body').animate({
	        scrollTop: $("#devObject").offset().top
	    }, scrollTime);
	});
	
	$("#contactBtn").click(function(){
		
		$('html, body').animate({
	        scrollTop: $("#contactObject").offset().top
	    }, scrollTime);
	    
	});
	
	$("#aboutBtn").click(function(){
		
		$('html, body').animate({
	        scrollTop: $("#aboutObject").offset().top
	    }, scrollTime);
	    
	});
}

function checkWidthAdjust(){
	
	
	setInterval(function(){
		
		console.log('Browser viewport width: ', $(window).width());
		//console.log("First Cloud: x: ", $("#cloud2").position().left, "y: ", $("#cloud2").css("marginTop"));
		
		//console.log("subtract: "+ Math.floor( ($(window).width() / $("#cloud2").width()) *100));
		console.log("cloud left: "+ $("#cloud2").position().left);
		
		console.log("Where to stop: "+ ($(window).width() - $("#cloud2").width()));
		console.log("cloud width: "+ $("#cloud2").width());
		
		
		//check if cloud hits
		stopCloud_1 = (($(window).width()-100) - $("#cloud1").width());
		stopCloud_2 = (($(window).width()-100) - $("#cloud2").width());
		
		stopWave_1 = (($(window).width()-50) - $("#wave_1").width());
		stopWave_2 = (($(window).width()-50) - $("#wave_2").width());
		stopWave_3 = (($(window).width()-50) - $("#wave_3").width());
		
		stopBoat_1 = (($(window).width()-100) - $("#boat").width());
		
		stopShark = (($(window).width()-100) - $("#shark").width());
		
		if($("#cloud1").position().left >= stopCloud_1){
			//alert("stop");
			//$("#cloud1").css({"left" :"100px"});
			$("#cloud1").hide();
		}
		
		if($("#cloud2").position().left >= stopCloud_2){
			//alert("stop");
			//$("#cloud2").css({"left" :"100px"});
			$("#cloud2").hide();
		}
		
		if($("#wave_1").position().left >= stopWave_1){
			//alert("stop");
			//$("#wave_1").css({"left" :"100px"});
			$("#wave_1").hide();
		}
		
		if($("#wave_2").position().left >= stopWave_2){
			//alert("stop");
			//$("#wave_2").css({"left" :"100px"});
			$("#wave_2").hide();
		}
		
		if($("#wave_3").position().left >= stopWave_3){
			//alert("stop");
			//$("#wave_3").css({"left" :"100px"});
			$("#wave_3").hide();
		}
		
		if($("#boat").position().left >= stopBoat_1){
			//alert("stop");
			//$("#boat").css({"left" :"10px"});
			$("#boat").hide();
		}
		
		if($("#shark").position().left >= stopShark){
			//alert("stop");
			//$("#cloud1").css({"left" :"100px"});
			$("#shark").hide();
		}
		
	
	}, 4000)
}

function moveBoat(){
	animateBoat = function(){
		
		$("#boat").transition({x:"850px"}, 80000, 'linear', function(){
			
			$("#boat").transition({opacity:"0"}, 1000, 'linear', function(){
				
				$("#boat").remove();
				$("#boatWrapper").append('<img src="img/boat.png" id="boat">');
				animateBoat();
			});
			
		});	
	}
	
	animateBoat();
	
}

function makeWaves(){
	
	var wave_1 = "<img src='img/wave_1.png' id='wave_1'>";
	var wave_2 = "<img src='img/wave_2.png' id='wave_2'>";
	var wave_3 = "<img src='img/wave_3.png' id='wave_3'>";
	
	
	
	
	//create timer to generate waves every so often then delete them when they have fully animated
	
	

/*
	setInterval(function(){
		
		createWaves();
		
	}, 3000);
*/

	
	
	createWaves = function(){

		moveWave_1 = function(){
			
			$("#waveWrapper").append(wave_1);
			$("#wave_1").transition({x:"800px", opacity: "0"}, 20000, 'linear', function(){
				$("#wave_1").remove();
				moveWave_1();
			});
		}
		
		moveWave_2 = function(){
			
			$("#waveWrapper").append(wave_2);
			$("#wave_2").transition({x:"800px", opacity: "0"}, 40000, 'linear', function(){
				$("#wave_2").remove();
				moveWave_2();
			});
			
		}
		
		moveWave_3 = function(){
			
			$("#waveWrapper").append(wave_3);
			$("#wave_3").transition({x:"800px", opacity: "0"}, 30000, 'linear', function(){
				$("#wave_3").remove();	
				moveWave_3();
			});
		}
		moveWave_1();
		moveWave_2();
		moveWave_3();
		
	}
	
	createWaves();
	
}

function swaySandDunes(){
	swaySand = function(){
		$("#beaches").transition({rotate: '2deg'}, 2100, 'linear', function(){
			
			$(this).transition({rotate:'0deg'}, 2100, 'linear', function(){
				swaySand();
			});
		});
	}
	
	swaySand();
}

function swayInnerMountains(){
	
	swayInnerObjects = function(){
		
		$("#sanditem1").transition({rotate:'2deg'}, 2000, 'linear', function(){
			
			$(this).transition({rotate:'0deg'}, 2000, 'linear', function(){
				swayInnerObjects();
			});
		});	
	}
	
	swayInnerObjects();	
}


function swayOuterMountains(){
	
	swayMountains = function(){
		
		$("#outermountain").transition({rotate:'2deg'}, 3000, 'linear', function(){
			
			$(this).transition({rotate:'0deg'}, 3000, 'linear', function(){
				swayMountains();
			});
		});
	}
	
	swayMountains();
	
}
function animateBirds(){
	
	var birdMarkUp = '<img src="img/bird1.png" id="birds">';
	
	repeatBirds = function(){
		$("#birds").transition({x: "-2000px"}, 50000, 'linear', function(){
			$("#birds").remove();
			$("#birdWrapper").append(birdMarkUp);
			
			repeatBirds();
		});
	}
	
	repeatBirds();
	
	
}

function aniAndCloudGen(){
	
	var cloud_1 = '<img src="img/cloud1.png" class="cloud" id="cloud1">';
	var cloud_2 = '<img src="img/cloud2.png" class="cloud" id="cloud2">';
	//
	moveCloud1 = function(){
		
		$("#cloud1").transition({x: '800px'}, 100000, 'linear',function(){
			//remove the cloud its done existing
			$(this).remove();
			//add a new cloud to animate
			$("#homepageIsland").prepend(cloud_1);
			//hide it then fade it in slowly
			$("#cloud1").css({"opacity" : "0"});
			$("#cloud1").transition({opacity: '1'}, 1000);
			//animate the cloud forever
			moveCloud1();
		});
	}
	
	moveCloud2 = function(){
	
		$("#cloud2").transition({x: '800px'}, 70000,function(){
			//remove the cloud its done existing
			$(this).remove()
			//add a new cloud to animate
			$("#homepageIsland").prepend(cloud_2);
			//hide it then fade it in slowly
			$("#cloud2").css({"opacity" : "0",
				"left" : "100px"
			});
			$("#cloud2").transition({opacity: '1'}, 1000);
			//animate the cloud forever
			moveCloud2();
		});
	}

	
	moveCloud1();
	moveCloud2();
	
}