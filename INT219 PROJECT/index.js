//  2nd nav slide bar ALL
 function openNav() {
 document.getElementById("mySidebar").style.width = "300px";
 document.getElementById("main").style.marginLeft = "250px";
 }
        
function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}

// to refresh page

function refreshPage(){
    window. location. reload();
    }

// Validating signin & signup details when Button pressed
function validate(){
    window. location. href('index.html');
}

// Forgotpassword alert box
function myFunction() {
  alert("Your Password has been sent to you Email/Phone Successfully!");
}


// Slide show

var indexValue = 0;
      function slideShow(){
        setTimeout(slideShow, 4000);
        var x;
        const img = document.getElementsByClassName("images");
        for(x = 0; x < img.length; x++){
          img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > img.length){indexValue = 1}
        img[indexValue -1].style.display = "block";
      }
      slideShow();
      

// Back to top button funtionality

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


 


// prev & next button JS

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("images");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "";  
//   }
  
//   slides[slideIndex-1].style.display = "block";  
  
// }

