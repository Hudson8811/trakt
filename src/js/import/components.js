import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

$(document).ready(function (){
	let addTime = 0;
	let addTimeAssorti = 200;

	$('body').addClass('active');


	$('.assorti__intro-title').each(function() {
		let words = $(this).text().split(' ');
		$(this).empty().html(function() {
			for (let i = 0; i < words.length; i++) {
				if (i == 0) {
					$(this).append('<span>' + words[i] + '</span>');
				} else {
					$(this).append(' <span>' + words[i] + '</span>');
				}
			}
		});
		$(this).find('span').each(function (){
			let elem = $(this);
			let characters = elem.text().split("");
			elem.empty();
			$.each(characters, function (i, el) {
				let random =  Math.floor(Math.random() * 4) + 1;
				elem.append("<i class='at"+random+"'>" + el + "</i>");
			});
		});
	});

	$('.assorti__intro-text').each(function() {
		let words = $(this).text().split(' ');
		$(this).empty().html(function() {
			for (let i = 0; i < words.length; i++) {
				if (i == 0) {
					$(this).append('<span>' + words[i] + '</span>');
				} else {
					$(this).append(' <span>' + words[i] + '</span>');
				}
			}
		});
		$(this).find('span').each(function (){
			let elem = $(this);
			let characters = elem.text().split("");
			elem.empty();
			$.each(characters, function (i, el) {
				let random =  Math.floor(Math.random() * 4) + 1;
				elem.append("<i class='as"+random+"'>" + el + "</i>");
			});
		});
	});

	$('.partners__intro-title').each(function() {
		let words = $(this).text().split(' ');
		$(this).empty().html(function() {
			for (let i = 0; i < words.length; i++) {
				if (i == 0) {
					$(this).append('<span>' + words[i] + '</span>');
				} else {
					$(this).append(' <span>' + words[i] + '</span>');
				}
			}
		});
		$(this).find('span').each(function (){
			let elem = $(this);
			let characters = elem.text().split("");
			elem.empty();
			$.each(characters, function (i, el) {
				let random =  Math.floor(Math.random() * 4) + 1;
				elem.append("<i class='pt"+random+"'>" + el + "</i>");
			});
		});
	});

	$('.partners__intro-text').each(function() {
		let words = $(this).text().split(' ');
		$(this).empty().html(function() {
			for (let i = 0; i < words.length; i++) {
				if (i == 0) {
					$(this).append('<span>' + words[i] + '</span>');
				} else {
					$(this).append(' <span>' + words[i] + '</span>');
				}
			}
		});
		$(this).find('span').each(function (){
			let elem = $(this);
			let characters = elem.text().split("");
			elem.empty();
			$.each(characters, function (i, el) {
				let random =  Math.floor(Math.random() * 4) + 1;
				elem.append("<i class='ps"+random+"'>" + el + "</i>");
			});
		});
	});



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


	tl1.to(".first", {
		motionPath: {
			path: [
				{left:'-50vw', top:'-10vw'},
				{left:'-60vw', top:'-50vw'},
				{left:'-70vw', top:'-100vw'}
				],
			curviness: 1
			//type: "cubic"
		},
		duration: 3.5,
		ease: "none",
	}, ">");

	tl1.to(".s2", {
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

	tl1.to(".s2", {
		left: "-100vw",
		duration: 3,
		ease: "none",
	}, ">");


	tl1.fromTo(".s3", {
		left: "100vw"
	}, {
		left: "0vw",
		duration: 2.5,
		ease: "none",
	}, ">-3");


	tl1.from(".s3__right", {
		y: '-100%',
		duration: 2.3,
		ease: "none",
	}, "<");


	tl1.fromTo(".s3",
		{
			left: 0,
			top: 0,
		},{
		motionPath: {
			path: [
				{left:'-10vw', top:'0vh'},
				{left:'-20vw', top:'-50vh'},
				{left:'-30vw', top:'-100vh'},
			],
			curviness: 1
		},
		duration: 3,
		ease: "none",
	}, ">0.5");


	tl1.to(".s3__right", {
		y: '-50%',
		duration: 1.5,
		ease: "none",
	}, "<");


	tl1.to(".s4", {
		top: 0,
		left: 0,
		duration: 3,
		ease: "none",
	}, "<");


	tl1.to(".second", {
		top: "-100vh",
		duration: 3,
		ease: "none",
	}, ">1");


	tl1.to(".assorti", {
		top: "0vh",
		duration: 2,
		ease: "none",
		onComplete: function (){
			$('.assorti__intro-title').addClass('active');
		}
	}, ">-2.5");




	tl1.to(".at1", {
		autoAlpha: 0,
		duration: 0.7,
		ease: "none",
		onReverseComplete: function (){
			$('.assorti__intro-title').removeClass('active');
		}
	} , ">3");
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
			$('.assorti__intro-title').removeClass('active');
		}
	} , ">-0.3");
	tl1.to(".at4", {
		autoAlpha: 0,
		duration: 0.7,
		ease: "none",
		onReverseComplete: function (){
			$('.assorti__intro-title').addClass('active');
		}
	} , ">-0.3");

	tl1.from(".assorti__intro-text", {
		top: "200%",
		duration: 3,
		ease: "none",
	}, ">");


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
	} , ">-0.3");
	tl1.to(".as4", {
		autoAlpha: 0,
		duration: 0.7,
		ease: "none",
	} , ">-0.3");


	let i = 0;
	let assortiCount = 	$('.assorti-item').length;
	$('.assorti-item').each(function (){
		let firstDelay = '-3';
		if (i === 0) {
			firstDelay = "-0.5";
		}
		i++;

		let elem = $(this);
		let img = elem.find('.assorti-item__img');
		let text = elem.find('.assorti-item__text');

		tl1.from(elem, {
			top: "100%",
			duration: 2,
			ease: "none",
		} , ">" + firstDelay);
		tl1.to(img, {
			x: 0,
			y: 0,
			duration: 3,
			ease: "none",
		} , ">-1");
		tl1.to(text, {
			y: 0,
			duration: 2,
			ease: "none",
		} , ">-2");
		if (i < assortiCount){
			tl1.to(elem, {
				top: "-100%",
				duration: 3,
				ease: "none",
			} , ">1.5");
		} else {
			tl1.to('.assorti', {
				left: "-100%",
				duration: 3,
				ease: "none",
			} , ">1.5");
		}

	});


	tl1.from('.portfolio', {
		left: "100%",
		duration: 3,
		ease: "none",
	} , ">-2");



	tl1.to('.portfolio__anotation', {
		left: "-100%",
		duration: 2,
		ease: "none",
	} , ">2");

	let p = 0;
	let portfolioCount = 	$('.portfolio-item').length;
	$('.portfolio-item').each(function (){
		let firstDelay = '-3.1';
		if (p === 0) {
			firstDelay = "-2";
		}
		p++;

		let elem = $(this);
		let first = elem.find('.portfolio-item__first');
		let title = elem.find('.portfolio-item__first-content');
		let second = elem.find('.portfolio-item__second');
		let block = elem.find('.portfolio-item__second-content');

		tl1.from(elem, {
			left: "100%",
			duration: 3,
			ease: "none",
		} , ">" + firstDelay);

		tl1.from(title, {
			x: "100%",
			duration: 2,
			ease: "none",
		} , ">-2");

		tl1.to(first, {
			left: "-150%",
			top: "100%",
			duration: 3,
			ease: "none",
		} , ">");

		tl1.to(second, {
			left: "30%",
			top: "0",
			duration: 2,
			ease: "none",
		} , "<-0.8");

		tl1.to(second, {
			left: "0",
			duration: 2,
			ease: "none",
		} , ">");

		tl1.from(block, {
			y: "-100%",
			duration: 3,
			ease: "none",
		} , ">-3");


		if (p < portfolioCount){
			tl1.to(elem, {
				left: "-100%",
				duration: 3,
				ease: "none",
			} , ">");

		} else {
			tl1.to('.portfolio', {
				top: "-100%",
				duration: 3,
				ease: "none",
			} , ">");
		}

	});



	tl1.from(".partners", {
		top: "100vh",
		duration: 2,
		ease: "none",
		onComplete: function (){
			$('.partners__intro-title').addClass('active');
		}
	}, ">-2.5");




	tl1.to(".pt1", {
		autoAlpha: 0,
		duration: 0.7,
		ease: "none",
		onReverseComplete: function (){
			$('.partners__intro-title').removeClass('active');
		}
	} , ">3");
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
			$('.partners__intro-title').removeClass('active');
		}
	} , ">-0.3");
	tl1.to(".pt4", {
		autoAlpha: 0,
		duration: 0.7,
		ease: "none",
		onReverseComplete: function (){
			$('.partners__intro-title').addClass('active');
		}
	} , ">-0.3");

	tl1.from(".partners__intro-text", {
		top: "200%",
		duration: 3,
		ease: "none",
	}, ">");


	tl1.to(".ps1", {
		autoAlpha: 0,
		duration: 0.7,
		ease: "none",
	} , ">1");
	tl1.to(".ps2", {
		autoAlpha: 0,
		duration: 0.7,
		ease: "none",
	} , ">-0.3");
	tl1.to(".ps3", {
		autoAlpha: 0,
		duration: 0.7,
		ease: "none",
	} , ">-0.3");
	tl1.to(".ps4", {
		autoAlpha: 0,
		duration: 0.7,
		ease: "none",
	} , ">-0.3");

	tl1.to(".partners__items", {
		autoAlpha: 1,
		duration: 2,
		ease: "none",
	} , ">");

	tl1.from(".connect", {
		left: "100%",
		duration: 2,
		ease: "none",
	} , ">1");

	tl1.from(".connect__first", {
		left: "100vw",
		duration: 2.5,
		ease: "none",
	}, ">");

	tl1.from(".connect__second", {
		left: "100vw",
		top: "100vh",
		duration: 3,
		ease: "none",
	}, ">");

	tl1.addLabel("l1", '<');
	tl1.addLabel("l2", '>');

	tl1.to(".connect__first", {
		left: "-150vw",
		top: "-100vh",
		duration: 6,
		ease: "none",
	}, ">-1.7");

	tl1.fromTo(".connect__content", {
		y: "250%"
	},{
		y: "-150%",
		duration: 6,
		ease: "none",
	}, "l1");


	tl1.fromTo(".connect__content-blocks", {
		y: "100%"
	},{
		y: "0",
		duration: 1.1,
		ease: "none",
	}, "<2");

	tl1.to(".connect__second", {
		left: "-100vw",
		duration: 4,
		ease: "none",
	}, "l2");

	tl1.to(".connect", {
		backgroundColor: '#1E713F',
		duration: 1.5,
		ease: "none",
		onComplete: function (){
			$('.connect__link').addClass('active');
		}
	}, ">-2");

	tl1.to(".connect__link a", {
		autoAlpha: 1,
		duration: 0.5,
		ease: "none",
		onReverseComplete: function (){
			$('.connect__link').removeClass('active');
		}
	}, ">");






	st1 = ScrollTrigger.create({
		trigger: ".home-page",
		pin: true,
		start: "top top",
		end: () =>   "+=5000%",
		scrub: 1,
		animation: tl1,
	});


});
