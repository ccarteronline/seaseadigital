$(document).ready(function(){
	

	animateOceanBlurs();
	
	shakeDesign();
	shakeFish();
	shakeRedFish();

	
});

function shakeRedFish(){
	
	moveRedFish = function(){
		
		$("#redFish").transition({rotate:'6deg'}, 2000, 'linear', function(){
			
			$("#redFish").transition({rotate: '0deg'}, 2000, 'linear', function(){
				moveRedFish();
			});
			
		});
	}
	
	moveRedFish();
	
}

function shakeFish(){
	
	shakeFish_1 = function(){
		
		$("#fish_1").transition({rotate:'6deg'}, 1600, 'linear', function(){
			
			$("#fish_1").transition({rotate: '0deg'}, 1600, 'linear', function(){
				shakeFish_1();
			});
		});
	}
	
	
	//
	
	shakeFish_2 = function(){
		
		$("#fish_2").transition({rotate:'6deg'}, 1700, 'linear', function(){
			
			$("#fish_2").transition({rotate: '0deg'}, 1700, 'linear', function(){
				shakeFish_2();
			});
		});
	}
	
	shakeFish_3 = function(){
		
		$("#fish_3").transition({rotate:'6deg'}, 1800, 'linear', function(){
			
			$("#fish_3").transition({rotate: '0deg'}, 1800, 'linear', function(){
				shakeFish_3();
			});
		});
	}
	
	shakeFish_1();
	shakeFish_2();
	shakeFish_3();
	
}

function shakeDesign(){
	
	shakeLetters = function(){
		
		$("#design").transition({rotate: '5deg'}, 1000, 'linear', function(){
			
			$("#design").transition({rotate: '0deg'}, 1000, 'linear', function(){
				shakeLetters();
			});			
		});
	}
	
	shakeLetters();
	
	
}

function animateOceanBlurs(){
	
	rotateWhirlPool = function(){
		
		$("#waterBlur").transition({rotate: '360deg', opacity: ".5"}, 40000, 'linear', function(){
			
			$("#waterBlur").transition({rotate: '0deg', opacity: "1"}, 40000, 'linear', function(){
				
				rotateWhirlPool();
				
			});
		});
	}
	
	rotateWhirlPool();
	
	
}