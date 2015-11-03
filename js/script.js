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
	$(".skillsmiddle").css("display", "none");
	$(".projectsmiddle").css("display", "none");



	// $(".navbar-default .navbar-nav li").not("#home").click(function() {
	// 	event.preventDefault();
	// 	$(".middle img").fadeOut(500);
	// });

	// $(".navbar-default .navbar-nav li").not("#about").click(function() {
	// 	event.preventDefault();
	// 	console.log("TRUE");
	// 	$(".aboutmiddle").fadeOut(500);
	// 	$(".aboutmiddle").css("dipslay", "none");
	// });

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
		$(".skillsmiddle").fadeOut(500, function() {
			$(".skillsmiddle").css("dipslay", "none");
			$(".middle").css("display", "block");
			$(".middle img").fadeIn(500);
		});
		$(".projectsmiddle").fadeOut(500, function() {
			$(".projectsmiddle").css("dipslay", "none");
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
		$(".aboutmiddle").css("display", "none");
		$(".contactmiddle").css("display", "none");
		$(".skillsmiddle").css("display", "none");
		$(".aboutmiddle").delay(1000).fadeIn(1000);
		$(".cinfo").delay(3000).fadeIn(2000);

		return false;
	});

	$("#projects").click(function(event) {
		event.preventDefault();
		$(".navbar-default .navbar-nav li a").css("color", "white");
		$("body").css("background", "#FF761D");
		$(".middle").css("display", "none");
		$(".aboutmiddle").css("display", "none");
		$(".skillsmiddle").css("display", "none");
		$(".contactmiddle").css("display", "none");
		$(".projectsmiddle").delay(1000).fadeIn(1000);
	});

	$("#skills").click(function(event) {
		event.preventDefault();
		$(".navbar-default .navbar-nav li a").css("color", "white");
		$("body").css("background", "#7F8199");
		$(".middle").css("display", "none");
		$(".aboutmiddle").css("display", "none");
		$(".contactmiddle").css("display", "none");
		$(".projectsmiddle").css("display", "none");
		$(".skillsmiddle").delay(1000).fadeIn(1000);
		$(".bar").each(function(){
        	var length = $(this).find("span").html();
        	$(this).find("p").delay(1000).animate({'height':length},5000,function(){$(this).find("span").fadeIn(2000);
        	});
    	});
	});

	$("#contact").click(function(event) {
		event.preventDefault();
		$(".navbar-default .navbar-nav li a").css("color", "white");
		$("body").css("background", "#16002F");
		$(".middle").css("display", "none");
		$(".skillsmiddle").css("display", "none");
		$(".projectsmiddle").css("display", "none");
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

// Rain
var rain = [], drops = [];

var gravity = 0.2;
var wind = 0.015;
var rain_chance = 0.4;

window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };

var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//--------------------------------------------

var Vector = function(x, y) {

  this.x = x || 0;
  this.y = y || 0;
};

Vector.prototype.add = function(v) {

  if (v.x != null && v.y != null) {

    this.x += v.x;
    this.y += v.y;

  } else {

    this.x += v;
    this.y += v;
  }

  return this;
};

Vector.prototype.copy = function() {

  return new Vector(this.x, this.y);
};

//--------------------------------------------

var Rain = function() {

  this.pos = new Vector(Math.random() * canvas.width, -50);
  this.prev = this.pos;

  this.vel = new Vector();
};

Rain.prototype.update = function() {

  this.prev = this.pos.copy();

  this.vel.y += gravity;
  this.vel.x += wind;

  this.pos.add(this.vel);
};

Rain.prototype.draw = function() {

  ctx.beginPath();
  ctx.moveTo(this.pos.x, this.pos.y);
  ctx.lineTo(this.prev.x, this.prev.y);
  ctx.stroke();
};

//--------------------------------------------

var Drop = function(x, y) {

  var dist = Math.random() * 7;
  var angle = Math.PI + Math.random() * Math.PI;

  this.pos = new Vector(x, y);

  this.vel = new Vector(
    Math.cos(angle) * dist,
    Math.sin(angle) * dist
    );
};

Drop.prototype.update = function() {

  this.vel.y += gravity;

  this.vel.x *= 0.95;
  this.vel.y *= 0.95;

  this.pos.add(this.vel);
};

Drop.prototype.draw = function() {

  ctx.beginPath();
  ctx.arc(this.pos.x, this.pos.y, 1, 0, Math.PI * 2);
  ctx.fill();
};

//--------------------------------------------

function update() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var i = rain.length;
  while (i--) {

    var raindrop = rain[i];

    raindrop.update();

    if (raindrop.pos.y >= canvas.height) {

      var n = Math.round(4 + Math.random() * 4);

      while (n--)
      drops.push(new Drop(raindrop.pos.x, canvas.height));

      rain.splice(i, 1);
    }

    raindrop.draw();
  }

  var i = drops.length;
  while (i--) {

    var drop = drops[i];
    drop.update();
    drop.draw();

    if (drop.pos.y > canvas.height) drops.splice(i, 1);
  }

  if (Math.random() < rain_chance) rain.push(new Rain());

  requestAnimFrame(update);
}

function init() {

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#CCFFFF';
  ctx.fillStyle = '#CCFFFF';

  update();
}

init();








