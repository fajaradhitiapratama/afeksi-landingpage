var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const halUrl = window.location.href;
const navbar = document.querySelectorAll('.menu');
navbar.forEach(link => {
    if (link.href === halUrl){
        link.classList.add('active');
    }
})