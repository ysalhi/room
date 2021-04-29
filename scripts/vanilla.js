var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}


function showSlides(n) {
  var i;
  var texts = document.getElementsByClassName("CTA");
  if (n > texts.length) {slideIndex = 1}
  if (n < 1) {slideIndex = texts.length}
  for (i = 0; i < texts.length; i++) {
      texts[i].style.display = "none";
  }
  texts[slideIndex-1].style.display = "block";
  document.getElementById("leftContainer").style.backgroundImage = "url(./images/desktop-image-hero-" + slideIndex + ".jpg)";
} 