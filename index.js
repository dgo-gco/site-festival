var slider = document.querySelector(".section6");
var sliderWidth = slider.offsetWidth;
var slideList = document.querySelector(".sponsors-list");
var count = 1;
var items = slideList.querySelectorAll(".logoPartenaire").length;

window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
});

function nextSlide1(){
    if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
}

function prevSlide1(){
    if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
}

let intervalSponsors;

    //Making the slider automatic
    function displaySponsors() {
        if (!intervalSponsors) {
            intervalSponsors = setInterval(function() {
                nextSlide1()
                }, 4000);
        }
    }

    displaySponsors();

// TOOGLE BAR ---------------------------------------$$$$$$$$$$$$$$$$$$$$$


let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})
