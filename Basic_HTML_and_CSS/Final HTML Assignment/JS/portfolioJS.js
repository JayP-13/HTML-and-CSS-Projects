//Functions open and close the contract form
function openform() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm () {
    document.getElementById("myForm").style.display = "none";
}

//Function that will diplay the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//Function that will change the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";        
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//this code will create the close the contact form when the user clicks off of it
//THe first step is to add an event listner for any clicks on the website
document.addEventListener("click", function(event) {
    //Here we state that if the click happens on the cancel button or anywhere that is not the contact form and the click form
    //the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }

}, false )