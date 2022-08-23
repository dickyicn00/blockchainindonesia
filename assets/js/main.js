
let scrollpos = window.scrollY
const header = document.querySelector("#header")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("shadow", "shadow-gray-300")
const remove_class_on_scroll = () => header.classList.remove("shadow", "shadow-gray-300")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})

// Mobile menu 
const mobileButton = document.querySelector("#mobile-button"); 
const menuWrapper = document.querySelector("#menu-wrapper");  

mobileButton.addEventListener("click", function () {
  mobileButton.classList.toggle("on")
  menuWrapper.classList.toggle("open")
})

// Init AOS 
AOS.init();

// Developer gallery 
lightGallery(document.getElementById('developer-gallery'), {
  autoplayFirstVideo: false,
  pager: false,
  galleryId: "nature",
  plugins: [lgZoom, lgThumbnail],
  mobileSettings: {
    controls: false,
    showCloseIcon: false,
    download: false,
    rotate: false
  }
});


window.onload = function () {
  scrollSpy('#nav-menu', {
      sectionSelector: 'section',
      targetSelector: '.nav-menu-item-link',
      activeClass: "active"
  });
}

var swiper = new Swiper(".swiper-work", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


tippy('.map-tooltip', {
  theme: 'light',
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  allowHTML: true,
});