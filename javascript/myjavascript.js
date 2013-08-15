// function definition
// myFun = function() {};

// bind an action (a function) to an event
// $("li").hover(myFun);

$(document).ready(function(){
    var names = ['#sidebar'];
    for (var i = 0; i < names.length; i++){
        (function(i){
            var menuYloc = null;
            menuYloc = parseInt($(names[i]).css('top').substring(0,$(names[i]).css('top').indexOf('px')));
            $(window).scroll(function(){
                var offset = menuYloc + $(document).scrollTop() + parseInt($('#header').css('height').substring(0,$('#header').css('height').indexOf('px'))) + 'px';
                $(names[i]).animate({top:offset},{duration:0,queue:false});
            });
        })(i);
    };
});
