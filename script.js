/* Click functions of the navigation bar  to show the proper content */
$(document).ready(function(){
	hideAllBut($(".home"), $(".carousel"));
});

$("#idHome").on("click", function(){
    hideAllBut($(".home"), $(".carousel"));
});


$("#idOver").on("click", function(){
  hideAllBut($(".over"),$(".header"));
});  

$("#geschiedenis").on("click", function(){
    hideAllBut($(".janluyken"),$(".header"));
});

$("#idBewoners").on("click", function(){
    hideAllBut($(".bewoners"),$(".header"));
});

$("#idContact").on("click", function(){
    hideAllBut($(".contact"),$(".header"));
});

/*hideAllBut function to hide all the content in the page except for the content you need*/
function hideAllBut(x,y){
		$(".home").hide();
		$(".janluyken").hide();
		$(".over").hide();
		$(".bewoners").hide();
		$(".contact").hide();
		$(".carousel").hide();
		$(".header").hide();
		x.fadeIn(1250).removeClass('hidden');
		y.fadeIn(800).removeClass('hidden');
		$('body').scrollTop(0);
	}

/*Activate another tab in the navigation bar after clicking/opening that tab*/
$(document).on('click', '.navbar-nav li', function() {
    $(".navbar-nav li").removeClass("active");
    $(this).addClass("active");
   });

/* Navigation bar disappers after clicking in mobile device modus */

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

