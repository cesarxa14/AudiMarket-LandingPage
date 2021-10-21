
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  clearTimeout(timeout);
  timeout=setTimeout(carousel, 4000);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("sliding");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

carousel();

var timeout;
function carousel() {
  var i;
  var x = document.getElementsByClassName("sliding");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  timeout=setTimeout(carousel, 4000); // Change image every 2 seconds
}