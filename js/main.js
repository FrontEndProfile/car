
document.addEventListener("DOMContentLoaded", function () {
     window.addEventListener('scroll', function () {
          if (window.scrollY > 50) {
               document.getElementById('navbar_top').classList.add('fixed-top');
               // add padding top to show content behind navbar
               navbar_height = document.querySelector('.navbar').offsetHeight;
               document.body.style.paddingTop = navbar_height + 'px';
          } else {
               document.getElementById('navbar_top').classList.remove('fixed-top');
               // remove padding top from body
               document.body.style.paddingTop = '0';
          }
     });
});


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
     output.innerHTML = this.value;
}



$("#yes").on("click", function () {
     $('.box-show').addClass("active-box");
});


$("#no").on("click", function () {
     $('.bar-box').addClass("form-box");
});

