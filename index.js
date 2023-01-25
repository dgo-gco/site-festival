var slider = document.querySelector(".section6");
var sliderWidth = slider.offsetWidth;
var slideList = document.querySelector(".sponsors-list");
var count = 1;
var items = slideList.querySelectorAll(".logoPartenaire").length;
// var prev = document.querySelector(".vg");
// var next = document.querySelector(".vd");
// var pause = document.querySelector(".pause");

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

next.addEventListener("click", function() {
    nextSlide1();
});
  
prev.addEventListener("click", function() {
    prevSlide1();
});


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


    pause.addEventListener('click', function(){
        clearInterval(intervalSponsors);
        if (intervalSponsors){
            intervalSponsors = null;
        } else if (!intervalSponsors) {
            displaySponsors();
        }
    })