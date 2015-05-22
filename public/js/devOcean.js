$(document).ready(function(){
	

	moveShark();
	animateDevelop();
	createBubbles();
	glistenRubies();
	animateJellies();

	
});

function animateJellies(){
	
	animateJelly1 = function(){
		
		$("#jelly_1").transition({opacity:1, scale:0.9}, 2000, function(){
			
			$(this).transition({opacity:0.5, scale:1}, 2000, function(){
				animateJelly1();
			});
		});
		
	}
	animateJelly2 = function(){
		
		$("#jelly_2").transition({opacity:1, scale:0.9}, 3000, function(){
			
			$(this).transition({opacity:0.5, scale:1}, 3000, function(){
				animateJelly2();
			});
		});
		
	}
	
	animateJelly3 = function(){
		
		$("#jelly_3").transition({opacity:1, scale:0.9}, 3000, function(){
			
			$(this).transition({opacity:0.5, scale:1}, 3000, function(){
				animateJelly3();
			});
		});
		
	}
	
	animateJelly4 = function(){
		
		$("#jelly_4").transition({opacity:1, scale:0.9}, 4000, function(){
			
			$(this).transition({opacity:0.2, scale:1}, 4000, function(){
				animateJelly4();
			});
		});
		
	}
	animateJelly1();
	animateJelly2();
	animateJelly3();
	animateJelly4();
	
}

function glistenRubies(){
	
	var glisten_1 = 1000;
	var glisten_2 = 2000;
	
	ruby_1 = function(){
		
		$("#glisten_1").transition({rotate:"180deg", scale:"2", opacity:1, delay:glisten_1}, 1500, function(){
		
			$(this).transition({rotate:"0deg", scale:"1", opacity:0}, 2000);
			
			glisten_1 = 10000;
			ruby_1();
			
		});
		
	}
	
	ruby_2 = function(){
		
		$("#glisten_2").transition({rotate:"180deg", scale:"2", opacity:1, delay:glisten_2}, 1500, function(){
		
			$(this).transition({rotate:"0deg", scale:"1", opacity:0}, 2000);
			
			glisten_2 = 11000;
			ruby_2();
			
		});
		
	}
	ruby_1();
	ruby_2();
	
	
}

function createBubbles(){
	
	//var bubTime_1 = 3000;
	var bubTime_2 = 3000;
	var bubTime_3 = 5000;
	
	animateBubble_1 = function(){
		
		$("#bubble_1").transition({x:"60px", y:"-100px", scale:"1.5"}, 3000, "linear").transition({x:"20px", y:"-300px", scale:"4"}, 8000,'linear', function(){
			
			$(this).remove();
			$("#devObject").prepend('<img src="img/bubble.png" class="bubble" id="bubble_1">');
			animateBubble_1();
		});
		
	}
	
	animateBubble_2 = function(){
		
		$("#bubble_2").transition({x:"-60px", y:"-100px", scale:"1.5", delay:bubTime_2}, 3000, "linear").transition({x:"20px", y:"-200px", scale:"2.5"}, 8000, 'linear', function(){
			
			$(this).remove();
			$("#devObject").prepend('<img src="img/bubble.png" class="bubble" id="bubble_2">');
			
			bubTime_2 = 0;
			
			animateBubble_2();
			
			
		});
		
	}
	
	animateBubble_3 = function(){
		
		$("#bubble_3").transition({x:"-20px", y:"-100px", scale:"1.5", delay:bubTime_3}, 3000, "linear").transition({x:"-50px", y:"-200px", scale:"3"}, 8000, 'linear', function(){
			
			$(this).remove();
			$("#devObject").prepend('<img src="img/bubble.png" class="bubble" id="bubble_3">');
			
			bubTime_3 = 0;
			
			animateBubble_3();
			
			
			
		});
	}

	animateBubble_1();
	animateBubble_2();
	animateBubble_3();
	
	
}

function animateDevelop(){
	
	scaleDevWords = function(){
		
		$("#develop").transition({scale:0.9}, 4000, 'easeInOutCubic', function(){
			$(this).transition({scale: 1}, 4000, 'easeInOutCubic', function(){
				scaleDevWords();
			});
		});
	}
	
	scaleDevWords();
}


function moveShark(){
	
	animateShark = function(){
		
		$("#shark").show();
		$("#shark").transition({rotate: "9deg"}, 300);
		
		$("#shark").transition({opacity:"0", x:"850px"}, 90000, 'linear', function(){
			
			$("#shark").transition({x:"0px"},1000, function(){
				$(this).transition({"opacity" : "1"});
				animateShark();
			});
		});
	}
	animateShark();
}
