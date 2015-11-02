// // MAYA

// $('.img-container').each(function() {
// 	// Get a reference to the image.
// 	var img = $(this).find('img');

// 	// Hide by default
// 	img.hide();

// 	$(this).hover(function() {
// 		img.stop().fadeIn(500);
// 	}, function() {
// 		img.stop().fadeOut(500);
// 	});
// });

//MAYA

// $("#m").mouseenter(function() {
// 	$("#m").fadeOut(500);
// 	$("img/logoa.png").fadeIn(2000);
// });

// $(".middle img").mouseenter(function() {
// 	$(".middle img").fadeOut(500, function() {
// 		$(".middle img").attr("src", "img/logoa.png");
// 	}).fadeIn(500);
// 	$(".middle img").fadeOut(500, function() {
// 		$(".middle img").attr("src", "img/logoy.png");
// 	}).fadeIn(500);
// 	$(".middle img").fadeOut(500, function() {
// 		$(".middle img").attr("src", "img/logoa2.png");
// 	}).fadeIn(500);
// 	$(".middle img").fadeOut(500, function() {
// 		$(".middle img").attr("src", "img/logo2.png");
// 	}).fadeIn(500);
// 	return false;
// });


// Page Transitions
// $(document).ready(function() {
// 	$("body").css("display", "none");

// 	$("body").fadeIn(2000);

// 	$("a.transition").click(function(event) {
// 		event.preventDefault();
// 		linkLocation = this.href;
// 		$("#middle").fadeOut(1000, redirectPage);
// 	});
// 	function redirectPage() {
// 		window.location = linkLocation;
// 	}
// });


//Background Transitions

$(document).ready(function() {

	$(".expand").delay(1500).show(1000);


	$(".navbar-default .navbar-nav li").not("#home").click(function() {
		event.preventDefault();
		$(".middle img").fadeOut(500);
	});

	$(".navbar-default .navbar-nav li").not("#about").click(function() {
		event.preventDefault();
		console.log("TRUE");
		$(".aboutmiddle").fadeOut(500);
		$(".aboutmiddle").css("dipslay", "none");
	});

	$("#home").click(function(event) {
		event.preventDefault();
		$(".aboutmiddle").fadeOut(500, function() {
			$(".aboutmiddle").css("dipslay", "none");
			$(".middle").css("display", "block");
			$(".middle img").fadeIn(500);
		});
		$(".contactmiddle").fadeOut(500, function() {
			$(".contactmiddle").css("dipslay", "none");
			$(".middle").css("display", "block");
			$(".middle img").fadeIn(500);
		});
		$("body").css("background", "#FF9595");
		$(".navbar-default .navbar-nav li a").css("color", "white");
		
		return false;
	});

	$("#about").click(function(event) {
		event.preventDefault();
		$("body").css("background", "#95D9FF");
		$(".navbar-default .navbar-nav li a").css("color", "white");
		$(".middle").css("display", "none");
		$(".contactmiddle").css("display", "none");
		$(".aboutmiddle").delay(1000).fadeIn(1000);
		$(".cinfo").delay(3000).fadeIn(2000);

		return false;
	});

	$("#projects").click(function(event) {
		event.preventDefault();
		$(".navbar-default .navbar-nav li a").css("color", "#2C2C2D");
		$("body").css("background", "#FEE43D");
		$(".middle").css("display", "none");
	});

	$("#skills").click(function(event) {
		event.preventDefault();
		$(".navbar-default .navbar-nav li a").css("color", "white");
		$("body").css("background", "#2572FF");
		$(".middle").css("display", "none");
	});

	$("#contact").click(function(event) {
		event.preventDefault();
		$(".navbar-default .navbar-nav li a").css("color", "white");
		$("body").css("background", "#16002F");
		$(".middle").css("display", "none");
		$(".contactmiddle").delay(1000).fadeIn(1000)
		return false;
	});

});

$("#me").mouseover(function(event) {
	console.log("HERE");
	$("#name").css("display", "block");
})


// Header link fades
$(".navbar-default .navbar-nav li").mouseover(function() {
	$(this).siblings().addClass("fade1");
}).mouseout(function() {
	$(this).siblings().removeClass("fade1");
});

// Name toggle
// $(".there").hover(function() {
// 	$(".expand").show(1000);
// });


// $("body").click(function() {
// 	$("body").fadeIn(500, function() {
// 		$("body").addClass("blue");
// 	}).fadeOut(500);
// 	$("body").toggleClass("night")
// });




// $(".navbar-default .navbar-nav li #home").click(function() {
// 	$(".middle img").fadeIn(500);
// });







