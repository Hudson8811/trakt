import $, { event } from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {setMaskHeader,splitLetterSpan} from '../_functions';

let st1;
let tl1 = gsap.timeline({});

var initMode;
let addTime = 300;
let addTimeItem = 120;


let resizeFunction;
$(window).on('scroll',function (){
    resizeFunction();
});


initAnimation();
function initAnimation(){
    setMaskHeader(0);
    $('body').addClass('active');

    if (window.innerWidth > 999){
        initScrollAnimationDesktop();
        initMode = 'desk';
    } else if(window.innerWidth > 699){
        initScrollAnimationTablet();
        initMode = 'tablet';
    } else {
        initScrollAnimationTablet();
        initMode = 'mobile';
    }
}




var dwidth = $(window).width();
$(window).on('resize',function (){
    var wwidth = $(window).width();
    if(dwidth!==wwidth){
        setMaskHeader(100);
        if (typeof st1 !== "undefined") st1.kill();
        tl1.clear();
        gsap.set(".portfolio-page__top," +
            ".portfolio-page__title,.portfolio-page__start,.portfolio-page__item,.portfolio-page__content," +
            ".portfolio-page__img", {clearProps:"all"});
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        $('body').removeClass('active');
        initAnimation();
    }
});



function initScrollAnimationDesktop(){
    resizeFunction = function (){}
    $('body').addClass('active');

    tl1.to(".portfolio-page__title", {
        z: 1500,
        duration: 1,
        ease: "none",
    },0);
    tl1.set(".portfolio-page__title", {
        opacity: 0,
    }, ">-0.7");

    tl1.to(".portfolio-page__start", {
        z: 1500,
        duration: 2,
        ease: "none",
    }, 0);
    tl1.set(".portfolio-page__start", {
        opacity: 0,
    }, ">-0.7");


    let i = 0;
    $('.portfolio-page__item').each(function (){
        addTime += addTimeItem;
        let firstDelay = '>';
        if (i === 0) {
            firstDelay = 0;
        }

        let elem = $(this);
        let text = elem.find('.portfolio-page__content');
        let img = elem.find('.portfolio-page__img');


        if (i !== 0) {
            tl1.from(img, {
                autoAlpha: "0",
                width: "10vw",
                height: "6.2vw",
                duration: 2,
                ease: "none",
            }, '>');
        }

        if (i % 2 === 0){
            tl1.to(img, {
                width: "110vw",
                height: "110vh",
                left: "42.9vw",
                duration: 4,
                ease: "none",
            }, firstDelay);
        } else {
            tl1.to(img, {
                width: "110vw",
                height: "110vh",
                right: "42.9vw",
                duration: 4,
                ease: "none",
            }, firstDelay);
        }


        tl1.from(text, {
            autoAlpha: 0,
            duration: 1.5,
            ease: "none",
        }, '<0.5');


        i++;

        if (i !== ($('.portfolio-page__item').length )) {
            tl1.to(img, {
                autoAlpha: 0,
                duration: 1,
            }, ">2");

            tl1.to(text, {
                autoAlpha: 0,
                duration: 1,
                ease: "none",
            }, '<');
        }
    });


    tl1.to(".portfolio-page__last", {
        autoAlpha: 1,
        duration: 2,
        ease: "none"
    }, ">");

    st1 = ScrollTrigger.create({
        trigger: ".portfolio-page__top",
        pin: true,
        start: "top top",
        end: () =>   "+="+addTime+"%",
        scrub: 1.5,
        animation: tl1,
    });
}

function initScrollAnimationTablet(){
    resizeFunction = function () {
        let listElems = $('.portfolio-page__start-inner img, .portfolio-page__img-inner img');

        let windowHalf = $(window).height()*0.5;
        let viewportBottom = $(window).scrollTop() + $(window).height();
        let viewportCenter = $(window).scrollTop() + $(window).height()*0.35;
        listElems.each(function (){
            let elem = $(this);
            let elementTop = elem.offset().top;
            if (elementTop <= viewportBottom && elementTop >= viewportCenter){
                let procent = (elementTop - viewportCenter) / windowHalf;
                let size = procent*100 + 100;
                elem.css({'width':size+'%', 'height':size+'%'});
            }
        });

    }

    $('body').addClass('active');
}