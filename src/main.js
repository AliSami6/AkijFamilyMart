import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Initialize directly without assigning to a variable
new Swiper(".recommendedSwiper", {
  modules: [Navigation, Pagination],
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1.5,
  breakpoints: {
    640: { slidesPerView: 2.5 },
    768: { slidesPerView: 3.5 },
    1024: { slidesPerView: 5 },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
