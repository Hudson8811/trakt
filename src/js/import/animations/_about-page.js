import $, { event } from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

import {setMaskHeader,splitLetterSpan} from '../_functions';

setMaskHeader(100);

splitLetterSpan('.ap-activity__intro-title','at');
splitLetterSpan('.ap-activity__intro-text','as');
splitLetterSpan('.ap-achivments__intro-title','pt');
splitLetterSpan('.ap-automation__intro-text','vt');

var initMode;
let addTime = 1750;

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
    $('.about-page').addClass('active');
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
        gsap.set(".at1, .at2, .at3, .at4, .ap-activity__intro-text, .as1, .as2, .as3, .as4, .ap-activity-item," +
            ".ap-activity-item__img, .ap-activity-item__img img, .ap-activity-item__text, .ap-activity-item__content," +
            ".ap-activity, .ap-green-logo, .ap-green-logo__img, .ap-green-logo__title, .ap-l1, .ap-l2, .ap-l3, .ap-l4," +
            ".ap-achivments, .pt1, .pt2, .pt3, .pt4, .ap-achivments-item, .ap-achivments-item .ap-achivments-item__img, " +
            ".ap-achivments-item .ap-achivments-item__img img, .ap-achivments-item .ap-achivments-item__content," +
            ".ap-automation, .vt1, .vt2, .vt3, .vt4, .ap-automation__content, .about-page, .ap-automation__intro", {clearProps:"all"});
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        $('.ap-activity__intro-title, .ap-activity__intro-text, .ap-achivments__intro-title, .ap-automation__intro-text').addClass('active');
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
            $('.ap-activity__intro-title').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".at4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.ap-activity__intro-title').addClass('active');
        }
    } , ">-0.3");


    tl1.from(".ap-activity__intro-text", {
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
            $('.ap-activity__intro-text').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".as4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.ap-activity__intro-text').addClass('active');
        }
    } , ">-0.3");


    tl1.from('.ap-activity-item', {
        top: "100%",
        duration: 3,
        ease: "power1.out",
    } , ">-0.5");
    tl1.to('.ap-activity-item__img', {
        x: 0,
        y: 0,
        duration: 5,
        ease: "power1.out",
    } , ">-2");
    tl1.from('.ap-activity-item__img img', {
        width: "200%",
        height: "200%",
        duration: 5,
        ease: "power1.out",
    } , "<");
    tl1.to('.ap-activity-item__text', {
        y: 0,
        duration: 4,
        ease: "power1.out",
    } , ">-3");


    tl1.to('.ap-activity-item__content', {
        top: "-100%",
        duration: 3,
        ease: "none",
    } , ">");
    tl1.to('.ap-activity-item__img', {
        top: "-100%",
        duration: 4,
        ease: "none",
    } , "<");



    tl1.set('.ap-activity', {
        autoAlpha: 100,
        onComplete: function (){
            setMaskHeader(0);
        },
        onReverseComplete: function (){
            setMaskHeader(100);
        }
    } , ">");

    tl1.from(".ap-green-logo", {
        backgroundColor: '#FFFFFF',
        duration: 2,
        ease: "none"
    }, ">-1");
    tl1.to(".ap-green-logo", {
        autoAlpha: 100,
        duration: 2,
        ease: "none"
    }, "<");

    tl1.to(".ap-green-logo__img", {
        autoAlpha: 1,
        duration: 1.5,
        delay: 1,
        ease: "none",
    });
    tl1.to(".ap-green-logo__logo", {
        width: 0,
        margin: 0,
        autoAlpha: 0,
        duration: 2,
        ease: "power1.out",
    } , ">");
    tl1.to(".ap-green-logo__title", {
        width: "91.66vw",
        ease: "power1.out",
        duration: 3.5,
    } , "<");
    tl1.to(".ap-l1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">0.2");
    tl1.to(".ap-l2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");
    tl1.to(".ap-l3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");
    tl1.to(".ap-l4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");


    tl1.to(".ap-green-logo", {
        backgroundColor: '#FFFFFF',
        duration: 2,
        ease: "none"
    }, ">-0.5");

    tl1.set('.ap-green-logo', {
        autoAlpha: 100,
        onComplete: function (){
            setMaskHeader(100);
        },
        onReverseComplete: function (){
            setMaskHeader(0);
        }
    } , ">");

    tl1.from(".ap-achivments", {
        top: "100vh",
        duration: 2,
        ease: "none",
    }, ">-1");

    tl1.to(".pt1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">1.5");
    tl1.to(".pt2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");
    tl1.to(".pt3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function (){
            $('.ap-achivments__intro-title').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".pt4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.ap-achivments__intro-title').addClass('active');
        }
    } , ">-0.3");



    tl1.fromTo(".ap-achivments-item--1", {
        left: "100vw",
        top: "100vh"
    }, {
        left: "0vw",
        top: "0vw",
        duration: 2.5,
        ease: "none",
    }, ">");


    tl1.from(".ap-achivments-item--1 .ap-achivments-item__img img", {
        width: '200%',
        height: '200%',
        duration: 2.5,
        ease: "none",
    }, "<");

    tl1.from(".ap-achivments-item--1 .ap-achivments-item__content", {
        x: "100%",
        ease: "none",
        duration: 2,
    } , ">-2");


    tl1.fromTo(".ap-achivments-item--1",
        {
            left: 0,
            top: 0,
        },{
            motionPath: {
                path: [
                    {left:'-50vw', top:'-30vh'},
                    {left:'-60vw', top:'-50vh'},
                    {left:'-70vw', top:'-100vh'},
                ],
                curviness: 1
            },
            duration: 3,
            ease: "none",
        }, ">1");


    tl1.fromTo(".ap-achivments-item--2", {
        left: "100vw",
        top: "100vh"
    }, {
        left: "0vw",
        top: "0vw",
        duration: 2.5,
        ease: "none",
    }, ">-3");

    tl1.from(".ap-achivments-item--2 .ap-achivments-item__img img", {
        width: '200%',
        height: '200%',
        duration: 2.5,
        ease: "none",
    }, "<");

    tl1.from(".ap-achivments-item--2 .ap-achivments-item__content", {
        x: "100%",
        ease: "none",
        duration: 2,
    } , ">-2");

    tl1.to(".ap-achivments-item--2 .ap-achivments-item__img ", {
        left: "-100%",
        ease: "none",
        duration: 3,
    } , ">1");


    tl1.fromTo(".ap-achivments-item--2 .ap-achivments-item__content", {
        left: "75.625vw",
    }, {
        left: "10.625vw",
        duration: 3,
        ease: "none",
    }, "<");


    tl1.from(".ap-achivments-item--3", {
        left: "100vw",
        ease: "none",
        duration: 2.5,
    } , ">-2.5");

    tl1.from(".ap-achivments-item--3 .ap-achivments-item__img", {
        y: "-100%",
        ease: "none",
        duration: 2.5,
    } , "<");

    tl1.from(".ap-achivments-item--3 .ap-achivments-item__img img", {
        width: '200%',
        height: '200%',
        duration: 2.5,
        ease: "none",
    }, "<");

    tl1.from(".ap-achivments-item--3 .ap-achivments-item__content", {
        y: "100%",
        ease: "none",
        duration: 2.5,
    } , "<");

    tl1.to(".ap-achivments-item--2", {
        y: "-100%",
        ease: "none",
        duration: 3.5,
    } , ">1");

    tl1.to(".ap-achivments-item--3", {
        y: "-100%",
        ease: "none",
        duration: 3.5,
    } , "<");

    tl1.from(".ap-automation", {
        top: "100vh",
        duration: 2.5,
        ease: "none",
    }, ">-2.5");

    tl1.to(".vt1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">1.5");
    tl1.to(".vt2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");
    tl1.to(".vt3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function (){
            $('.ap-automation__intro-text').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".vt4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.ap-automation__intro-text').addClass('active');
        }
    } , ">-0.3");


    tl1.from(".ap-automation__content", {
        top: '100vh',
        left: '100vw',
        duration: 3,
        ease: "none"
    }, "<-0.5");

    tl1.to(".ap-automation", {
        autoAlpha: 1,
        duration: 1.7,
        ease: "none"
    }, ">");

    st1 = ScrollTrigger.create({
        trigger: ".about-page",
        pin: true,
        start: "top top",
        end: () =>   "+="+addTime+"%",
        scrub: 1.5,
        animation: tl1,
    });
}

