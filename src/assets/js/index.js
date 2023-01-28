import {Swiper} from "swiper";
import "./fixes"
import tabs from './common/tabs'

window.addEventListener("DOMContentLoaded", () => {
    tabs()

    const countDownDate = new Date(2023, 12, 30).getTime()

    const daysEl = document.querySelector('.timer__days'),
        hoursEl = document.querySelector('.timer__hours'),
        minutesEl = document.querySelector('.timer__minutes'),
        secondsEl = document.querySelector('.timer__seconds')

    function setTime(d, h, m, s) {
        daysEl.innerHTML = d + "d"
        hoursEl.innerHTML = h + "h"
        minutesEl.innerHTML = m + "m"
        secondsEl.innerHTML = s + "s"
    }

    setInterval(function () {
        const now = new Date().getTime(),
            timeleft = countDownDate - now,
            days = Math.floor(timeleft / (1000 * 60 * 60 * 24)),
            hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((timeleft % (1000 * 60)) / 1000)

        setTime(days, hours, minutes, seconds)
    }, 1000)


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