import {Swiper} from "swiper";
import "./fixes"

window.addEventListener("DOMContentLoaded", () => {
    new Swiper('.explore__swiper', {
        spaceBetween: 30,
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 1,
    });

    new Swiper('.testimonials__swiper', {
        spaceBetween: 30,
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 1
    });
    new Swiper('.see__swiper', {
        spaceBetween: 30,
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 2,
    });

})