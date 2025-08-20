


// let getListItelem = document.querySelector(".js-navUl");
// let pCountElement = document.querySelector(".notification-count");

// function toggler(){
//   getListItelem.classList.toggle("nav-ul");
// }


// // making all the slides interactive
// let sliderDiv = document.querySelector(".sliders");
// let slides = document.querySelectorAll(".slides img");
// let nextbutton = document.querySelector(".revButton");
// let prevbutton = document.querySelector(".nextButton");
// let imageTags = document.querySelector(".slide");



// let slideIndex = 0;
// let  intervalize = null;

// innitialize()

// function innitialize(){

//   if(slides.length > 0){
//     slides[slideIndex].classList.add("displaySlide")

//    innitialize = setInterval(nextButton, 5000);
//   }
  

// }

// function show(index){
//   if(index >= slides.length){
//     slideIndex = 0;
//   } else if( index < 0){
//     slideIndex = slides.length-1;
//   }

//   slides.forEach(slide =>{
//     slide.classList.remove("displaySlide")
//   })
//   slides[slideIndex].classList.add("displaySlide")


// }



// function prevButton(){
// slideIndex--;
// show(slideIndex);
// }

// function nextButton(){
// slideIndex++;
// show(slideIndex);
// }


// const Days = document.querySelector(".days");
// const hours = document.querySelector(".hours");
// const minutes = document.querySelector(".minutes");
// const seconds = document.querySelector(".seconds");


// const curentYearTime = new Date().getFullYear();
// const newYeartime = new Date(`january 1 ${curentYearTime + 1} 00:00:00`);

// function updateCountDownTimmer(){
//   const currenttime = new Date();
//   const diff = newYeartime - currenttime;

//   const d = Math.floor(diff / 1000 / 60 / 60 / 24);
//   const h = Math.floor(diff / 1000 / 60 / 60) % 24;
//   const m = Math.floor(diff / 1000 / 60) % 60;
//   const s = Math.floor(diff / 1000 ) % 60;

//   Days.innerHTML = d;
//   hours.innerHTML = h < 10 ? '0' + h :h;
//   minutes.innerHTML = m < 10 ? '0' + m :m;
//   seconds.innerHTML = s < 10 ? '0' + s :s;
// }

// setInterval(updateCountDownTimmer, 1000);

// updateCountDownTimmer();
 
 











