$(document).ready(function() {

	// Expand Name
	$(".expand").delay(1500).show(1000);

});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

$('.grid-image').click(function() {
	console.log("HERE")
  var $thumb = $(this)[0];
  console.log($thumb);
  console.log($thumb.src);
  modal.style.display = "block";
  modalImg.src = $thumb.src;
  captionText.innerHTML = $thumb.alt;
});

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close-button")[0];

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
  modal.style.display = "none";
}