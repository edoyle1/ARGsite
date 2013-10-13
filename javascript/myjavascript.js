// function definition
// myFun = function() {};

// bind an action (a function) to an event
// $("li").hover(myFun);

$(document).ready(function(){
	floatObj()
	var height = $('.row-fluid').position().top+$('.row-fluid').outerHeight(true) + 30
	$('#floatMenu').css({top:height});
	$(window).resize(function() {
		var curr = $('#floatMenu').position().top
		var height = $('.row-fluid').position().top+$('.row-fluid').outerHeight(true) + 30
		if ($(document).scrollTop() > height){
			$('#floatMenu').animate({top:$(document).scrollTop()},{duration:0,queue:false});}
			else{
				$('#floatMenu').animate({top:height + $(document).scrollTop()},{duration:0,queue:false});
			}
		});
});

// Floating NavBar - Side
function floatObj()
{
	var names = ['#floatMenu'];
	for (var i = 0; i < names.length; i++){
		(function(i){
			$(window).scroll(function(){
				var menuYloc = $('.row-fluid').position().top+$('.row-fluid').outerHeight(true) + 30;
				var offset = $(document).scrollTop() + 20 + 'px';
				if ($(document).scrollTop() > menuYloc){
					$(names[i]).animate({top:offset},{duration:0,queue:false});}
				});
		})(i);
	};
};
