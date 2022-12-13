const checkpoint = 600;
let nav_bg = 'transparent';
let opacity = 1;

window.addEventListener("scroll", () => {
   const currentscroll = window.pageYOffset;
   if(currentscroll <= checkpoint) {
    nav_bg = 'transparent';
    opacity = 1 - currentscroll / checkpoint;
   } else {
    nav_bg = '#000';
    opacity = 0;
   }
   document.querySelector(".header-nav").style.background = nav_bg;
});


const menu = document.querySelector('.mobile-btn');
const submenu = document.querySelector('.second-menu-mobile');
let is_open = 0;


menu.addEventListener('click', () => {
    if (!is_open) {
        submenu.style.display = 'block';
        is_open = 1;
    } 
    else {
        submenu.style.display = 'none';
        is_open = 0;
    }
    
});
const slides = document.querySelectorAll(".tab");
const dots = document.querySelectorAll(".tabs-titles>li");

const interval = 3;
let activeSlide = 0;


const reset = () => {
    dots.forEach(dot => dot.removeAttribute('class'));
    dots[activeSlide].className = 'active';

    slides.forEach(slide => slide.style.display = 'none');
    slides[activeSlide].style.display = 'block'
}
reset();


dots.forEach((dot, index)=>{
    dot.addEventListener('click', () => {
        activeSlide = index;

        dots.forEach(dot => dot.removeAttribute('class'));
        dots[activeSlide].className = 'active';
        slides.forEach(slide => slide.style.display = 'none');
        slides[activeSlide].style.display = 'block'
        reset();
    });

});
