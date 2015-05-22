$(document).ready(function(){
	
	animateSeaShells();
	
	$("#contactWord").click(function(){
		window.location="mailto:chris@ccarteronline.com";
	});
	
});

function animateSeaShells(){
	
	var aniTime = 1000;
	
	moveShell_1 = function(){
		
		$("#seashell_1 ").transition({rotateY:'180deg'},aniTime, function(){
		
			$(this).transition({rotateY: '0deg'},aniTime, function(){
				moveShell_1();
			});
			
		});
	}
	
	moveShell_2 = function(){
		
		$("#seashell_2 ").transition({rotateY:'180deg'},aniTime, function(){
		
			$(this).transition({rotateY: '0deg'},aniTime, function(){
				moveShell_2();
			});
			
		});
	}
	moveShell_1();
	moveShell_2();
	
}