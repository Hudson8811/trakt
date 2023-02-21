import $, { event } from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

import {setMaskHeader,splitLetterSpan} from '../_functions';

setMaskHeader(100);

splitLetterSpan('.gp-how__intro-title','at');
splitLetterSpan('.gp-how__intro-text','as');

var initMode;
let addTime = 1300;
let addTimeHow = 200;
let lightHead = true, lastProgress, targetProgress;
let i = 0;
let howCount = $('.gp-how-item').length;

let st1, st2;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});

let resizeFunction;
$(window).on('scroll',function (){
    resizeFunction();
});

function initAnimation(){
    $('.grow-page').addClass('active');
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
        gsap.set(".grow-page," +
            ".gp-video,.at1,.at2,.at3,.at4,.gp-how__intro-text,.as1,.as2,.as3,.as4,.gp-how-item,.gp-how-item__img," +
            ".gp-how-item__img img,.gp-how-item__text,.gp-how-item__title,.gp-doble,.gp-doble__img img,.gp-poliv," +
            ".gp-poliv__right,.gp-poliv__right img,.gp-mineral,.gp-mineral__text,.gp-mineral,.gp-mineral__img," +
            ".gp-mineral__img img,.gp-grunt,.gp-steps,.gp-grunt__first,.gp-grunt__second,.gp-grunt__first," +
            ".gp-grunt__content,.gp-grunt__content-bottom,.gp-grunt__second,.gp-grun,.gp-step__img,.gp-step__img img," +
            ".gp-step__text,.gp-step__title,.gp-step", {clearProps:"all"});
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        $('.gp-how__intro-title, .gp-how__intro-text').addClass('active');
        $('body').removeClass('active');
        initAnimation();
    }
});


