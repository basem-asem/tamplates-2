const scrollToTopButton = document.getElementById('scroll-to-top');

// Show button after scrolling 500px
window.onscroll = function() {
  if (window.pageYOffset > 500) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

// Handle button click to scroll to top of page
scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

const cover = document.querySelector('.landing');
const right = document.querySelector('.fa-angle-right');
const left = document.querySelector('.fa-angle-left');

// change bullets 
const bullets = document.querySelectorAll('.bullets li');
const slider = document.querySelector('.slider');




right.addEventListener("click", ()=>{
    changeSlide();
});

left.addEventListener("click", ()=>{
    changeSlide();
});

var currentSlide = 1;
var totalSlides = 3;

function changeSlide() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }
  var slideUrl = 'url(../images/slide-' + currentSlide + '-image.jpg)';
  document.querySelector('.slider').style.backgroundImage = slideUrl;
  changeBullet();
}

setInterval(changeSlide, 50000);

function changeBullet() {
  
  bullets.forEach(function(bullet) {
    bullet.classList.remove('active');
  });
  bullets[currentSlide - 1].classList.add('active');
}