function initScrollAnimationTablet(){
    resizeFunction = function () {
        let listElems = $('.ap-activity-item__img img, .ap-achivments-item__img img');

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

        let greenBlockTop = $('.ap-green-logo').offset().top;
        let greenBlockTop2 = $('.ap-green-logo').innerHeight();
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
            $('.ap-activity__intro-title').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".at4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.ap-activity__intro-title').addClass('active');
        }
    } , ">-0.3");


    tl1.from(".ap-activity__intro-text", {
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
            $('.ap-activity__intro-text').removeClass('active');
        }
    } , ">-0.3");
    tl1.to(".as4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.ap-activity__intro-text').addClass('active');
        }
    } , ">-0.3");

    tl2.to(".ap-activity", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "none",
    } , ">");

    st1 = ScrollTrigger.create({
        trigger: ".ap-activity",
        pin: true,
        start: "top top",
        end: () => "+=300%",
        scrub: 1,
        animation: tl1,
    });



    tl2.to(".vt1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , 0);
    tl2.to(".vt2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
    } , ">-0.3");
    tl2.to(".vt3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function (){
            $('.ap-automation__intro-text').removeClass('active');
        }
    } , ">-0.3");
    tl2.to(".vt4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function (){
            $('.ap-automation__intro-text').addClass('active');
        }
    } , ">-0.3");
    tl2.to(".ap-automation__intro", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "none",
    } , ">");

    st2 = ScrollTrigger.create({
        trigger: ".ap-automation__intro",
        pin: true,
        start: "top top",
        end: () => "+=120%",
        scrub: 1,
        animation: tl2,
    });
}
