

const jsAbout=document.querySelector('.js-about')
const buttonElem =document.querySelector('.js-button-toggler');
const showNavElem =document.querySelector('.js-nav-elem');

const aboutElem = document.querySelector('.about');
const register=document.querySelector('.register');
const vision=document.querySelector('.vision');

const aboutHTML=document.querySelector('.about-div');
const registerHTML=document.querySelector('.registration-div');
const visionHTML=document.querySelector('.vision-div');







buttonElem.addEventListener('click',()=>{
    showNavElem.classList.toggle("navHide");
})

// about page
aboutElem.addEventListener('click',()=>{
window.location.assign('./about.html')
   
});


register.addEventListener('click',()=>{
    window.location.assign('./register.html');
})

vision.addEventListener('click',()=>{
    window.location.assign('./vision.html');
})


const day=document.querySelector('.js-day');
const hr=document.querySelector('.js-hr');
const mins=document.querySelector('.js-mins');
const secs=document.querySelector('.js-sec');

// working on time and counters

const currentYeartime= new Date().getFullYear();
const nextYearTime=new Date(`jan 1 ${currentYeartime+1} 00:00:00`);
 
function updatedYeartime(){
    const currentTime = new Date();
    const diff=nextYearTime-currentTime;

     const d=Math.floor(diff / 1000 / 60 / 60 / 24);
     const h= Math.floor(diff/1000/60/60)%24;
     const m=Math.floor(diff/1000/60)%60;
     const s=Math.floor(diff/1000)%60;
    
     day.innerHTML=d <10? "0"+d: d;
     hr.innerHTML=h < 10? "0"+h: h;
     mins.innerHTML=m < 10? "0"+m: m;
     secs.innerHTML=s <10? "0"+s :s;
};
 setInterval(updatedYeartime, 1000);
 updatedYeartime();

const count=document.querySelector('.js-counts');

 let counting =0;
 const reg=document.querySelector('.js-regiser-btn');

 reg.addEventListener('click', ()=>{
    window.location.assign('./register.html');
    counting+=1;
 })






// get the dom for days, hours , minutes and seconds
