import $, { event } from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

import {setMaskHeader,splitLetterSpan} from '../_functions';

var initMode;
let addTime = 500;

let lightHead = true, lastProgress, targetProgress;
let tl = gsap.timeline({
    onComplete: function (){
        $('body').addClass('active');
    }
});
let st1, st2, st3, st4;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});
let tl4 = gsap.timeline({});

let resizeFunction;
$(window).on('scroll',function (){
    resizeFunction();
});

function initAnimation(){
    if (window.innerWidth > 999){
        initScrollAnimationDesktop();
        initMode = 'desk';
    } else if(window.innerWidth > 699){
        initScrollAnimationTablet();
        initMode = 'tablet';
    } else {
        initScrollAnimationMobile();
        initMode = 'mobile';
    }
}

initAnimation();
var dwidth = $(window).width();
$(window).on('resize',function (){
    /*if ( (window.innerWidth > 999 && initMode != 'desk') ||
        (window.innerWidth > 699 && window.innerWidth <= 999 && initMode != 'tablet') ||
        (window.innerWidth <= 699 && initMode != 'mobile') ){*/
    var wwidth = $(window).width();
    if(dwidth!==wwidth){
        setMaskHeader(100);
        lightHead = true;
        if (typeof st1 !== "undefined") st1.kill();
        if (typeof st2 !== "undefined") st2.kill();
        if (typeof st3 !== "undefined") st3.kill();
        tl.clear();
        tl1.clear();
        tl2.clear();
        tl3.clear();
        gsap.set(".loader__center, .loader__logo, .loader__title, .loader .l1, .loader .l2, .loader .l3, .loader .l4,.loader," +
            ".c1__title,.c1__contacts,.first,.contacts-page__walk,.contacts-page__startWalk" +
            ".contacts-page__map" +
            ".contacts-page", {clearProps:"all"});
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

    tl.to(".loader__center", {
        autoAlpha: 1,
        duration: 1.5,
        delay: 1,
        ease: "none",
        onComplete: function (){
            $('body').removeClass('active');
        }
    });
    tl.to(".loader__logo", {
        width: 0,
        margin: 0,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.out",
    } , ">");
    tl.to(".loader__title", {
        width: "74.6875vw",
        ease: "power1.out",
        duration: 1.5,
    } , "<");
    tl.to(".loader .l1", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">0.2");
    tl.to(".loader .l2", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">-0.1");
    tl.to(".loader .l3", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">-0.1");
    tl.to(".loader .l4", {
        autoAlpha: 0,
        duration: 0.3,
        ease: "none",
    } , ">-0.1");
    tl.to(".loader", {
        autoAlpha: 0,
        duration: 0.5,
        ease: "none",
        onStart: function (){
            setMaskHeader(100);
            lightHead = false;
        },
        onReverseComplete: function (){
            setMaskHeader(0);
            lightHead = true;
        }
    } , ">0.2");


    tl1.to(".c1__title", {
        top: "32vh",
        opacity: 1,
        delay: 4,
        duration: 3,
    }, ">");

    tl1.to(".c1__contacts", {
        top: "50vh",
        opacity: 1,
        duration: 2,
        onComplete: function (){
            $('body').addClass('active');
        }
    }, ">-2");

    tl2.to(".first", {
        left:'-100vw',
        top:'-100vh',
        ease: "none",
        duration: 0.12,
    },">-1")
    tl2.to(".contacts-page__map ", {
        motionPath: {
            path: [
                {left:'82vw', top:'80vh'},
                {left:'00vw', top:'5vh'},

            ],
            curviness: 1
            //type: "cubic"
        },
        duration: 0.16,
        ease: "none",
    }, "<-0.1"),
        tl2.to(".contacts-page__map ", {
            motionPath: {
                path: [
                    {left:'0vw', top:'5vh'},
                    {left:'-100vw', top:'5vh'},
                ],
                curviness: 1
                //type: "cubic"
            },
            duration: 0.1,
            delay: 0.005,
            ease: "none",
        }, ">"),
        tl2.to(".contacts-page__walk", {
            motionPath: {
                path: [
                    {left:'100vw', top:'100vh'},
                    {left:'75vw', top:'90vh'},
                    {left:'50vw', top:'40vh'},
                ],
                curviness: 1
                //type: "cubic"
            },
            duration: 0.1,
            ease: "none",
        }, ">-0.1"),
        tl2.to(".contacts-page__walk", {
            motionPath: {
                path: [
                    {left:'50vw', top:'40vh'},
                    {left:'-100vw', top:'40vh'},
                ],
                curviness: 1
                //type: "cubic"
            },
            delay: 0.005,
            duration: 0.1,
            ease: "none",
        }, ">"),
        tl2.to(".contacts-page__startWalk", {
            left: 0,
            top: 0,
            duration: 0.1,
            ease: "none",

        }, ">-0.1"),
        tl2.to(".contacts-page__startWalk", {
            duration: 0.01,
            delay: 0.005,
            ease: "none",

        }, ">"),
        st2 = ScrollTrigger.create({
            trigger: ".contacts-page",
            pin: true,
            start: "top top",
            end: () =>   "+="+addTime+"%",
            scrub: 1.5,
            animation: tl2,
        });
}
function initScrollAnimationTablet(){
    resizeFunction = function (){}

    tl.to(".loader__center", {
        autoAlpha: 1,
        duration: 1.5,
        delay: 1,
        ease: "none",
        onComplete: function (){
            $('body').removeClass('active');
        }
    });
    tl.to(".loader__logo", {
        width: 0,
        margin: 0,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.out",
    } , ">");
    tl.to(".loader__title", {
        width: "74.6875vw",
        ease: "power1.out",
        duration: 1.5,
    } , "<");
    tl.to(".loader .l1", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">0.2");
    tl.to(".loader .l2", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">-0.1");
    tl.to(".loader .l3", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">-0.1");
    tl.to(".loader .l4", {
        autoAlpha: 0,
        duration: 0.3,
        ease: "none",
    } , ">-0.1");
    tl.to(".loader", {
        autoAlpha: 0,
        duration: 0.5,
        ease: "none",
        onStart: function (){
            setMaskHeader(100);
            lightHead = false;
        },
        onReverseComplete: function (){
            setMaskHeader(0);
            lightHead = true;
        }
    } , ">0.2");


    tl1.to(".c1__title", {
        top: "32vh",
        opacity: 1,
        delay: 4,
        duration: 3,
    }, ">");

    tl1.to(".c1__contacts", {
        top: "50vh",
        opacity: 1,
        duration: 2,
        onComplete: function (){
            $('body').addClass('active');
        }
    }, ">-2");

    tl2.to(".first", {
        left:'-100vw',
        top:'-100vh',
        ease: "none",
        duration: 0.12,
    },">-1")
    tl2.to(".contacts-page__map ", {
        motionPath: {
            path: [
                {left:'82vw', top:'80vh'},
                {left:'00vw', top:'5vh'},

            ],
            curviness: 1
            //type: "cubic"
        },
        duration: 0.16,
        ease: "none",
    }, "<-0.1"),
        tl2.to(".contacts-page__map ", {
            motionPath: {
                path: [
                    {left:'0vw', top:'5vh'},
                    {left:'-100vw', top:'5vh'},
                ],
                curviness: 1
                //type: "cubic"
            },
            duration: 0.1,
            delay: 0.005,
            ease: "none",
        }, ">"),
        tl2.to(".contacts-page__walk", {
            motionPath: {
                path: [
                    {left:'100vw', top:'100vh'},
                    {left:'75vw', top:'90vh'},
                    {left:'50vw', top:'40vh'},
                ],
                curviness: 1
                //type: "cubic"
            },
            duration: 0.1,
            ease: "none",
        }, ">-0.1"),
        tl2.to(".contacts-page__walk", {
            motionPath: {
                path: [
                    {left:'50vw', top:'40vh'},
                    {left:'-100vw', top:'40vh'},
                ],
                curviness: 1
                //type: "cubic"
            },
            delay: 0.005,
            duration: 0.1,
            ease: "none",
        }, ">"),
        tl2.to(".contacts-page__startWalk", {
            left: 0,
            top: 0,
            duration: 0.1,
            ease: "none",

        }, ">-0.1"),
        tl2.to(".contacts-page__startWalk", {
            duration: 0.01,
            delay: 0.005,
            ease: "none",

        }, ">"),
        st2 = ScrollTrigger.create({
            trigger: ".contacts-page",
            pin: true,
            start: "top top",
            end: () =>   "+="+addTime+"%",
            scrub: 1.5,
            animation: tl2,
        });
}
function initScrollAnimationMobile(){
    resizeFunction = function (){}

    tl.to(".loader__center", {
        autoAlpha: 1,
        duration: 1.5,
        delay: 1,
        ease: "none",
        onComplete: function (){
            $('body').removeClass('active');
        }
    });
    tl.to(".loader__logo", {
        width: 0,
        margin: 0,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.out",
    } , ">");
    tl.to(".loader__title", {
        width: "74.6875vw",
        ease: "power1.out",
        duration: 1.5,
    } , "<");
    tl.to(".loader .l1", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">0.2");
    tl.to(".loader .l2", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">-0.1");
    tl.to(".loader .l3", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">-0.1");
    tl.to(".loader .l4", {
        autoAlpha: 0,
        duration: 0.3,
        ease: "none",
    } , ">-0.1");
    tl.to(".loader", {
        autoAlpha: 0,
        duration: 0.5,
        ease: "none",
        onStart: function (){
            setMaskHeader(100);
            lightHead = false;
        },
        onReverseComplete: function (){
            setMaskHeader(0);
            lightHead = true;
        }
    } , ">0.2");


    tl1.to(".c1__title", {
        top: "120px",
        opacity: 1,
        delay: 4,
        duration: 3,
    }, ">");

    tl1.to(".c1__contacts", {
        top: "219px",
        opacity: 1,
        duration: 2,
        onComplete: function (){
            $('body').addClass('active');
        }
    }, ">-1");


}

