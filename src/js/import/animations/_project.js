import $, { event } from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Swiper, { Scrollbar }  from 'swiper';

import {setMaskHeader,splitLetterSpan} from '../_functions';

setMaskHeader(100);

splitLetterSpan('.pp-intro__title','at');
splitLetterSpan('.pp-intro__text','as');

var initMode;
let addTime = 1200;

let lightHead = true, lastProgress, targetProgress;

let st1;
let tl1 = gsap.timeline({});

let greenHeigh, greenContentHeigh;
let scrollHeight, scrollContentHeight;


let resizeFunction;
$(window).on('scroll',function (){
    resizeFunction();
});

function initAnimation(){
    greenHeigh =  $('.pp-green').innerHeight();
    greenContentHeigh =  $('.pp-green__inner').innerHeight();

    scrollHeight = $('.project-scroll').innerHeight();
    scrollContentHeight = $('.project-static').innerHeight();

    $('.project-page').addClass('active');
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

initAnimation();
var dwidth = $(window).width();
$(window).on('resize',function (){
    var wwidth = $(window).width();
    if(dwidth!==wwidth){
        setMaskHeader(100);
        if (typeof st1 !== "undefined") st1.kill();
        tl1.clear();
        gsap.set(".project-page," +
            ".at1,.at2,.at3,.at4,.pp-intro__text,.as1,.as2,.as3,.as4,.pp-image,.pp-task,.pp-task__img,.pp-task__img img," +
            ".pp-task__text,.pp-task__content,.pp-green,.pp-green__title,.pp-green__text,.pp-green__blocks," +
            ".pp-green__inner,.project-scroll,.project-static, .pp-image img", {clearProps:"all"});
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        $('.pp-intro__title, .pp-intro__text').addClass('active');
        $('body').removeClass('active');
        initAnimation();
    }
});



function initScrollAnimationDesktop() {
    resizeFunction = function (){}
    $('body').addClass('active');

    tl1.to(".at1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">1");
    tl1.to(".at2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");
    tl1.to(".at3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function (){
            $('.pp-intro__title').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".at4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.pp-intro__title').addClass('active');
        }
    } , ">-0.3");


    tl1.from(".pp-intro__text", {
        top: "200%",
        duration: 3,
        ease: "none",
    }, ">-1.7");

    tl1.to(".as1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">1");
    tl1.to(".as2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");
    tl1.to(".as3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function (){
            $('.pp-intro__text').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".as4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.pp-intro__text').addClass('active');
        }
    } , ">-0.3");


    tl1.from(".pp-image", {
        top: '100vh',
        left: '100vw',
        duration: 3,
        ease: "none"
    }, "<-0.5");

    tl1.to(".pp-image", {
        top: '-100vh',
        duration: 3,
        ease: "none"
    }, ">1");



    tl1.from('.pp-task', {
        top: "100%",
        duration: 3,
        ease: "power1.out",
    } , ">-3");
    tl1.to('.pp-task__img', {
        x: 0,
        y: 0,
        duration: 4,
        ease: "power1.out",
    } , ">-3");
    tl1.from('.pp-task__img img', {
        width: "200%",
        height: "200%",
        duration: 5,
        ease: "power1.out",
    } , "<");
    tl1.to('.pp-task__text', {
        y: 0,
        duration: 4,
        ease: "power1.out",
    } , ">-4");


    tl1.to('.pp-task__content', {
        top: "-70%",
        duration: 3,
        ease: "none",
    } , ">");
    tl1.to('.pp-task__img', {
        top: "-100%",
        duration: 4,
        ease: "none",
    } , "<");

    tl1.set('.pp-task', {
        autoAlpha: 100,
        onComplete: function (){
            setMaskHeader(0);
        },
        onReverseComplete: function (){
            setMaskHeader(100);
        }
    } , ">");

    tl1.from(".pp-green", {
        backgroundColor: '#FFFFFF',
        duration: 2,
        ease: "none"
    }, ">-1");
    tl1.to(".pp-green", {
        autoAlpha: 100,
        duration: 2,
        ease: "none"
    }, "<");



    tl1.from(".pp-green__title", {
        autoAlpha: 0,
        duration: 1,
        ease: "none"
    }, ">");


    tl1.addLabel("l1", '>');

    tl1.from(".pp-green__text", {
        autoAlpha: 0,
        duration: 1.2,
        ease: "none"
    }, ">");
    tl1.from(".pp-green__blocks", {
        autoAlpha: 0,
        duration: 1.2,
        ease: "none"
    }, ">-0.2");


    tl1.fromTo(".pp-green__inner", {
        y: "0",
    }, {
        y: -1*(greenContentHeigh-greenHeigh),
        duration: 3,
        ease: "none",
    } , "l1");



    tl1.to(".pp-green", {
        top: "-100vh",
        duration: 4,
        ease: "none",
        onComplete: function (){
            setMaskHeader(100);
        },
        onReverseComplete: function (){
            setMaskHeader(0);
        }
    }, ">");
    tl1.from(".project-scroll", {
        top: "100vh",
        duration: 4,
        ease: "none"
    }, "<");


    tl1.fromTo(".project-static", {
        y: "0",
    }, {
        y: -1*(scrollContentHeight-scrollHeight),
        ease: "none",
        duration: Math.abs((scrollContentHeight/scrollHeight)*2)
    } , '>');

    tl1.to(".project-static", {
        autoAlpha: 1,
        duration: 1.5,
        ease: "none"
    }, ">");



    st1 = ScrollTrigger.create({
        trigger: ".project-page",
        pin: true,
        start: "top top",
        end: () =>   "+="+addTime+"%",
        scrub: 1.5,
        animation: tl1,
    });


}
function initScrollAnimationTablet() {
    resizeFunction = function () {
        let listElems = $('.pp-task__img img, .pp-image img');

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

        let greenBlockTop = $('.pp-green').offset().top;
        let greenBlockTop2 = $('.pp-green').innerHeight();
        if ($(window).scrollTop() >= greenBlockTop && !lightHead && $(window).scrollTop() <= greenBlockTop + greenBlockTop2 && !lightHead){
            setMaskHeader(0);
            lightHead = true;
        } else if (greenBlockTop >= $(window).scrollTop() && greenBlockTop  <= viewportBottom && lightHead){
            setMaskHeader(100);
            lightHead = false;
        } else if ($(window).scrollTop() >= greenBlockTop + greenBlockTop2 && lightHead){
            setMaskHeader(100);
            lightHead = false;
        }
    }

    $('body').addClass('active');


    tl1.to(".at1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , 0);
    tl1.to(".at2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");
    tl1.to(".at3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function (){
            $('.pp-intro__title').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".at4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.pp-intro__title').addClass('active');
        }
    } , ">-0.3");

    tl1.from(".pp-intro__text", {
        top: "200%",
        duration: 3,
        ease: "none",
    }, ">-1.7");

    tl1.to(".as1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">1");
    tl1.to(".as2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");
    tl1.to(".as3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function (){
            $('.pp-intro__text').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".as4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.pp-intro__text').addClass('active');
        }
    } , ">-0.3");

    tl1.to(".pp-intro", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "none",
    } , ">");

    st1 = ScrollTrigger.create({
        trigger: ".pp-intro",
        pin: true,
        start: "top top",
        end: () => "+=300%",
        scrub: 1,
        animation: tl1,
    });
}

const teamSlider = new Swiper('.ps-team', {
    loop: false,
    freeMode: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    direction: 'horizontal',
});

const photosSlider = new Swiper('.ps-photos', {
    loop: false,
    freeMode: true,
    slidesPerView: 'auto',
    direction: 'horizontal',
    spaceBetween: 0,
    modules: [Scrollbar],
    scrollbar: {
        el: '.ps-photos__scrollbar-inner',
        draggable: true,
    },
});

