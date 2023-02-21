import $, { event } from "jquery";
import gsap from "gsap";

import {setMaskHeader,splitLetterSpan} from '../_functions';


splitLetterSpan('.fp-intro__title','at');

let tl = gsap.timeline({
    onComplete: function (){
        $('body').addClass('active');
    }
});

initAnimation();

function initAnimation(){
    setMaskHeader(100);
    tl.to(".at1", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , "1");
    tl.to(".at2", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">-0.1");
    tl.to(".at3", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none",
    } , ">-0.1");
    tl.to(".at4", {
        autoAlpha: 0,
        duration: 0.3,
        ease: "none",
    } , ">-0.1");
    tl.to(".fp-intro", {
        autoAlpha: 0,
        duration: 0.5,
        ease: "none",
    } , ">0.2");
}

$(document).on('click','.fp-tabs__item',function (){
    if (!$(this).hasClass('active')){
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $('.fp-sections').eq(index).addClass('active').siblings('.fp-sections').removeClass('active');
    }
});
$(document).on('click','.fp-sections__item-title',function (){
    let parent = $(this).parent();
    parent.toggleClass('active');
    parent.find('.fp-sections__item-text').stop().slideToggle(300);
});