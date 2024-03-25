var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const halUrl = window.location.href;
const navbar = document.querySelectorAll('.menu');
navbar.forEach(link => {
    if (link.href === halUrl){
        link.classList.add('active');
    }
})