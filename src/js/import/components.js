import $, { event } from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);


addEventListener('beforeunload', (event) => { });
onbeforeunload = (event) => {
	window.scrollTo(0, 0);
};

$(document).ready(function (){
	//$('body').addClass('active');

    function setMaskHeader(position = 0){
        let header = $('.header--main');
        let headerDark = $('.header--dark');
        let procentMinus = 100 - parseFloat(position);
        $(header).css({"mask-image": "linear-gradient(-90deg, black "+procentMinus+"%, transparent "+procentMinus+"% 100%)",
            "-webkit-mask-image": "linear-gradient(-90deg, black "+procentMinus+"%, transparent "+procentMinus+"% 100%)"});
        $(headerDark).css({"mask-image": "linear-gradient(90deg, black "+procentMinus+"%, transparent "+procentMinus+"% 100%)",
            "-webkit-mask-image": "linear-gradient(90deg, black "+parseFloat(position)+"%, transparent "+parseFloat(position)+"% 100%)"});
    }

    function splitLetterSpan(target,marker){
        let words = $(target).text().split(' ');
        $(target).empty().html(function() {
            for (let i = 0; i < words.length; i++) {
                if (i == 0) {
                    $(this).append('<span>' + words[i] + '</span>');
                } else {
                    $(this).append(' <span>' + words[i] + '</span>');
                }
            }
        });
        $(target).find('span').each(function (){
            let elem = $(this);
            let characters = elem.text().split("");
            elem.empty();
            $.each(characters, function (i, el) {
                let random =  Math.floor(Math.random() * 4) + 1;
                elem.append("<i class='"+marker+random+"'>" + el + "</i>");
            });
        });
    }


    if ($('.home-page').length > 0){
        //главная страница
        splitLetterSpan('.assorti__intro-title','at');
        splitLetterSpan('.assorti__intro-text','as');
        splitLetterSpan('.partners__intro-title','pt');
        splitLetterSpan('.partners__intro-text','ps');

        var initMode;
        let addTime = 2300;
        let addTimeAssorti = 200;
        let addTimePoortfol = 350;

        let lightHead = true, lastProgress, targetProgress;
        let i = 0;
        let assortiCount = $('.assorti-item').length;
        let p = 0;
        let portfolioCount = $('.portfolio-item').length;

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
                addTime = 2300;
                setMaskHeader(0);
                lightHead = true;
                if (typeof st1 !== "undefined") st1.kill();
                if (typeof st2 !== "undefined") st2.kill();
                if (typeof st3 !== "undefined") st3.kill();
                tl.clear();
                tl1.clear();
                tl2.clear();
                tl3.clear();
                gsap.set(".loader__center, .loader__logo, .loader__title, .loader .l1, .loader .l2, .loader .l3, .loader .l4,.loader," +
                    ".s1__title, .s1__left, .s1__text,  .s1__right,  .s1__link, .about, .first, .s2, .s2__img img, .s3, .s3__right, .s3__right img," +
                    ".s4, .second, .assorti, .at1, .at2, .at3, .at4, .assorti__intro-text, .as1, .as2, .as3, .as4, .assorti-item, .assorti-item__img," +
                    ".assorti-item__img img, .assorti-item__text, .portfolio, .portfolio__anotation, .portfolio-item, .portfolio-item__first," +
                    ".portfolio-item__first-img img, .portfolio-item__first-content, .portfolio-item__second, .portfolio-item__second img," +
                    ".portfolio-item__second-content, .partners, .pt1, .pt2, .pt3, .pt4, .partners__intro-text, .ps1, .ps2, .ps3, .ps4," +
                    ".partners__items, .connect, .connect__first, .connect__second, .connect__content, .connect__content-blocks, .connect__link a," +
                    ".home-page", {clearProps:"all"});
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });
                $('.assorti__intro-text, .assorti__intro-title, .partners__intro-text, .partners__intro-title').addClass('active');
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
                left: 0,
                duration: 2,
            }, ">");

            tl1.to(".s1__link", {
                autoAlpha: 1,
                duration: 0.5,
            }, ">-0.4");
            tl1.set(".home-page", {
                backgroundColor: '#FDFDFD',
            }, ">");

            tl1.to(".s1__link", {
                autoAlpha: 0,
                duration: 0.5,
            }, ">1");
            tl1.to(".s1__right", {
                width: "62.5vw",
                height: "62vh",
                left: "2.5vw",
                duration: 2,
                ease: "none",
                onStart: function (){
                    setMaskHeader(100);
                    lightHead = false;
                },
                onReverseComplete: function (){
                    setMaskHeader(0);
                    lightHead = true;
                }
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
            tl1.from(".s2__img img", {
                width: '200%',
                height: '200%',
                duration: 2.3,
                ease: "none",
            }, "<");

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

            tl1.from(".s3__right img", {
                width: '200%',
                height: '200%',
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
                onComplete: function (){
                    setMaskHeader(0);
                    lightHead = true;
                }
            }, "<");

            lightHead = false;
            lastProgress = 0;
            targetProgress = 0.92628;
            tl1.to(".second", {
                top: "-100vh",
                duration: 3,
                ease: "none",
                onReverseComplete: function (){
                    setMaskHeader(100);
                    lightHead = false;
                },
                onUpdate: function (){
                    if (lastProgress < this.progress()){
                        if (this.progress() > targetProgress && lightHead){
                            setMaskHeader(100);
                            lightHead = false;
                        }
                    } else {
                        if (this.progress() < targetProgress && !lightHead){
                            setMaskHeader(0);
                            lightHead = true;
                        }
                    }
                    lastProgress = this.progress();
                }
            }, ">1");


            tl1.to(".assorti", {
                top: "0vh",
                duration: 0,
                ease: "none",
            }, "<");




            tl1.to(".at1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">4");
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
                    $('.assorti__intro-text').removeClass('active');
                }
            } , ">-0.3");
            tl1.to(".as4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-text').addClass('active');
                }
            } , ">-0.3");


            i = 0;
            $('.assorti-item').each(function (){
                addTime += addTimeAssorti;
                let firstDelay = '-3';
                if (i === 0) {
                    firstDelay = "-0.5";
                }
                i++;

                let elem = $(this);
                let img = elem.find('.assorti-item__img');
                let img2 = elem.find('.assorti-item__img img');
                let text = elem.find('.assorti-item__text');

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
                tl1.to(text, {
                    y: 0,
                    duration: 4,
                    ease: "power1.out",
                } , ">-3");
                if (i < assortiCount){
                    tl1.to(elem, {
                        top: "-100%",
                        duration: 4,
                        ease: "power1.in",
                    } , ">0.5");
                } else {
                    tl1.to('.assorti', {
                        left: "-100%",
                        duration: 4,
                        ease: "power1.in",
                    } , ">0.5");
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
            p = 0;
            $('.portfolio-item').each(function (){
                addTime += addTimePoortfol;
                let firstDelay = '-4.5';
                if (p === 0) {
                    firstDelay = "-2";
                }
                p++;

                let elem = $(this);
                let first = elem.find('.portfolio-item__first');
                let img1 = elem.find('.portfolio-item__first-img img');
                let title = elem.find('.portfolio-item__first-content');
                let second = elem.find('.portfolio-item__second');
                let img = elem.find('.portfolio-item__second img');
                let block = elem.find('.portfolio-item__second-content');

                tl1.from(elem, {
                    left: "100%",
                    duration: 3,
                    ease: "none",
                } , ">" + firstDelay);

                tl1.from(img1, {
                    width: "200%",
                    height: "200%",
                    duration: 3,
                    ease: "none",
                } , "<");

                tl1.from(title, {
                    x: "100%",
                    duration: 2,
                    ease: "none",
                } , ">-2");

                tl1.to(first, {
                    left: "-150%",
                    top: "100%",
                    duration: 5,
                    ease: "Sine.easeIn",
                } , ">");

                tl1.to(second, {
                    left: "30%",
                    top: "0",
                    duration: 3,
                    ease: "none",
                } , "<0.5");


                tl1.from(img, {
                    width: "200%",
                    height: "200%",
                    duration: 3,
                    ease: "none",
                } , "<");

                tl1.to(second, {
                    left: "0",
                    duration: 1.8,
                    ease: "none",
                } , ">");

                tl1.from(block, {
                    y: "-100%",
                    duration: 3,
                    ease: "none",
                } , ">-4");


                if (p < portfolioCount){
                    tl1.to(elem, {
                        left: "-100%",
                        duration: 6,
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
            }, ">-2.5");

            tl1.to(".pt1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">2.5");
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
            }, ">-1.7");

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
                onComplete: function (){
                    $('.partners__intro-text').removeClass('active');
                }
            } , ">-0.3");
            tl1.to(".ps4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.partners__intro-text').addClass('active');
                }
            } , ">-0.3");

            tl1.to(".partners__items", {
                autoAlpha: 1,
                duration: 1,
                ease: "none",
            } , ">");

            tl1.from(".connect", {
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
                    let targetProcent = ($('.connect').offset().left/$(window).width())*100;
                    setMaskHeader(targetProcent);
                }
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
                duration: 1.3,
                ease: "Sine.easeOut",
            }, "<3");

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
            tl1.to(".connect__link a", {
                autoAlpha: 1,
                duration: 1.7,
                ease: "none"
            }, ">");


            st1 = ScrollTrigger.create({
                trigger: ".home-page",
                pin: true,
                start: "top top",
                end: () =>   "+="+addTime+"%",
                scrub: 1.5,
                animation: tl1,
            });
        }

        function initScrollAnimationTablet(){
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
                width: "91.66vw",
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
                left: "52.08vw",
                duration: 4,
                ease: "none",
            }, 0);
            tl1.to(".s1__right", {
                left: 0,
                duration: 2,
                onComplete: function (){
                    setMaskHeader(100);
                    lightHead = false;
                },
            }, ">");
            tl1.to(".s1__link", {
                autoAlpha: 1,
                duration: 0.5,
            }, ">-0.4");
            tl1.to(".s1__right-inner video", {
                autoAlpha: 1,
                duration: 0.5,
                onReverseComplete: function (){
                    setMaskHeader(0);
                    lightHead = true;
                },
            }, ">");


            st1 = ScrollTrigger.create({
                trigger: ".s1__container",
                pin: true,
                start: "top top",
                end: () => "+=300%",
                scrub: 1,
                animation: tl1,
            });



            tl2.to(".at1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-title').removeClass('active');
                }
            } , 0);
            tl2.to(".at2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl2.to(".at3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.assorti__intro-title').removeClass('active');
                }
            } , ">-0.3");
            tl2.to(".at4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-title').addClass('active');
                }
            } , ">-0.3");
            tl2.from(".assorti__intro-text", {
                top: "200%",
                duration: 3,
                ease: "none",
            }, ">-1.7");
            tl2.to(".as1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">1");
            tl2.to(".as2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl2.to(".as3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.assorti__intro-text').removeClass('active');
                }
            } , ">-0.3");
            tl2.to(".as4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-text').addClass('active');
                }
            } , ">-0.3");
            tl2.to(".assorti__intro", {
                autoAlpha: 1,
                duration: 0.5,
                ease: "none",
            } , ">");





            st2 = ScrollTrigger.create({
                trigger: ".assorti__intro",
                pin: true,
                start: "top top",
                end: () => "+=300%",
                scrub: 1,
                animation: tl2,
            });


            tl4.to(".st1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-title').removeClass('active');
                }
            } , 0);
            tl4.to(".st2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl4.to(".st3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.assorti__intro-title').removeClass('active');
                }
            } , ">-0.3");
            tl4.to(".st4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-title').addClass('active');
                }
            } , ">-0.3");
            tl4.to(".portfolio__anotation", {
                autoAlpha: 1,
                duration: 0.5,
                ease: "none",
            } , ">");

            st4 = ScrollTrigger.create({
                trigger: ".portfolio__anotation",
                pin: true,
                start: "top top",
                end: () => "+=100%",
                scrub: 1,
                animation: tl4,
            });




            tl3.to(".pt1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.partners__intro-title').removeClass('active');
                }
            } , 0);
            tl3.to(".pt2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl3.to(".pt3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.partners__intro-title').removeClass('active');
                }
            } , ">-0.3");
            tl3.to(".pt4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.partners__intro-title').addClass('active');
                }
            } , ">-0.3");
            tl3.from(".partners__intro-text", {
                top: "200%",
                duration: 3,
                ease: "none",
            }, ">-1.7");
            tl3.to(".ps1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">1");
            tl3.to(".ps2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl3.to(".ps3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.partners__intro-text').removeClass('active');
                }
            } , ">-0.3");
            tl3.to(".ps4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.partners__intro-text').addClass('active');
                }
            } , ">-0.3");
            tl3.to(".partners__intro", {
                autoAlpha: 1,
                duration: 0.5,
                ease: "none",
            } , ">");

            st3 = ScrollTrigger.create({
                trigger: ".partners__intro",
                pin: true,
                start: "top top",
                end: () => "+=300%",
                scrub: 1,
                animation: tl3,
            });




            resizeFunction = function () {
                let listElems = $('.s2__img img, .s3__right img, .assorti-item__img img, ' +
                    '.portfolio-item__first-img img, .portfolio-item__second-img img');

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

                let lastBlockTop = $('.connect').offset().top;
                if ($(window).scrollTop() >= lastBlockTop && !lightHead){
                    setMaskHeader(0);
                    lightHead = true;
                } else if (lastBlockTop >= $(window).scrollTop() && lastBlockTop  <= viewportBottom && lightHead){
                    setMaskHeader(100);
                    lightHead = false;
                }
            }
        }

        function initScrollAnimationMobile(){
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
                width: "95.55vw",
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



            tl2.to(".at1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-title').removeClass('active');
                }
            } , 0);
            tl2.to(".at2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl2.to(".at3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.assorti__intro-title').removeClass('active');
                }
            } , ">-0.3");
            tl2.to(".at4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-title').addClass('active');
                }
            } , ">-0.3");
            tl2.from(".assorti__intro-text", {
                top: "200%",
                duration: 3,
                ease: "none",
            }, ">-1.7");
            tl2.to(".as1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">1");
            tl2.to(".as2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl2.to(".as3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.assorti__intro-text').removeClass('active');
                }
            } , ">-0.3");
            tl2.to(".as4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-text').addClass('active');
                }
            } , ">-0.3");
            tl2.to(".assorti__intro", {
                autoAlpha: 1,
                duration: 0.5,
                ease: "none",
            } , ">");

            st2 = ScrollTrigger.create({
                trigger: ".assorti__intro",
                pin: true,
                start: "top top",
                end: () => "+=300%",
                scrub: 1,
                animation: tl2,
            });





            tl4.to(".st1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-title').removeClass('active');
                }
            } , 0);
            tl4.to(".st2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl4.to(".st3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.assorti__intro-title').removeClass('active');
                }
            } , ">-0.3");
            tl4.to(".st4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.assorti__intro-title').addClass('active');
                }
            } , ">-0.3");
            tl4.to(".portfolio__anotation", {
                autoAlpha: 1,
                duration: 0.5,
                ease: "none",
            } , ">");

            st4 = ScrollTrigger.create({
                trigger: ".portfolio__anotation",
                pin: true,
                start: "top top",
                end: () => "+=100%",
                scrub: 1,
                animation: tl4,
            });



            tl3.to(".pt1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.partners__intro-title').removeClass('active');
                }
            } , 0);
            tl3.to(".pt2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl3.to(".pt3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.partners__intro-title').removeClass('active');
                }
            } , ">-0.3");
            tl3.to(".pt4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.partners__intro-title').addClass('active');
                }
            } , ">-0.3");
            tl3.from(".partners__intro-text", {
                top: "200%",
                duration: 3,
                ease: "none",
            }, ">-1.7");
            tl3.to(".ps1", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">1");
            tl3.to(".ps2", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
            } , ">-0.3");
            tl3.to(".ps3", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onComplete: function (){
                    $('.partners__intro-text').removeClass('active');
                }
            } , ">-0.3");
            tl3.to(".ps4", {
                autoAlpha: 0,
                duration: 0.7,
                ease: "none",
                onReverseComplete: function (){
                    $('.partners__intro-text').addClass('active');
                }
            } , ">-0.3");
            tl3.to(".partners__intro", {
                autoAlpha: 1,
                duration: 0.5,
                ease: "none",
            } , ">");

            st3 = ScrollTrigger.create({
                trigger: ".partners__intro",
                pin: true,
                start: "top top",
                end: () => "+=300%",
                scrub: 1,
                animation: tl3,
            });


            resizeFunction = function () {
                let listElems = $('.s2__img img, .s3__right img, .assorti-item__img img, ' +
                    '.portfolio-item__first-img img, .portfolio-item__second-img img');

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

                let lastBlockTop = $('.connect').offset().top;
                let firstBlockTop = $('.about').offset().top;


                if ($(window).scrollTop() >= lastBlockTop && !lightHead){
                    setMaskHeader(0);
                    lightHead = true;
                } else if (lastBlockTop >= $(window).scrollTop() && lastBlockTop  <= viewportBottom && lightHead){
                    setMaskHeader(100);
                    lightHead = false;
                }


                if ($(window).scrollTop() >= firstBlockTop && $(window).scrollTop() < lastBlockTop && lightHead){
                    setMaskHeader(100);
                    lightHead = false;
                } else if (firstBlockTop >= $(window).scrollTop() && firstBlockTop  <= viewportBottom && !lightHead){
                    setMaskHeader(0);
                    lightHead = true;
                }

            }
        }
    } else if($('.about-page').length > 0) {
        //о компании
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

    } else if ($('.contacts-page').length > 0){

        var initMode;
        let addTime = 2300;

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
                addTime = 2300;
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
                    ".s1__title, .s1__left, .s1__text,  .s1__right,  .s1__link, .about, .first, .s2, .s2__img img, .s3, .s3__right, .s3__right img," +
                    ".contacts-page__map" +
                    ".contacts-page", {clearProps:"all"});
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });
                $('.assorti__intro-text, .assorti__intro-title, .partners__intro-text, .partners__intro-title').addClass('active');
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
            }, ">-1");

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
            }, ">-1");

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

        // function initScrollAnimationTablet(){
        //     resizeFunction = function (){}

        //     tl.to(".loader__center", {
        //         autoAlpha: 1,
        //         duration: 1.5,
        //         delay: 1,
        //         ease: "none",
        //         onComplete: function (){
        //             $('body').removeClass('active');
        //         }
        //     });
        //     tl.to(".loader__logo", {
        //         width: 0,
        //         margin: 0,
        //         autoAlpha: 0,
        //         duration: 0.5,
        //         ease: "power1.out",
        //     } , ">");
        //     tl.to(".loader__title", {
        //         width: "74.6875vw",
        //         ease: "power1.out",
        //         duration: 1.5,
        //     } , "<");
        //     tl.to(".loader .l1", {
        //         autoAlpha: 0,
        //         duration: 0.4,
        //         ease: "none",
        //     } , ">0.2");
        //     tl.to(".loader .l2", {
        //         autoAlpha: 0,
        //         duration: 0.4,
        //         ease: "none",
        //     } , ">-0.1");
        //     tl.to(".loader .l3", {
        //         autoAlpha: 0,
        //         duration: 0.4,
        //         ease: "none",
        //     } , ">-0.1");
        //     tl.to(".loader .l4", {
        //         autoAlpha: 0,
        //         duration: 0.3,
        //         ease: "none",
        //     } , ">-0.1");
        //     tl.to(".loader", {
        //         autoAlpha: 0,
        //         duration: 0.5,
        //         ease: "none",
        //         onStart: function (){
        //             setMaskHeader(100);
        //             lightHead = false;
        //         },
        //         onReverseComplete: function (){
        //             setMaskHeader(0);
        //             lightHead = true;
        //         }
        //     } , ">0.2");


        //     tl1.to(".c1__title", {
        //         top: "32vh",
        //         opacity: 1,
        //         delay: 4,
        //         duration: 3,
        //     }, ">");

        //     tl1.to(".c1__contacts", {
        //         top: "50vh",
        //         opacity: 1,
        //         duration: 2,
        //         onComplete: function (){
        //             $('body').addClass('active');
        //         }
        //     }, "-=1");

        //     tl2.to(".c1__container", {
        //         motionPath: {
        //             path: [
        //                 // {left:'-80vw', top:'-40vw'},
        //                 {left:'-800vw', top:'-800vw'},
        //             ],
        //             curviness: 1
        //             //type: "cubic"
        //         },
        //         duration: 3.5,
        //         ease: "none",
        //     },"<")
        //     tl2.to(".contacts-page__map ", {
        //         motionPath: {
        //             path: [
        //                 {left:'100vw', top:'100vh'},
        //                 {left:'18vw', top:'21vh'},
        //                 {left:'-100vw', top:'21vh'},
        //             ],
        //             curviness: 1
        //             //type: "cubic"
        //         },
        //         duration: 0.4,
        //         ease: "none",
        //     }, "<"),
        //         tl2.to(".contacts-page__walk", {
        //             motionPath: {
        //                 path: [
        //                     {left:'200vw', top:'200vh'},
        //                     {left:'75vw', top:'90vh'},
        //                     {left:'65vw', top:'40vh'},
        //                     {left:'-100vw', top:'18vh'},
        //                 ],
        //                 curviness: 1
        //                 //type: "cubic"
        //             },
        //             duration: 0.6,
        //             ease: "none",
        //         }, "<"),
        //         tl2.to(".contacts-page__startWalk", {
        //             left: 0,
        //             top: 0,
        //             duration: 0.6,
        //             ease: "none",
        //             onStart: function (){
        //                 setMaskHeader(0);
        //                 lightHead = false;
        //             },
        //             onReverseComplete: function (){
        //                 setMaskHeader(0);
        //                 lightHead = true;
        //             }
        //         }, "<"),
        //         // tl2.to(".contacts-page__startWalk", {
        //         // 	top: "-30vh",
        //         // 	left: 0,
        //         // 	delay: 0.5,
        //         // 	duration: 0.3,
        //         // 	ease: "none",
        //         // }, "<"),
        //         st2 = ScrollTrigger.create({
        //             trigger: ".contacts-page",
        //             pin: true,
        //             start: "top top",
        //             end: () =>   "+="+addTime+"%",
        //             scrub: 1.5,
        //             animation: tl2,
        //         });
        // }
        // function initScrollAnimationMobile(){
        //     resizeFunction = function (){}

        //     tl.to(".loader__center", {
        //         autoAlpha: 1,
        //         duration: 1.5,
        //         delay: 1,
        //         ease: "none",
        //         onComplete: function (){
        //             $('body').removeClass('active');
        //         }
        //     });
        //     tl.to(".loader__logo", {
        //         width: 0,
        //         margin: 0,
        //         autoAlpha: 0,
        //         duration: 0.5,
        //         ease: "power1.out",
        //     } , ">");
        //     tl.to(".loader__title", {
        //         width: "74.6875vw",
        //         ease: "power1.out",
        //         duration: 1.5,
        //     } , "<");
        //     tl.to(".loader .l1", {
        //         autoAlpha: 0,
        //         duration: 0.4,
        //         ease: "none",
        //     } , ">0.2");
        //     tl.to(".loader .l2", {
        //         autoAlpha: 0,
        //         duration: 0.4,
        //         ease: "none",
        //     } , ">-0.1");
        //     tl.to(".loader .l3", {
        //         autoAlpha: 0,
        //         duration: 0.4,
        //         ease: "none",
        //     } , ">-0.1");
        //     tl.to(".loader .l4", {
        //         autoAlpha: 0,
        //         duration: 0.3,
        //         ease: "none",
        //     } , ">-0.1");
        //     tl.to(".loader", {
        //         autoAlpha: 0,
        //         duration: 0.5,
        //         ease: "none",
        //         onStart: function (){
        //             setMaskHeader(100);
        //             lightHead = false;
        //         },
        //         onReverseComplete: function (){
        //             setMaskHeader(0);
        //             lightHead = true;
        //         }
        //     } , ">0.2");


        //     tl1.to(".c1__title", {
        //         top: "32vh",
        //         opacity: 1,
        //         delay: 4,
        //         duration: 3,
        //     }, ">");

        //     tl1.to(".c1__contacts", {
        //         top: "50vh",
        //         opacity: 1,
        //         duration: 2,
        //         onComplete: function (){
        //             $('body').addClass('active');
        //         }
        //     }, "-=1");

        //     tl2.to(".c1__container", {
        //         motionPath: {
        //             path: [
        //                 // {left:'-80vw', top:'-40vw'},
        //                 {left:'-800vw', top:'-800vw'},
        //             ],
        //             curviness: 1
        //             //type: "cubic"
        //         },
        //         duration: 3.5,
        //         ease: "none",
        //     },"<")
        //     tl2.to(".contacts-page__map ", {
        //         motionPath: {
        //             path: [
        //                 {left:'100vw', top:'100vh'},
        //                 {left:'18vw', top:'21vh'},
        //                 {left:'-100vw', top:'21vh'},
        //             ],
        //             curviness: 1
        //             //type: "cubic"
        //         },
        //         duration: 0.4,
        //         ease: "none",
        //     }, "<"),
        //         tl2.to(".contacts-page__walk", {
        //             motionPath: {
        //                 path: [
        //                     {left:'200vw', top:'200vh'},
        //                     {left:'75vw', top:'90vh'},
        //                     {left:'65vw', top:'40vh'},
        //                     {left:'-100vw', top:'18vh'},
        //                 ],
        //                 curviness: 1
        //                 //type: "cubic"
        //             },
        //             duration: 0.6,
        //             ease: "none",
        //         }, "<"),
        //         tl2.to(".contacts-page__startWalk", {
        //             left: 0,
        //             top: 0,
        //             duration: 0.6,
        //             ease: "none",
        //             onStart: function (){
        //                 setMaskHeader(0);
        //                 lightHead = false;
        //             },
        //             onReverseComplete: function (){
        //                 setMaskHeader(0);
        //                 lightHead = true;
        //             }
        //         }, "<"),
        //         // tl2.to(".contacts-page__startWalk", {
        //         // 	top: "-30vh",
        //         // 	left: 0,
        //         // 	delay: 0.5,
        //         // 	duration: 0.3,
        //         // 	ease: "none",
        //         // }, "<"),
        //         st2 = ScrollTrigger.create({
        //             trigger: ".contacts-page",
        //             pin: true,
        //             start: "top top",
        //             end: () =>   "+="+addTime+"%",
        //             scrub: 1.5,
        //             animation: tl2,
        //         });
        // }

    } else {
        //остальные страницы
        $('body').addClass('active');

        setMaskHeader(100);
    }

	$('.js-hide-menu,.menu__overlay').on('click',function (){
		event.preventDefault();
		$('.menu').removeClass('active');
		$('body').addClass('active');
	});
	$('.js-show-menu').on('click',function (){
		event.preventDefault();
		$('body').removeClass('active');
		$('.menu').addClass('active');
	});

    $(document).on('click', '.to-top', function (){
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 'fast');
    });

    $(window).on('scroll', function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 300) {
            $('.to-top').addClass('active');
        } else {
            $('.to-top').removeClass('active');
        }
    });

    // табы на странице регистрации

    $('.js-register-lk-tab-entity').on('click',function() {
        $('.js-register-lk-tab-entity').addClass('active');
        $('.js-register-lk-tab-individual').removeClass('active');

        $('.js-register-lk-form-entity').addClass('active');
        $('.js-register-lk-form-individual').removeClass('active');
    });

    $('.js-register-lk-tab-individual').on('click',function() {
        $('.js-register-lk-tab-individual').addClass('active');
        $('.js-register-lk-tab-entity').removeClass('active');

        $('.js-register-lk-form-individual').addClass('active');
        $('.js-register-lk-form-entity').removeClass('active');
    });

    // маска для инпута телефона

    function maskPhone(selector, masked = "+7 (___) ___-__-__") {
        const elems = document.querySelectorAll(selector);
      
        function mask(event) {
          const keyCode = event.keyCode;
          const template = masked,
            def = template.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
          let i = 0,
            newValue = template.replace(/[_\d]/g, function (a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
          i = newValue.indexOf("_");
          if (i != -1) {
            newValue = newValue.slice(0, i);
          }
          let reg = template
            .substr(0, this.value.length)
            .replace(/_+/g, function (a) {
              return "\\d{1," + a.length + "}";
            })
            .replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
            this.value = newValue;
          }
          if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
          }
        }
      
        for (const elem of elems) {
          elem.addEventListener("input", mask);
          elem.addEventListener("focus", mask);
          elem.addEventListener("blur", mask);
        }
    }
    if ($('input[type="tel"]').length > 0) {
        maskPhone('input[type="tel"]');
    }

    // popup

    $('.js-popup-active').on('click',function (e) {
        $('.js-popup').addClass('active');
        $('body').addClass('no-scroll');
    });
    $('.js-popup-close').on('click',function (e) {
        $('.js-popup').removeClass('active');
        $('body').removeClass('no-scroll');
    });
});
