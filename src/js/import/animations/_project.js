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
let addTime = 200;

let lightHead = true, lastProgress, targetProgress;

let st1, st2;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});


let resizeFunction;
$(window).on('scroll',function (){
    resizeFunction();
});

function initAnimation(){
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
        if (typeof st2 !== "undefined") st2.kill();
        tl1.clear();
        tl2.clear();
        tl3.clear();
        gsap.set(".project-page", {clearProps:"all"});
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

    tl1.to(".pp-green", {
        backgroundColor: '#FFFFFF',
        duration: 2,
        ease: "none"
    }, ">2");

    tl1.set('.pp-green__inner', {
        autoAlpha: 100,
        onComplete: function (){
            setMaskHeader(100);
        },
        onReverseComplete: function (){
            setMaskHeader(0);
        }
    } , ">");






    st1 = ScrollTrigger.create({
        trigger: ".project-page",
        pin: true,
        start: "top top",
        end: () =>   "+="+addTime+"%",
        scrub: 1.5,
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
