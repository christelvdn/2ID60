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

/*Ontdek het zelf */
function hideImage(z){
	$("#idEntree").hide();
	$("#idBenedenverdieping").hide();
	$("#idBadkamer1").hide();
	$("#idTrapgat").hide();
	$("#idBadkamer2").hide();
	$("#idClub").hide();
	$("#idKeuken1").hide();
	$("#idEetkamer").hide();
	$("#idKeuken2").hide();
	$("#idDak").hide();
	$("#idTuin").hide();
	z.fadeIn(1250).removeClass('hidden');
}

$("#entree").on("click", function(){
    hideAllBut($("#idEntree");
});

$("#benedenverdieping").on("click", function(){
    hideAllBut($("#idBenedenverdieping");
});

$("#badkamer1").on("click", function(){
    hideAllBut($("#idBadkamer1");
});

$("#trapgat").on("click", function(){
    hideAllBut($("#idTrapgat");
});

$("#badkamer2").on("click", function(){
    hideAllBut($("#idBadkamer2");
});

$("#woonkamer").on("click", function(){
    hideAllBut($("#idWoonkamer");
});

$("#keuken1").on("click", function(){
    hideAllBut($("#idKeuken1");
});

$("#eetkamer").on("click", function(){
    hideAllBut($("#idEetkamer");
});

$("#keuken2").on("click", function(){
    hideAllBut($("#idKeuken2");
});

$("#dak").on("click", function(){
    hideAllBut($("#idDak");
});

$("#tuin").on("click", function(){
    hideAllBut($("#idTuin");
});
