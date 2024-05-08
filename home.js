const slider= document.querySelector('.slider')
const leftArrow=document.querySelector('#left')
const rightArrow=document.querySelector('#right')

var index=0;

leftArrow.addEventListener('click',function(){
    index=(index>0)? index-1:0;
    slider.style.transform='translate(' +(index)*-50+'%)';
    slider.style.transform='translate(' +(index)*-50+'%)';
});

rightArrow.addEventListener('click',function(){
    index=(index<1)? index+1:1;
    slider.style.transform='translate(' +(index)*-50+'%)';
});



const slider2= document.querySelector('.sliderTest')
const leftArrow2=document.querySelector('#L')
const rightArrow2=document.querySelector('#R')
const slider1=document.querySelector('sliders')

var sample=0;

document.querySelectorAll('.controls li').forEach(function(indicator,ind){
   indicator.addEventListener('click',function(){
    slider2.style.transform='translate(' +(ind)*-25+'%)';
   }) 
} );

leftArrow2.addEventListener('click',function(){
    sample=(sample>0)? sample-1:0;
    slider2.style.transform='translate(' +(sample)*-25+'%)';
    
});

rightArrow2.addEventListener('click',function(){
    sample=(sample<1)? sample+1:1;
    slider2.style.transform='translate(' +(sample)*-25+'%)';
});

