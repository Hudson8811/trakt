import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

$(document).ready(function (){
	let tl = gsap.timeline({
		onComplete: function (){
			$('body').addClass('active');
		}
	});

	tl.to(".loader__center", {
		autoAlpha: 1,
		duration: 1.5,
		delay: 1,
		ease: "none",
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
	} , ">0.2");


	let st1, st2;
	let tl1 = gsap.timeline({});

	tl1.to(".s1__title", {
		z: 1500,
		duration: 1,
		ease: "none",
	});
	tl1.set(".s1__title", {
		opacity: 0,
	}, ">-0.7");

	tl1.to(".s1__left", {
		z: 1500,
		duration: 2,
		ease: "none",
	}, 0);
	tl1.set(".s1__left", {
		opacity: 0,
	}, ">-0.7");

	tl1.to(".s1__text", {
		autoAlpha: 1,
		duration: 0.4,
		ease: "none",
	}, ">0.3");
	tl1.to(".s1__text", {
		duration: 2,
		z: 100,
		ease: "none",
	}, "<");
	tl1.to(".s1__text", {
		autoAlpha: 0,
		duration: 0.4,
		ease: "none",
	}, ">-0.4");

	tl1.to(".s1__right", {
		width: "100vw",
		height: "100vh",
		left: "43.125vw",
		duration: 4,
		ease: "none",
	}, 0);

	tl1.to(".s1__right", {
		width: "100vw",
		height: "100vh",
		left: "43.125vw",
		duration: 4,
		ease: "none",
	}, 0);
	tl1.to(".s1__right", {
		left: 0,
		duration: 2,
	}, ">");

	tl1.to(".s1__link", {
		autoAlpha: 1,
		duration: 0.5,
	}, ">-0.4");
	tl1.set(".home-page", {
		backgroundColor: '#FFFFFF',
	}, ">");

	tl1.to(".s1__link", {
		autoAlpha: 0,
		duration: 0.5,
	}, ">1");
	tl1.to(".s1__right", {
		width: "62.5vw",
		height: "38.75vw",
		left: "2.5vw",
		duration: 2,
		ease: "none",
	}, ">-0.3");

	tl1.to(".about", {
		left: "67.5vw",
		duration: 2,
		ease: "none",
	}, "<");

	st1 = ScrollTrigger.create({
		trigger: ".home-page",
		pin: true,
		start: "top top",
		end: () =>   "+=250%",
		scrub: 1,
		animation: tl1,
	});
});