function initScrollAnimationDesktop() {
    resizeFunction = function (){}
    $('body').addClass('active');

    tl1.to(".gp-video", {
        top: "-100vw",
        duration: 3,
        ease: "none",
    }, "0");



    tl1.to(".at1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">");
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
            $('.gp-how__intro-title').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".at4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.gp-how__intro-title').addClass('active');
        }
    } , ">-0.3");

    tl1.from(".gp-how__intro-text", {
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
            $('.gp-how__intro-text').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".as4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.gp-how__intro-text').addClass('active');
        }
    } , ">-0.3");


    i = 0;
    $('.gp-how-item').each(function (){
        addTime += addTimeHow;
        let firstDelay = '-3';
        if (i === 0) {
            firstDelay = "-0.5";
        }
        i++;

        let elem = $(this);
        let img = elem.find('.gp-how-item__img');
        let img2 = elem.find('.gp-how-item__img img');
        let text = elem.find('.gp-how-item__text');
        let title = elem.find('.gp-how-item__title');

        tl1.from(elem, {
            top: "100%",
            duration: 3,
            ease: "power1.out",
        } , ">" + firstDelay);
        tl1.to(img, {
            x: 0,
            y: 0,
            duration: 5,
            ease: "power1.out",
        } , ">-2");
        tl1.from(img2, {
            width: "200%",
            height: "200%",
            duration: 5,
            ease: "power1.out",
        } , "<");
        if (title.length > 0 && text.length > 0){
            tl1.from(text, {
                y: '100vh',
                duration: 4,
                ease: "power1.out",
            } , ">-3");
        }

        if (i < howCount){
            tl1.to(elem, {
                top: "-100%",
                duration: 4,
                ease: "power1.in",
            } , ">0.5");
        } else {
            tl1.to(".gp-how", {
                motionPath: {
                    path: [
                        {left:'-30vw', top:'-10vw'},
                        {left:'-40vw', top:'-50vw'},
                        {left:'-50vw', top:'-100vw'}
                    ],
                    curviness: 1
                    //type: "cubic"
                },
                duration: 3.5,
                ease: "none",
            }, ">0.5");
        }
    });


    tl1.to(".gp-doble", {
        motionPath: {
            path: [
                {left:'40vw', top:'100vh'},
                {left:'40vw', top:'30vh'},
                {left:'10vw', top:'0'},
                {left:'0', top:'0'}
            ],
            curviness: 1
            //type: "cubic"
        },
        duration: 2.3,
        ease: "none",
    }, "<0.1");

    tl1.from(".gp-doble__img img", {
        width: '200%',
        height: '200%',
        duration: 2.3,
        ease: "none",
    }, "<");

    tl1.to(".gp-doble", {
        left: "-100vw",
        duration: 3,
        ease: "none",
    }, ">");



    tl1.fromTo(".gp-poliv", {
        left: "100vw"
    }, {
        left: "0vw",
        duration: 2.5,
        ease: "none",
    }, ">-3");


    tl1.from(".gp-poliv__right", {
        y: '-100%',
        duration: 2.3,
        ease: "none",
    }, "<");

    tl1.from(".gp-poliv__right img", {
        width: '200%',
        height: '200%',
        duration: 2.3,
        ease: "none",
    }, "<");


    tl1.to('.gp-poliv', {
        top: "-100%",
        duration: 4,
        ease: "power1.in",
    } , ">0.5");



    tl1.from('.gp-mineral', {
        top: "100%",
        duration: 3,
        ease: "power1.out",
    } , ">-1.5");

    tl1.from('.gp-mineral__text', {
        y: '100vh',
        duration: 2,
        ease: "power1.out",
    } , ">-3");

    tl1.from('.gp-mineral', {
        left: "-32.5%",
        duration: 2,
        ease: "none",
    } , ">-1");


    tl1.from('.gp-mineral__img', {
        x: '-100vw',
        y: '100vw',
        duration: 5,
        ease: "power1.out",
    } , ">-2");
    tl1.from('.gp-mineral__img img', {
        width: "200%",
        height: "200%",
        duration: 5,
        ease: "power1.out",
    } , "<");


    tl1.to('.gp-mineral', {
        top: "-100%",
        duration: 4,
        ease: "power1.in",
    } , ">0.5");

    tl1.from(".gp-grunt", {
        left: "100%",
        duration: 2,
        ease: "none",
        onComplete: function (){
            setMaskHeader(0);
        },
        onReverseComplete: function (){
            setMaskHeader(100);
        },
        onUpdate: function (){
            $(window).width();
            let targetProcent = ($('.gp-grunt').offset().left/$(window).width())*100;
            setMaskHeader(targetProcent);
        }
    } , ">-1.2");


    tl1.fromTo(".gp-steps", {
        autoAlpha: 0
    },{
        autoAlpha: 1,
        duration: 0,
        ease: "none",
    }, ">");


    tl1.from(".gp-grunt__first", {
        left: "100vw",
        duration: 2.5,
        ease: "none",
    }, ">");

    tl1.from(".gp-grunt__second", {
        left: "100vw",
        top: "100vh",
        duration: 3,
        ease: "none",
    }, ">");

    tl1.addLabel("l1", '<');
    tl1.addLabel("l2", '>');

    tl1.to(".gp-grunt__first", {
        left: "-150vw",
        top: "-100vh",
        duration: 6,
        ease: "none",
    }, ">-1.7");

    tl1.fromTo(".gp-grunt__content", {
        y: "250%"
    },{
        y: "-150%",
        duration: 6,
        ease: "none",
    }, "l1");


    tl1.fromTo(".gp-grunt__content-bottom", {
        y: "100%"
    },{
        y: "0",
        duration: 1.3,
        ease: "Sine.easeOut",
    }, "<3");

    tl1.to(".gp-grunt__second", {
        left: "-100vw",
        duration: 4,
        ease: "none",
    }, "l2");

    tl1.to(".gp-grunt", {
        autoAlpha: 0,
        duration: 1.5,
        ease: "none",
        onComplete: function (){
            setMaskHeader(100);
        },
        onReverseComplete: function (){
            setMaskHeader(0);
        },
    }, ">-2");



    i = 0;
    $('.gp-step').each(function (){
        addTime += addTimeHow;
        let firstDelay = '-3';
        if (i === 0) {
            firstDelay = "-0.5";
        }
        i++;

        let elem = $(this);
        let img = elem.find('.gp-step__img');
        let img2 = elem.find('.gp-step__img img');
        let text = elem.find('.gp-step__text');
        let title = elem.find('.gp-step__title');

        tl1.from(elem, {
            top: "100%",
            duration: 3,
            ease: "power1.out",
        } , ">" + firstDelay);
        tl1.to(img, {
            x: 0,
            y: 0,
            duration: 5,
            ease: "power1.out",
        } , ">-2");
        tl1.from(img2, {
            width: "200%",
            height: "200%",
            duration: 5,
            ease: "power1.out",
        } , "<");
        if (title.length > 0 && text.length > 0){
            tl1.from(text, {
                y: '100vh',
                duration: 4,
                ease: "power1.out",
            } , ">-3");
        }

        if (i < howCount){
            tl1.to(elem, {
                top: "-100%",
                duration: 4,
                ease: "power1.in",
            } , ">0.5");
        }
    });


    tl1.to(".gp-step", {
        autoAlpha: 1,
        duration: 1.7,
        ease: "none"
    }, ">");


    st1 = ScrollTrigger.create({
        trigger: ".grow-page",
        pin: true,
        start: "top top",
        end: () =>   "+="+addTime+"%",
        scrub: 1.5,
        animation: tl1,
    });
}

function initScrollAnimationTablet() {
    resizeFunction = function () {
        let listElems = $('.gp-how-item__img img, .gp-doble__img-inner img, .gp-poliv__right img, ' +
            '.gp-grunt__img img, .gp-step__img img');

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

        let greenBlockTop = $('.gp-grunt').offset().top;
        let greenBlockTop2 = $('.gp-grunt').innerHeight();
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

    tl1.to(".gp-video", {
        top: "-100vw",
        duration: 3,
        ease: "none",
    }, "0");



    tl1.to(".at1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">");
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
            $('.gp-how__intro-title').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".at4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.gp-how__intro-title').addClass('active');
        }
    } , ">-0.3");

    tl1.from(".gp-how__intro-text", {
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
            $('.gp-how__intro-text').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".as4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.gp-how__intro-text').addClass('active');
        }
    } , ">-0.3");

    tl2.to(".gp-how", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "none",
    } , ">");

    st1 = ScrollTrigger.create({
        trigger: ".gp-how",
        pin: true,
        start: "top top",
        end: () => "+=300%",
        scrub: 1,
        animation: tl1,
    });
}