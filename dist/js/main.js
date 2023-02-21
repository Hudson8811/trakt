/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/import/_functions.js":
/*!*************************************!*\
  !*** ./src/js/import/_functions.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMaskHeader": function() { return /* binding */ setMaskHeader; },
/* harmony export */   "splitLetterSpan": function() { return /* binding */ splitLetterSpan; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function setMaskHeader() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header--main');
  var headerDark = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header--dark');
  var procentMinus = 100 - parseFloat(position);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(header).css({
    "mask-image": "linear-gradient(-90deg, black " + procentMinus + "%, transparent " + procentMinus + "% 100%)",
    "-webkit-mask-image": "linear-gradient(-90deg, black " + procentMinus + "%, transparent " + procentMinus + "% 100%)"
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(headerDark).css({
    "mask-image": "linear-gradient(90deg, black " + procentMinus + "%, transparent " + procentMinus + "% 100%)",
    "-webkit-mask-image": "linear-gradient(90deg, black " + parseFloat(position) + "%, transparent " + parseFloat(position) + "% 100%)"
  });
}
function splitLetterSpan(target, marker) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('p').length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('p').each(function () {
      var words = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().split(' ');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).empty().html(function () {
        for (var i = 0; i < words.length; i++) {
          if (i == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append('<span>' + words[i] + '</span>');
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append(' <span>' + words[i] + '</span>');
          }
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').each(function () {
        var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var characters = elem.text().split("");
        elem.empty();
        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(characters, function (i, el) {
          var random = Math.floor(Math.random() * 4) + 1;
          elem.append("<i class='" + marker + random + "'>" + el + "</i>");
        });
      });
    });
  } else {
    var words = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).text().split(' ');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).empty().html(function () {
      for (var i = 0; i < words.length; i++) {
        if (i == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append('<span>' + words[i] + '</span>');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append(' <span>' + words[i] + '</span>');
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).find('span').each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var characters = elem.text().split("");
      elem.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(characters, function (i, el) {
        var random = Math.floor(Math.random() * 4) + 1;
        elem.append("<i class='" + marker + random + "'>" + el + "</i>");
      });
    });
  }
}

/***/ }),

/***/ "./src/js/import/animations/_about-page.js":
/*!*************************************************!*\
  !*** ./src/js/import/animations/_about-page.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_functions */ "./src/js/import/_functions.js");




gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);

(0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.ap-activity__intro-title', 'at');
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.ap-activity__intro-text', 'as');
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.ap-achivments__intro-title', 'pt');
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.ap-automation__intro-text', 'vt');
var initMode;
var addTime = 1750;
var lightHead = true,
    lastProgress,
    targetProgress;
var st1, st2;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl2 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl3 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var resizeFunction;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
  resizeFunction();
});

function initAnimation() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.about-page').addClass('active');

  if (window.innerWidth > 999) {
    initScrollAnimationDesktop();
    initMode = 'desk';
  } else if (window.innerWidth > 699) {
    initScrollAnimationTablet();
    initMode = 'tablet';
  } else {
    initScrollAnimationTablet();
    initMode = 'mobile';
  }
}

initAnimation();
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    if (typeof st1 !== "undefined") st1.kill();
    if (typeof st2 !== "undefined") st2.kill();
    tl1.clear();
    tl2.clear();
    tl3.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".at1, .at2, .at3, .at4, .ap-activity__intro-text, .as1, .as2, .as3, .as4, .ap-activity-item," + ".ap-activity-item__img, .ap-activity-item__img img, .ap-activity-item__text, .ap-activity-item__content," + ".ap-activity, .ap-green-logo, .ap-green-logo__img, .ap-green-logo__title, .ap-l1, .ap-l2, .ap-l3, .ap-l4," + ".ap-achivments, .pt1, .pt2, .pt3, .pt4, .ap-achivments-item, .ap-achivments-item .ap-achivments-item__img, " + ".ap-achivments-item .ap-achivments-item__img img, .ap-achivments-item .ap-achivments-item__content," + ".ap-automation, .vt1, .vt2, .vt3, .vt4, .ap-automation__content, .about-page, .ap-automation__intro", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title, .ap-activity__intro-text, .ap-achivments__intro-title, .ap-automation__intro-text').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  resizeFunction = function resizeFunction() {};

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  tl1.to(".at1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl1.to(".at2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".at3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".at4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl1.from(".ap-activity__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl1.to(".as1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl1.to(".as2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".as3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".as4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-text').addClass('active');
    }
  }, ">-0.3");
  tl1.from('.ap-activity-item', {
    top: "100%",
    duration: 3,
    ease: "power1.out"
  }, ">-0.5");
  tl1.to('.ap-activity-item__img', {
    x: 0,
    y: 0,
    duration: 5,
    ease: "power1.out"
  }, ">-2");
  tl1.from('.ap-activity-item__img img', {
    width: "200%",
    height: "200%",
    duration: 5,
    ease: "power1.out"
  }, "<");
  tl1.to('.ap-activity-item__text', {
    y: 0,
    duration: 4,
    ease: "power1.out"
  }, ">-3");
  tl1.to('.ap-activity-item__content', {
    top: "-100%",
    duration: 3,
    ease: "none"
  }, ">");
  tl1.to('.ap-activity-item__img', {
    top: "-100%",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.set('.ap-activity', {
    autoAlpha: 100,
    onComplete: function onComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    }
  }, ">");
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
    ease: "none"
  });
  tl1.to(".ap-green-logo__logo", {
    width: 0,
    margin: 0,
    autoAlpha: 0,
    duration: 2,
    ease: "power1.out"
  }, ">");
  tl1.to(".ap-green-logo__title", {
    width: "91.66vw",
    ease: "power1.out",
    duration: 3.5
  }, "<");
  tl1.to(".ap-l1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">0.2");
  tl1.to(".ap-l2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".ap-l3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".ap-l4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".ap-green-logo", {
    backgroundColor: '#FFFFFF',
    duration: 2,
    ease: "none"
  }, ">-0.5");
  tl1.set('.ap-green-logo', {
    autoAlpha: 100,
    onComplete: function onComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
    }
  }, ">");
  tl1.from(".ap-achivments", {
    top: "100vh",
    duration: 2,
    ease: "none"
  }, ">-1");
  tl1.to(".pt1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1.5");
  tl1.to(".pt2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".pt3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-achivments__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".pt4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-achivments__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl1.fromTo(".ap-achivments-item--1", {
    left: "100vw",
    top: "100vh"
  }, {
    left: "0vw",
    top: "0vw",
    duration: 2.5,
    ease: "none"
  }, ">");
  tl1.from(".ap-achivments-item--1 .ap-achivments-item__img img", {
    width: '200%',
    height: '200%',
    duration: 2.5,
    ease: "none"
  }, "<");
  tl1.from(".ap-achivments-item--1 .ap-achivments-item__content", {
    x: "100%",
    ease: "none",
    duration: 2
  }, ">-2");
  tl1.fromTo(".ap-achivments-item--1", {
    left: 0,
    top: 0
  }, {
    motionPath: {
      path: [{
        left: '-50vw',
        top: '-30vh'
      }, {
        left: '-60vw',
        top: '-50vh'
      }, {
        left: '-70vw',
        top: '-100vh'
      }],
      curviness: 1
    },
    duration: 3,
    ease: "none"
  }, ">1");
  tl1.fromTo(".ap-achivments-item--2", {
    left: "100vw",
    top: "100vh"
  }, {
    left: "0vw",
    top: "0vw",
    duration: 2.5,
    ease: "none"
  }, ">-3");
  tl1.from(".ap-achivments-item--2 .ap-achivments-item__img img", {
    width: '200%',
    height: '200%',
    duration: 2.5,
    ease: "none"
  }, "<");
  tl1.from(".ap-achivments-item--2 .ap-achivments-item__content", {
    x: "100%",
    ease: "none",
    duration: 2
  }, ">-2");
  tl1.to(".ap-achivments-item--2 .ap-achivments-item__img ", {
    left: "-100%",
    ease: "none",
    duration: 3
  }, ">1");
  tl1.fromTo(".ap-achivments-item--2 .ap-achivments-item__content", {
    left: "75.625vw"
  }, {
    left: "10.625vw",
    duration: 3,
    ease: "none"
  }, "<");
  tl1.from(".ap-achivments-item--3", {
    left: "100vw",
    ease: "none",
    duration: 2.5
  }, ">-2.5");
  tl1.from(".ap-achivments-item--3 .ap-achivments-item__img", {
    y: "-100%",
    ease: "none",
    duration: 2.5
  }, "<");
  tl1.from(".ap-achivments-item--3 .ap-achivments-item__img img", {
    width: '200%',
    height: '200%',
    duration: 2.5,
    ease: "none"
  }, "<");
  tl1.from(".ap-achivments-item--3 .ap-achivments-item__content", {
    y: "100%",
    ease: "none",
    duration: 2.5
  }, "<");
  tl1.to(".ap-achivments-item--2", {
    y: "-100%",
    ease: "none",
    duration: 3.5
  }, ">1");
  tl1.to(".ap-achivments-item--3", {
    y: "-100%",
    ease: "none",
    duration: 3.5
  }, "<");
  tl1.from(".ap-automation", {
    top: "100vh",
    duration: 2.5,
    ease: "none"
  }, ">-2.5");
  tl1.to(".vt1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1.5");
  tl1.to(".vt2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".vt3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-automation__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".vt4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-automation__intro-text').addClass('active');
    }
  }, ">-0.3");
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
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".about-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1.5,
    animation: tl1
  });
}

function initScrollAnimationTablet() {
  resizeFunction = function resizeFunction() {
    var listElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity-item__img img, .ap-achivments-item__img img');
    var windowHalf = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.5;
    var viewportBottom = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
    var viewportCenter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.35;
    listElems.each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var elementTop = elem.offset().top;

      if (elementTop <= viewportBottom && elementTop >= viewportCenter) {
        var procent = (elementTop - viewportCenter) / windowHalf;
        var size = procent * 100 + 100;
        elem.css({
          'width': size + '%',
          'height': size + '%'
        });
      }
    });
    var greenBlockTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-green-logo').offset().top;
    var greenBlockTop2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-green-logo').innerHeight();

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= greenBlockTop && !lightHead && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() <= greenBlockTop + greenBlockTop2 && !lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    } else if (greenBlockTop >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && greenBlockTop <= viewportBottom && lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= greenBlockTop + greenBlockTop2 && lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    }
  };

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  tl1.to(".at1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, 0);
  tl1.to(".at2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".at3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".at4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl1.from(".ap-activity__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl1.to(".as1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl1.to(".as2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".as3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".as4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-text').addClass('active');
    }
  }, ">-0.3");
  tl2.to(".ap-activity", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".ap-activity",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=300%";
    },
    scrub: 1,
    animation: tl1
  });
  tl2.to(".vt1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, 0);
  tl2.to(".vt2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl2.to(".vt3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-automation__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl2.to(".vt4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-automation__intro-text').addClass('active');
    }
  }, ">-0.3");
  tl2.to(".ap-automation__intro", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  st2 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".ap-automation__intro",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=120%";
    },
    scrub: 1,
    animation: tl2
  });
}

/***/ }),

/***/ "./src/js/import/animations/_contacts-page.js":
/*!****************************************************!*\
  !*** ./src/js/import/animations/_contacts-page.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_functions */ "./src/js/import/_functions.js");




gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);

var initMode;
var addTime = 2300;
var lightHead = true,
    lastProgress,
    targetProgress;
var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
  onComplete: function onComplete() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});
var st1, st2, st3, st4;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl2 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl3 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl4 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var resizeFunction;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
  resizeFunction();
});

function initAnimation() {
  if (window.innerWidth > 999) {
    initScrollAnimationDesktop();
    initMode = 'desk';
  } else if (window.innerWidth > 699) {
    initScrollAnimationTablet();
    initMode = 'tablet';
  } else {
    initScrollAnimationMobile();
    initMode = 'mobile';
  }
}

initAnimation();
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  /*if ( (window.innerWidth > 999 && initMode != 'desk') ||
      (window.innerWidth > 699 && window.innerWidth <= 999 && initMode != 'tablet') ||
      (window.innerWidth <= 699 && initMode != 'mobile') ){*/
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    addTime = 2300;
    (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    lightHead = true;
    if (typeof st1 !== "undefined") st1.kill();
    if (typeof st2 !== "undefined") st2.kill();
    if (typeof st3 !== "undefined") st3.kill();
    tl.clear();
    tl1.clear();
    tl2.clear();
    tl3.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".loader__center, .loader__logo, .loader__title, .loader .l1, .loader .l2, .loader .l3, .loader .l4,.loader," + ".s1__title, .s1__left, .s1__text,  .s1__right,  .s1__link, .about, .first, .s2, .s2__img img, .s3, .s3__right, .s3__right img," + ".contacts-page__map" + ".contacts-page", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text, .assorti__intro-title, .partners__intro-text, .partners__intro-title').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  resizeFunction = function resizeFunction() {};

  tl.to(".loader__center", {
    autoAlpha: 1,
    duration: 1.5,
    delay: 1,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    }
  });
  tl.to(".loader__logo", {
    width: 0,
    margin: 0,
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.out"
  }, ">");
  tl.to(".loader__title", {
    width: "74.6875vw",
    ease: "power1.out",
    duration: 1.5
  }, "<");
  tl.to(".loader .l1", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">0.2");
  tl.to(".loader .l2", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l3", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l4", {
    autoAlpha: 0,
    duration: 0.3,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none",
    onStart: function onStart() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    }
  }, ">0.2");
  tl1.to(".c1__title", {
    top: "32vh",
    opacity: 1,
    delay: 4,
    duration: 3
  }, ">");
  tl1.to(".c1__contacts", {
    top: "50vh",
    opacity: 1,
    duration: 2,
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  }, ">-1");
  tl2.to(".first", {
    left: '-100vw',
    top: '-100vh',
    ease: "none",
    duration: 0.12
  }, ">-1");
  tl2.to(".contacts-page__map ", {
    motionPath: {
      path: [{
        left: '82vw',
        top: '80vh'
      }, {
        left: '00vw',
        top: '5vh'
      }],
      curviness: 1 //type: "cubic"

    },
    duration: 0.16,
    ease: "none"
  }, "<-0.1"), tl2.to(".contacts-page__map ", {
    motionPath: {
      path: [{
        left: '0vw',
        top: '5vh'
      }, {
        left: '-100vw',
        top: '5vh'
      }],
      curviness: 1 //type: "cubic"

    },
    duration: 0.1,
    delay: 0.005,
    ease: "none"
  }, ">"), tl2.to(".contacts-page__walk", {
    motionPath: {
      path: [{
        left: '100vw',
        top: '100vh'
      }, {
        left: '75vw',
        top: '90vh'
      }, {
        left: '50vw',
        top: '40vh'
      }],
      curviness: 1 //type: "cubic"

    },
    duration: 0.1,
    ease: "none"
  }, ">-0.1"), tl2.to(".contacts-page__walk", {
    motionPath: {
      path: [{
        left: '50vw',
        top: '40vh'
      }, {
        left: '-100vw',
        top: '40vh'
      }],
      curviness: 1 //type: "cubic"

    },
    delay: 0.005,
    duration: 0.1,
    ease: "none"
  }, ">"), tl2.to(".contacts-page__startWalk", {
    left: 0,
    top: 0,
    duration: 0.1,
    ease: "none"
  }, ">-0.1"), tl2.to(".contacts-page__startWalk", {
    duration: 0.01,
    delay: 0.005,
    ease: "none"
  }, ">"), st2 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".contacts-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1.5,
    animation: tl2
  });
}

function initScrollAnimationTablet() {
  resizeFunction = function resizeFunction() {};

  tl.to(".loader__center", {
    autoAlpha: 1,
    duration: 1.5,
    delay: 1,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    }
  });
  tl.to(".loader__logo", {
    width: 0,
    margin: 0,
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.out"
  }, ">");
  tl.to(".loader__title", {
    width: "74.6875vw",
    ease: "power1.out",
    duration: 1.5
  }, "<");
  tl.to(".loader .l1", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">0.2");
  tl.to(".loader .l2", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l3", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l4", {
    autoAlpha: 0,
    duration: 0.3,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none",
    onStart: function onStart() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    }
  }, ">0.2");
  tl1.to(".c1__title", {
    top: "32vh",
    opacity: 1,
    delay: 4,
    duration: 3
  }, ">");
  tl1.to(".c1__contacts", {
    top: "50vh",
    opacity: 1,
    duration: 2,
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  }, ">-1");
  tl2.to(".first", {
    left: '-100vw',
    top: '-100vh',
    ease: "none",
    duration: 0.12
  }, ">-1");
  tl2.to(".contacts-page__map ", {
    motionPath: {
      path: [{
        left: '82vw',
        top: '80vh'
      }, {
        left: '00vw',
        top: '5vh'
      }],
      curviness: 1 //type: "cubic"

    },
    duration: 0.16,
    ease: "none"
  }, "<-0.1"), tl2.to(".contacts-page__map ", {
    motionPath: {
      path: [{
        left: '0vw',
        top: '5vh'
      }, {
        left: '-100vw',
        top: '5vh'
      }],
      curviness: 1 //type: "cubic"

    },
    duration: 0.1,
    delay: 0.005,
    ease: "none"
  }, ">"), tl2.to(".contacts-page__walk", {
    motionPath: {
      path: [{
        left: '100vw',
        top: '100vh'
      }, {
        left: '75vw',
        top: '90vh'
      }, {
        left: '50vw',
        top: '40vh'
      }],
      curviness: 1 //type: "cubic"

    },
    duration: 0.1,
    ease: "none"
  }, ">-0.1"), tl2.to(".contacts-page__walk", {
    motionPath: {
      path: [{
        left: '50vw',
        top: '40vh'
      }, {
        left: '-100vw',
        top: '40vh'
      }],
      curviness: 1 //type: "cubic"

    },
    delay: 0.005,
    duration: 0.1,
    ease: "none"
  }, ">"), tl2.to(".contacts-page__startWalk", {
    left: 0,
    top: 0,
    duration: 0.1,
    ease: "none"
  }, ">-0.1"), tl2.to(".contacts-page__startWalk", {
    duration: 0.01,
    delay: 0.005,
    ease: "none"
  }, ">"), st2 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".contacts-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1.5,
    animation: tl2
  });
}

function initScrollAnimationMobile() {
  resizeFunction = function resizeFunction() {};

  tl.to(".loader__center", {
    autoAlpha: 1,
    duration: 1.5,
    delay: 1,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    }
  });
  tl.to(".loader__logo", {
    width: 0,
    margin: 0,
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.out"
  }, ">");
  tl.to(".loader__title", {
    width: "74.6875vw",
    ease: "power1.out",
    duration: 1.5
  }, "<");
  tl.to(".loader .l1", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">0.2");
  tl.to(".loader .l2", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l3", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l4", {
    autoAlpha: 0,
    duration: 0.3,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none",
    onStart: function onStart() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    }
  }, ">0.2");
  tl1.to(".c1__title", {
    top: "120px",
    opacity: 1,
    delay: 4,
    duration: 3
  }, ">");
  tl1.to(".c1__contacts", {
    top: "219px",
    opacity: 1,
    duration: 2,
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  }, ">-1");
} // function initScrollAnimationTablet(){
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

/***/ }),

/***/ "./src/js/import/animations/_faq.js":
/*!******************************************!*\
  !*** ./src/js/import/animations/_faq.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_functions */ "./src/js/import/_functions.js");



(0,_functions__WEBPACK_IMPORTED_MODULE_1__.splitLetterSpan)('.fp-intro__title', 'at');
var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
  onComplete: function onComplete() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});
initAnimation();

function initAnimation() {
  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.setMaskHeader)(100);
  tl.to(".at1", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, "1");
  tl.to(".at2", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".at3", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".at4", {
    autoAlpha: 0,
    duration: 0.3,
    ease: "none"
  }, ">-0.1");
  tl.to(".fp-intro", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">0.2");
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.fp-tabs__item', function () {
  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('active')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active').siblings().removeClass('active');
    var index = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).index();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fp-sections').eq(index).addClass('active').siblings('.fp-sections').removeClass('active');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.fp-sections__item-title', function () {
  var parent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent();
  parent.toggleClass('active');
  parent.find('.fp-sections__item-text').stop().slideToggle(300);
});

/***/ }),

/***/ "./src/js/import/animations/_grow-page.js":
/*!************************************************!*\
  !*** ./src/js/import/animations/_grow-page.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_functions */ "./src/js/import/_functions.js");




gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);

(0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.gp-how__intro-title', 'at');
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.gp-how__intro-text', 'as');
var initMode;
var addTime = 1300;
var addTimeHow = 200;
var lightHead = true,
    lastProgress,
    targetProgress;
var i = 0;
var howCount = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how-item').length;
var st1, st2;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl2 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl3 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var resizeFunction;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
  resizeFunction();
});

function initAnimation() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.grow-page').addClass('active');

  if (window.innerWidth > 999) {
    initScrollAnimationDesktop();
    initMode = 'desk';
  } else if (window.innerWidth > 699) {
    initScrollAnimationTablet();
    initMode = 'tablet';
  } else {
    initScrollAnimationTablet();
    initMode = 'mobile';
  }
}

initAnimation();
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    if (typeof st1 !== "undefined") st1.kill();
    if (typeof st2 !== "undefined") st2.kill();
    tl1.clear();
    tl2.clear();
    tl3.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".grow-page," + ".gp-video,.at1,.at2,.at3,.at4,.gp-how__intro-text,.as1,.as2,.as3,.as4,.gp-how-item,.gp-how-item__img," + ".gp-how-item__img img,.gp-how-item__text,.gp-how-item__title,.gp-doble,.gp-doble__img img,.gp-poliv," + ".gp-poliv__right,.gp-poliv__right img,.gp-mineral,.gp-mineral__text,.gp-mineral,.gp-mineral__img," + ".gp-mineral__img img,.gp-grunt,.gp-steps,.gp-grunt__first,.gp-grunt__second,.gp-grunt__first," + ".gp-grunt__content,.gp-grunt__content-bottom,.gp-grunt__second,.gp-grun,.gp-step__img,.gp-step__img img," + ".gp-step__text,.gp-step__title,.gp-step", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how__intro-title, .gp-how__intro-text').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  resizeFunction = function resizeFunction() {};

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  tl1.to(".gp-video", {
    top: "-100vw",
    duration: 3,
    ease: "none"
  }, "0");
  tl1.to(".at1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">");
  tl1.to(".at2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".at3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".at4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl1.from(".gp-how__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl1.to(".as1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl1.to(".as2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".as3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".as4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how__intro-text').addClass('active');
    }
  }, ">-0.3");
  i = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how-item').each(function () {
    addTime += addTimeHow;
    var firstDelay = '-3';

    if (i === 0) {
      firstDelay = "-0.5";
    }

    i++;
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var img = elem.find('.gp-how-item__img');
    var img2 = elem.find('.gp-how-item__img img');
    var text = elem.find('.gp-how-item__text');
    var title = elem.find('.gp-how-item__title');
    tl1.from(elem, {
      top: "100%",
      duration: 3,
      ease: "power1.out"
    }, ">" + firstDelay);
    tl1.to(img, {
      x: 0,
      y: 0,
      duration: 5,
      ease: "power1.out"
    }, ">-2");
    tl1.from(img2, {
      width: "200%",
      height: "200%",
      duration: 5,
      ease: "power1.out"
    }, "<");

    if (title.length > 0 && text.length > 0) {
      tl1.from(text, {
        y: '100vh',
        duration: 4,
        ease: "power1.out"
      }, ">-3");
    }

    if (i < howCount) {
      tl1.to(elem, {
        top: "-100%",
        duration: 4,
        ease: "power1.in"
      }, ">0.5");
    } else {
      tl1.to(".gp-how", {
        motionPath: {
          path: [{
            left: '-30vw',
            top: '-10vw'
          }, {
            left: '-40vw',
            top: '-50vw'
          }, {
            left: '-50vw',
            top: '-100vw'
          }],
          curviness: 1 //type: "cubic"

        },
        duration: 3.5,
        ease: "none"
      }, ">0.5");
    }
  });
  tl1.to(".gp-doble", {
    motionPath: {
      path: [{
        left: '40vw',
        top: '100vh'
      }, {
        left: '40vw',
        top: '30vh'
      }, {
        left: '10vw',
        top: '0'
      }, {
        left: '0',
        top: '0'
      }],
      curviness: 1 //type: "cubic"

    },
    duration: 2.3,
    ease: "none"
  }, "<0.1");
  tl1.from(".gp-doble__img img", {
    width: '200%',
    height: '200%',
    duration: 2.3,
    ease: "none"
  }, "<");
  tl1.to(".gp-doble", {
    left: "-100vw",
    duration: 3,
    ease: "none"
  }, ">");
  tl1.fromTo(".gp-poliv", {
    left: "100vw"
  }, {
    left: "0vw",
    duration: 2.5,
    ease: "none"
  }, ">-3");
  tl1.from(".gp-poliv__right", {
    y: '-100%',
    duration: 2.3,
    ease: "none"
  }, "<");
  tl1.from(".gp-poliv__right img", {
    width: '200%',
    height: '200%',
    duration: 2.3,
    ease: "none"
  }, "<");
  tl1.to('.gp-poliv', {
    top: "-100%",
    duration: 4,
    ease: "power1.in"
  }, ">0.5");
  tl1.from('.gp-mineral', {
    top: "100%",
    duration: 3,
    ease: "power1.out"
  }, ">-1.5");
  tl1.from('.gp-mineral__text', {
    y: '100vh',
    duration: 2,
    ease: "power1.out"
  }, ">-3");
  tl1.from('.gp-mineral', {
    left: "-32.5%",
    duration: 2,
    ease: "none"
  }, ">-1");
  tl1.from('.gp-mineral__img', {
    x: '-100vw',
    y: '100vw',
    duration: 5,
    ease: "power1.out"
  }, ">-2");
  tl1.from('.gp-mineral__img img', {
    width: "200%",
    height: "200%",
    duration: 5,
    ease: "power1.out"
  }, "<");
  tl1.to('.gp-mineral', {
    top: "-100%",
    duration: 4,
    ease: "power1.in"
  }, ">0.5");
  tl1.from(".gp-grunt", {
    left: "100%",
    duration: 2,
    ease: "none",
    onComplete: function onComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    },
    onUpdate: function onUpdate() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
      var targetProcent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-grunt').offset().left / jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() * 100;
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(targetProcent);
    }
  }, ">-1.2");
  tl1.fromTo(".gp-steps", {
    autoAlpha: 0
  }, {
    autoAlpha: 1,
    duration: 0,
    ease: "none"
  }, ">");
  tl1.from(".gp-grunt__first", {
    left: "100vw",
    duration: 2.5,
    ease: "none"
  }, ">");
  tl1.from(".gp-grunt__second", {
    left: "100vw",
    top: "100vh",
    duration: 3,
    ease: "none"
  }, ">");
  tl1.addLabel("l1", '<');
  tl1.addLabel("l2", '>');
  tl1.to(".gp-grunt__first", {
    left: "-150vw",
    top: "-100vh",
    duration: 6,
    ease: "none"
  }, ">-1.7");
  tl1.fromTo(".gp-grunt__content", {
    y: "250%"
  }, {
    y: "-150%",
    duration: 6,
    ease: "none"
  }, "l1");
  tl1.fromTo(".gp-grunt__content-bottom", {
    y: "100%"
  }, {
    y: "0",
    duration: 1.3,
    ease: "Sine.easeOut"
  }, "<3");
  tl1.to(".gp-grunt__second", {
    left: "-100vw",
    duration: 4,
    ease: "none"
  }, "l2");
  tl1.to(".gp-grunt", {
    autoAlpha: 0,
    duration: 1.5,
    ease: "none",
    onComplete: function onComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
    }
  }, ">-2");
  i = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-step').each(function () {
    addTime += addTimeHow;
    var firstDelay = '-3';

    if (i === 0) {
      firstDelay = "-0.5";
    }

    i++;
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var img = elem.find('.gp-step__img');
    var img2 = elem.find('.gp-step__img img');
    var text = elem.find('.gp-step__text');
    var title = elem.find('.gp-step__title');
    tl1.from(elem, {
      top: "100%",
      duration: 3,
      ease: "power1.out"
    }, ">" + firstDelay);
    tl1.to(img, {
      x: 0,
      y: 0,
      duration: 5,
      ease: "power1.out"
    }, ">-2");
    tl1.from(img2, {
      width: "200%",
      height: "200%",
      duration: 5,
      ease: "power1.out"
    }, "<");

    if (title.length > 0 && text.length > 0) {
      tl1.from(text, {
        y: '100vh',
        duration: 4,
        ease: "power1.out"
      }, ">-3");
    }

    if (i < howCount) {
      tl1.to(elem, {
        top: "-100%",
        duration: 4,
        ease: "power1.in"
      }, ">0.5");
    }
  });
  tl1.to(".gp-step", {
    autoAlpha: 1,
    duration: 1.7,
    ease: "none"
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".grow-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1.5,
    animation: tl1
  });
}

function initScrollAnimationTablet() {
  resizeFunction = function resizeFunction() {
    var listElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how-item__img img, .gp-doble__img-inner img, .gp-poliv__right img, ' + '.gp-grunt__img img, .gp-step__img img');
    var windowHalf = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.5;
    var viewportBottom = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
    var viewportCenter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.35;
    listElems.each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var elementTop = elem.offset().top;

      if (elementTop <= viewportBottom && elementTop >= viewportCenter) {
        var procent = (elementTop - viewportCenter) / windowHalf;
        var size = procent * 100 + 100;
        elem.css({
          'width': size + '%',
          'height': size + '%'
        });
      }
    });
    var greenBlockTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-grunt').offset().top;
    var greenBlockTop2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-grunt').innerHeight();

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= greenBlockTop && !lightHead && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() <= greenBlockTop + greenBlockTop2 && !lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    } else if (greenBlockTop >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && greenBlockTop <= viewportBottom && lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= greenBlockTop + greenBlockTop2 && lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    }
  };

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  tl1.to(".gp-video", {
    top: "-100vw",
    duration: 3,
    ease: "none"
  }, "0");
  tl1.to(".at1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">");
  tl1.to(".at2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".at3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".at4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl1.from(".gp-how__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl1.to(".as1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl1.to(".as2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".as3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".as4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.gp-how__intro-text').addClass('active');
    }
  }, ">-0.3");
  tl2.to(".gp-how", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".gp-how",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=300%";
    },
    scrub: 1,
    animation: tl1
  });
}

/***/ }),

/***/ "./src/js/import/animations/_home-page.js":
/*!************************************************!*\
  !*** ./src/js/import/animations/_home-page.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_functions */ "./src/js/import/_functions.js");




gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);

(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.assorti__intro-title', 'at');
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.assorti__intro-text', 'as');
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.partners__intro-title', 'pt');
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.partners__intro-text', 'ps');
var initMode;
var addTime = 2300;
var addTimeAssorti = 200;
var addTimePoortfol = 350;
var lightHead = true,
    lastProgress,
    targetProgress;
var i = 0;
var assortiCount = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti-item').length;
var p = 0;
var portfolioCount = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.portfolio-item').length;
var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
  onComplete: function onComplete() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  }
});
var st1, st2, st3, st4;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl2 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl3 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl4 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var resizeFunction;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
  resizeFunction();
});

function initAnimation() {
  if (window.innerWidth > 999) {
    initScrollAnimationDesktop();
    initMode = 'desk';
  } else if (window.innerWidth > 699) {
    initScrollAnimationTablet();
    initMode = 'tablet';
  } else {
    initScrollAnimationMobile();
    initMode = 'mobile';
  }
}

initAnimation();
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  /*if ( (window.innerWidth > 999 && initMode != 'desk') ||
      (window.innerWidth > 699 && window.innerWidth <= 999 && initMode != 'tablet') ||
      (window.innerWidth <= 699 && initMode != 'mobile') ){*/
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    addTime = 2300;
    (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
    lightHead = true;
    if (typeof st1 !== "undefined") st1.kill();
    if (typeof st2 !== "undefined") st2.kill();
    if (typeof st3 !== "undefined") st3.kill();
    tl.clear();
    tl1.clear();
    tl2.clear();
    tl3.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".loader__center, .loader__logo, .loader__title, .loader .l1, .loader .l2, .loader .l3, .loader .l4,.loader," + ".s1__title, .s1__left, .s1__text,  .s1__right,  .s1__link, .about, .first, .s2, .s2__img img, .s3, .s3__right, .s3__right img," + ".s4, .second, .assorti, .at1, .at2, .at3, .at4, .assorti__intro-text, .as1, .as2, .as3, .as4, .assorti-item, .assorti-item__img," + ".assorti-item__img img, .assorti-item__text, .portfolio, .portfolio__anotation, .portfolio-item, .portfolio-item__first," + ".portfolio-item__first-img img, .portfolio-item__first-content, .portfolio-item__second, .portfolio-item__second img," + ".portfolio-item__second-content, .partners, .pt1, .pt2, .pt3, .pt4, .partners__intro-text, .ps1, .ps2, .ps3, .ps4," + ".partners__items, .connect, .connect__first, .connect__second, .connect__content, .connect__content-blocks, .connect__link a," + ".home-page", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text, .assorti__intro-title, .partners__intro-text, .partners__intro-title').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  resizeFunction = function resizeFunction() {};

  tl.to(".loader__center", {
    autoAlpha: 1,
    duration: 1.5,
    delay: 1,
    ease: "none"
  });
  tl.to(".loader__logo", {
    width: 0,
    margin: 0,
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.out"
  }, ">");
  tl.to(".loader__title", {
    width: "74.6875vw",
    ease: "power1.out",
    duration: 1.5
  }, "<");
  tl.to(".loader .l1", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">0.2");
  tl.to(".loader .l2", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l3", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l4", {
    autoAlpha: 0,
    duration: 0.3,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">0.2");
  tl1.to(".s1__title", {
    z: 1500,
    duration: 1,
    ease: "none"
  });
  tl1.set(".s1__title", {
    opacity: 0
  }, ">-0.7");
  tl1.to(".s1__left", {
    z: 1500,
    duration: 2,
    ease: "none"
  }, 0);
  tl1.set(".s1__left", {
    opacity: 0
  }, ">-0.7");
  tl1.to(".s1__text", {
    autoAlpha: 1,
    duration: 0.4,
    ease: "none"
  }, ">0.3");
  tl1.to(".s1__text", {
    duration: 2,
    z: 100,
    ease: "none"
  }, "<");
  tl1.to(".s1__text", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.4");
  tl1.to(".s1__right", {
    width: "100vw",
    height: "100vh",
    left: "43.125vw",
    duration: 4,
    ease: "none"
  }, 0);
  tl1.to(".s1__right", {
    left: 0,
    duration: 2
  }, ">");
  tl1.to(".s1__link", {
    autoAlpha: 1,
    duration: 0.5
  }, ">-0.4");
  tl1.set(".home-page", {
    backgroundColor: '#FDFDFD'
  }, ">");
  tl1.to(".s1__link", {
    autoAlpha: 0,
    duration: 0.5
  }, ">1");
  tl1.to(".s1__right", {
    width: "62.5vw",
    height: "62vh",
    left: "2.5vw",
    duration: 2,
    ease: "none",
    onStart: function onStart() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    }
  }, ">-0.3");
  tl1.to(".about", {
    left: "67.5vw",
    duration: 2,
    ease: "none"
  }, "<");
  tl1.to(".first", {
    motionPath: {
      path: [{
        left: '-50vw',
        top: '-10vw'
      }, {
        left: '-60vw',
        top: '-50vw'
      }, {
        left: '-70vw',
        top: '-100vw'
      }],
      curviness: 1 //type: "cubic"

    },
    duration: 3.5,
    ease: "none"
  }, ">");
  tl1.to(".s2", {
    motionPath: {
      path: [{
        left: '40vw',
        top: '100vh'
      }, {
        left: '40vw',
        top: '30vh'
      }, {
        left: '10vw',
        top: '0'
      }, {
        left: '0',
        top: '0'
      }],
      curviness: 1 //type: "cubic"

    },
    duration: 2.3,
    ease: "none"
  }, "<0.1");
  tl1.from(".s2__img img", {
    width: '200%',
    height: '200%',
    duration: 2.3,
    ease: "none"
  }, "<");
  tl1.to(".s2", {
    left: "-100vw",
    duration: 3,
    ease: "none"
  }, ">");
  tl1.fromTo(".s3", {
    left: "100vw"
  }, {
    left: "0vw",
    duration: 2.5,
    ease: "none"
  }, ">-3");
  tl1.from(".s3__right", {
    y: '-100%',
    duration: 2.3,
    ease: "none"
  }, "<");
  tl1.from(".s3__right img", {
    width: '200%',
    height: '200%',
    duration: 2.3,
    ease: "none"
  }, "<");
  tl1.fromTo(".s3", {
    left: 0,
    top: 0
  }, {
    motionPath: {
      path: [{
        left: '-10vw',
        top: '0vh'
      }, {
        left: '-20vw',
        top: '-50vh'
      }, {
        left: '-30vw',
        top: '-100vh'
      }],
      curviness: 1
    },
    duration: 3,
    ease: "none"
  }, ">0.5");
  tl1.to(".s3__right", {
    y: '-50%',
    duration: 1.5,
    ease: "none"
  }, "<");
  tl1.to(".s4", {
    top: 0,
    left: 0,
    duration: 3,
    ease: "none",
    onComplete: function onComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
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
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    },
    onUpdate: function onUpdate() {
      if (lastProgress < this.progress()) {
        if (this.progress() > targetProgress && lightHead) {
          (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
          lightHead = false;
        }
      } else {
        if (this.progress() < targetProgress && !lightHead) {
          (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
          lightHead = true;
        }
      }

      lastProgress = this.progress();
    }
  }, ">1");
  tl1.to(".assorti", {
    top: "0vh",
    duration: 0,
    ease: "none"
  }, "<");
  tl1.to(".at1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">4");
  tl1.to(".at2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".at3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".at4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl1.from(".assorti__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl1.to(".as1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl1.to(".as2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".as3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".as4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text').addClass('active');
    }
  }, ">-0.3");
  i = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti-item').each(function () {
    addTime += addTimeAssorti;
    var firstDelay = '-3';

    if (i === 0) {
      firstDelay = "-0.5";
    }

    i++;
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var img = elem.find('.assorti-item__img');
    var img2 = elem.find('.assorti-item__img img');
    var text = elem.find('.assorti-item__text');
    tl1.from(elem, {
      top: "100%",
      duration: 3,
      ease: "power1.out"
    }, ">" + firstDelay);
    tl1.to(img, {
      x: 0,
      y: 0,
      duration: 5,
      ease: "power1.out"
    }, ">-2");
    tl1.from(img2, {
      width: "200%",
      height: "200%",
      duration: 5,
      ease: "power1.out"
    }, "<");
    tl1.to(text, {
      y: 0,
      duration: 4,
      ease: "power1.out"
    }, ">-3");

    if (i < assortiCount) {
      tl1.to(elem, {
        top: "-100%",
        duration: 4,
        ease: "power1.in"
      }, ">0.5");
    } else {
      tl1.to('.assorti', {
        left: "-100%",
        duration: 4,
        ease: "power1.in"
      }, ">0.5");
    }
  });
  tl1.from('.portfolio', {
    left: "100%",
    duration: 3,
    ease: "none"
  }, ">-2");
  tl1.to('.portfolio__anotation', {
    left: "-100%",
    duration: 2,
    ease: "none"
  }, ">2");
  p = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.portfolio-item').each(function () {
    addTime += addTimePoortfol;
    var firstDelay = '-4.5';

    if (p === 0) {
      firstDelay = "-2";
    }

    p++;
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var first = elem.find('.portfolio-item__first');
    var img1 = elem.find('.portfolio-item__first-img img');
    var title = elem.find('.portfolio-item__first-content');
    var second = elem.find('.portfolio-item__second');
    var img = elem.find('.portfolio-item__second img');
    var block = elem.find('.portfolio-item__second-content');
    tl1.from(elem, {
      left: "100%",
      duration: 3,
      ease: "none"
    }, ">" + firstDelay);
    tl1.from(img1, {
      width: "200%",
      height: "200%",
      duration: 3,
      ease: "none"
    }, "<");
    tl1.from(title, {
      x: "100%",
      duration: 2,
      ease: "none"
    }, ">-2");
    tl1.to(first, {
      left: "-150%",
      top: "100%",
      duration: 5,
      ease: "Sine.easeIn"
    }, ">");
    tl1.to(second, {
      left: "30%",
      top: "0",
      duration: 3,
      ease: "none"
    }, "<0.5");
    tl1.from(img, {
      width: "200%",
      height: "200%",
      duration: 3,
      ease: "none"
    }, "<");
    tl1.to(second, {
      left: "0",
      duration: 1.8,
      ease: "none"
    }, ">");
    tl1.from(block, {
      y: "-100%",
      duration: 3,
      ease: "none"
    }, ">-4");

    if (p < portfolioCount) {
      tl1.to(elem, {
        left: "-100%",
        duration: 6,
        ease: "none"
      }, ">");
    } else {
      tl1.to('.portfolio', {
        top: "-100%",
        duration: 3,
        ease: "none"
      }, ">");
    }
  });
  tl1.from(".partners", {
    top: "100vh",
    duration: 2,
    ease: "none"
  }, ">-2.5");
  tl1.to(".pt1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">2.5");
  tl1.to(".pt2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".pt3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".pt4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl1.from(".partners__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl1.to(".ps1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl1.to(".ps2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".ps3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".ps4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-text').addClass('active');
    }
  }, ">-0.3");
  tl1.to(".partners__items", {
    autoAlpha: 1,
    duration: 1,
    ease: "none"
  }, ">");
  tl1.from(".connect", {
    left: "100%",
    duration: 2,
    ease: "none",
    onComplete: function onComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    },
    onUpdate: function onUpdate() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
      var targetProcent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.connect').offset().left / jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() * 100;
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(targetProcent);
    }
  }, ">1");
  tl1.from(".connect__first", {
    left: "100vw",
    duration: 2.5,
    ease: "none"
  }, ">");
  tl1.from(".connect__second", {
    left: "100vw",
    top: "100vh",
    duration: 3,
    ease: "none"
  }, ">");
  tl1.addLabel("l1", '<');
  tl1.addLabel("l2", '>');
  tl1.to(".connect__first", {
    left: "-150vw",
    top: "-100vh",
    duration: 6,
    ease: "none"
  }, ">-1.7");
  tl1.fromTo(".connect__content", {
    y: "250%"
  }, {
    y: "-150%",
    duration: 6,
    ease: "none"
  }, "l1");
  tl1.fromTo(".connect__content-blocks", {
    y: "100%"
  }, {
    y: "0",
    duration: 1.3,
    ease: "Sine.easeOut"
  }, "<3");
  tl1.to(".connect__second", {
    left: "-100vw",
    duration: 4,
    ease: "none"
  }, "l2");
  tl1.to(".connect", {
    backgroundColor: '#1E713F',
    duration: 1.5,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.connect__link').addClass('active');
    }
  }, ">-2");
  tl1.to(".connect__link a", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.connect__link').removeClass('active');
    }
  }, ">");
  tl1.to(".connect__link a", {
    autoAlpha: 1,
    duration: 1.7,
    ease: "none"
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".home-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1.5,
    animation: tl1
  });
}

function initScrollAnimationTablet() {
  tl.to(".loader__center", {
    autoAlpha: 1,
    duration: 1.5,
    delay: 1,
    ease: "none"
  });
  tl.to(".loader__logo", {
    width: 0,
    margin: 0,
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.out"
  }, ">");
  tl.to(".loader__title", {
    width: "91.66vw",
    ease: "power1.out",
    duration: 1.5
  }, "<");
  tl.to(".loader .l1", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">0.2");
  tl.to(".loader .l2", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l3", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l4", {
    autoAlpha: 0,
    duration: 0.3,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">0.2");
  tl1.to(".s1__title", {
    z: 1500,
    duration: 1,
    ease: "none"
  });
  tl1.set(".s1__title", {
    opacity: 0
  }, ">-0.7");
  tl1.to(".s1__left", {
    z: 1500,
    duration: 2,
    ease: "none"
  }, 0);
  tl1.set(".s1__left", {
    opacity: 0
  }, ">-0.7");
  tl1.to(".s1__text", {
    autoAlpha: 1,
    duration: 0.4,
    ease: "none"
  }, ">0.3");
  tl1.to(".s1__text", {
    duration: 2,
    z: 100,
    ease: "none"
  }, "<");
  tl1.to(".s1__text", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.4");
  tl1.to(".s1__right", {
    width: "100vw",
    height: "100vh",
    left: "52.08vw",
    duration: 4,
    ease: "none"
  }, 0);
  tl1.to(".s1__right", {
    left: 0,
    duration: 2,
    onComplete: function onComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    }
  }, ">");
  tl1.to(".s1__link", {
    autoAlpha: 1,
    duration: 0.5
  }, ">-0.4");
  tl1.to(".s1__right-inner video", {
    autoAlpha: 1,
    duration: 0.5,
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    }
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".s1__container",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=300%";
    },
    scrub: 1,
    animation: tl1
  });
  tl2.to(".at1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, 0);
  tl2.to(".at2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl2.to(".at3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl2.to(".at4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl2.from(".assorti__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl2.to(".as1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl2.to(".as2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl2.to(".as3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl2.to(".as4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text').addClass('active');
    }
  }, ">-0.3");
  tl2.to(".assorti__intro", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  st2 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".assorti__intro",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=300%";
    },
    scrub: 1,
    animation: tl2
  });
  tl4.to(".st1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, 0);
  tl4.to(".st2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl4.to(".st3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl4.to(".st4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl4.to(".portfolio__anotation", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  st4 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".portfolio__anotation",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=100%";
    },
    scrub: 1,
    animation: tl4
  });
  tl3.to(".pt1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').removeClass('active');
    }
  }, 0);
  tl3.to(".pt2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl3.to(".pt3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl3.to(".pt4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl3.from(".partners__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl3.to(".ps1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl3.to(".ps2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl3.to(".ps3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl3.to(".ps4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-text').addClass('active');
    }
  }, ">-0.3");
  tl3.to(".partners__intro", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  st3 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".partners__intro",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=300%";
    },
    scrub: 1,
    animation: tl3
  });

  resizeFunction = function resizeFunction() {
    var listElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.s2__img img, .s3__right img, .assorti-item__img img, ' + '.portfolio-item__first-img img, .portfolio-item__second-img img');
    var windowHalf = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.5;
    var viewportBottom = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
    var viewportCenter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.35;
    listElems.each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var elementTop = elem.offset().top;

      if (elementTop <= viewportBottom && elementTop >= viewportCenter) {
        var procent = (elementTop - viewportCenter) / windowHalf;
        var size = procent * 100 + 100;
        elem.css({
          'width': size + '%',
          'height': size + '%'
        });
      }
    });
    var lastBlockTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.connect').offset().top;

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= lastBlockTop && !lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    } else if (lastBlockTop >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && lastBlockTop <= viewportBottom && lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    }
  };
}

function initScrollAnimationMobile() {
  tl.to(".loader__center", {
    autoAlpha: 1,
    duration: 1.5,
    delay: 1,
    ease: "none"
  });
  tl.to(".loader__logo", {
    width: 0,
    margin: 0,
    autoAlpha: 0,
    duration: 0.5,
    ease: "power1.out"
  }, ">");
  tl.to(".loader__title", {
    width: "95.55vw",
    ease: "power1.out",
    duration: 1.5
  }, "<");
  tl.to(".loader .l1", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">0.2");
  tl.to(".loader .l2", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l3", {
    autoAlpha: 0,
    duration: 0.4,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader .l4", {
    autoAlpha: 0,
    duration: 0.3,
    ease: "none"
  }, ">-0.1");
  tl.to(".loader", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "none"
  }, ">0.2");
  tl2.to(".at1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, 0);
  tl2.to(".at2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl2.to(".at3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl2.to(".at4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl2.from(".assorti__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl2.to(".as1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl2.to(".as2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl2.to(".as3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl2.to(".as4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text').addClass('active');
    }
  }, ">-0.3");
  tl2.to(".assorti__intro", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  st2 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".assorti__intro",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=300%";
    },
    scrub: 1,
    animation: tl2
  });
  tl4.to(".st1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, 0);
  tl4.to(".st2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl4.to(".st3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl4.to(".st4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl4.to(".portfolio__anotation", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  st4 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".portfolio__anotation",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=100%";
    },
    scrub: 1,
    animation: tl4
  });
  tl3.to(".pt1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').removeClass('active');
    }
  }, 0);
  tl3.to(".pt2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl3.to(".pt3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').removeClass('active');
    }
  }, ">-0.3");
  tl3.to(".pt4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').addClass('active');
    }
  }, ">-0.3");
  tl3.from(".partners__intro-text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl3.to(".ps1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl3.to(".ps2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl3.to(".ps3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-text').removeClass('active');
    }
  }, ">-0.3");
  tl3.to(".ps4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-text').addClass('active');
    }
  }, ">-0.3");
  tl3.to(".partners__intro", {
    autoAlpha: 1,
    duration: 0.5,
    ease: "none"
  }, ">");
  st3 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".partners__intro",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=300%";
    },
    scrub: 1,
    animation: tl3
  });

  resizeFunction = function resizeFunction() {
    var listElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.s2__img img, .s3__right img, .assorti-item__img img, ' + '.portfolio-item__first-img img, .portfolio-item__second-img img');
    var windowHalf = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.5;
    var viewportBottom = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
    var viewportCenter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.35;
    listElems.each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var elementTop = elem.offset().top;

      if (elementTop <= viewportBottom && elementTop >= viewportCenter) {
        var procent = (elementTop - viewportCenter) / windowHalf;
        var size = procent * 100 + 100;
        elem.css({
          'width': size + '%',
          'height': size + '%'
        });
      }
    });
    var lastBlockTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.connect').offset().top;
    var firstBlockTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.about').offset().top;

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= lastBlockTop && !lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    } else if (lastBlockTop >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && lastBlockTop <= viewportBottom && lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    }

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= firstBlockTop && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() < lastBlockTop && lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
      lightHead = false;
    } else if (firstBlockTop >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && firstBlockTop <= viewportBottom && !lightHead) {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
      lightHead = true;
    }
  };
}

/***/ }),

/***/ "./src/js/import/animations/_portfolio.js":
/*!************************************************!*\
  !*** ./src/js/import/animations/_portfolio.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_functions */ "./src/js/import/_functions.js");



gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);

var st1;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var initMode;
var addTime = 300;
var addTimeItem = 120;
var resizeFunction;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
  resizeFunction();
});
initAnimation();

function initAnimation() {
  (0,_functions__WEBPACK_IMPORTED_MODULE_3__.setMaskHeader)(0);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');

  if (window.innerWidth > 999) {
    initScrollAnimationDesktop();
    initMode = 'desk';
  } else if (window.innerWidth > 699) {
    initScrollAnimationTablet();
    initMode = 'tablet';
  } else {
    initScrollAnimationTablet();
    initMode = 'mobile';
  }
}

var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_3__.setMaskHeader)(100);
    if (typeof st1 !== "undefined") st1.kill();
    tl1.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".portfolio-page__top," + ".portfolio-page__title,.portfolio-page__start,.portfolio-page__item,.portfolio-page__content," + ".portfolio-page__img", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  resizeFunction = function resizeFunction() {};

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  tl1.to(".portfolio-page__title", {
    z: 1500,
    duration: 1,
    ease: "none"
  }, 0);
  tl1.set(".portfolio-page__title", {
    opacity: 0
  }, ">-0.7");
  tl1.to(".portfolio-page__start", {
    z: 1500,
    duration: 2,
    ease: "none"
  }, 0);
  tl1.set(".portfolio-page__start", {
    opacity: 0
  }, ">-0.7");
  var i = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.portfolio-page__item').each(function () {
    addTime += addTimeItem;
    var firstDelay = '>';

    if (i === 0) {
      firstDelay = 0;
    }

    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var text = elem.find('.portfolio-page__content');
    var img = elem.find('.portfolio-page__img');

    if (i !== 0) {
      tl1.from(img, {
        autoAlpha: "0",
        width: "10vw",
        height: "6.2vw",
        duration: 2,
        ease: "none"
      }, '>');
    }

    if (i % 2 === 0) {
      tl1.to(img, {
        width: "110vw",
        height: "110vh",
        left: "42.9vw",
        duration: 4,
        ease: "none"
      }, firstDelay);
    } else {
      tl1.to(img, {
        width: "110vw",
        height: "110vh",
        right: "42.9vw",
        duration: 4,
        ease: "none"
      }, firstDelay);
    }

    tl1.from(text, {
      autoAlpha: 0,
      duration: 1.5,
      ease: "none"
    }, '<0.5');
    i++;

    if (i !== jquery__WEBPACK_IMPORTED_MODULE_0___default()('.portfolio-page__item').length) {
      tl1.to(img, {
        autoAlpha: 0,
        duration: 1
      }, ">2");
      tl1.to(text, {
        autoAlpha: 0,
        duration: 1,
        ease: "none"
      }, '<');
    }
  });
  tl1.to(".portfolio-page__last", {
    autoAlpha: 1,
    duration: 2,
    ease: "none"
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".portfolio-page__top",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1.5,
    animation: tl1
  });
}

function initScrollAnimationTablet() {
  resizeFunction = function resizeFunction() {
    var listElems = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.portfolio-page__start-inner img, .portfolio-page__img-inner img');
    var windowHalf = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.5;
    var viewportBottom = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
    var viewportCenter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height() * 0.35;
    listElems.each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var elementTop = elem.offset().top;

      if (elementTop <= viewportBottom && elementTop >= viewportCenter) {
        var procent = (elementTop - viewportCenter) / windowHalf;
        var size = procent * 100 + 100;
        elem.css({
          'width': size + '%',
          'height': size + '%'
        });
      }
    });
  };

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
}

/***/ }),

/***/ "./src/js/import/animations/_project.js":
/*!**********************************************!*\
  !*** ./src/js/import/animations/_project.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_functions */ "./src/js/import/_functions.js");



gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);


(0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.pp-intro__title', 'at');
(0,_functions__WEBPACK_IMPORTED_MODULE_4__.splitLetterSpan)('.pp-intro__text', 'as');
var initMode;
var addTime = 200;
var lightHead = true,
    lastProgress,
    targetProgress;
var st1, st2;
var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl2 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var tl3 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
var resizeFunction;
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
  resizeFunction();
});

function initAnimation() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.project-page').addClass('active');

  if (window.innerWidth > 999) {
    initScrollAnimationDesktop();
    initMode = 'desk';
  } else if (window.innerWidth > 699) {
    initScrollAnimationTablet();
    initMode = 'tablet';
  } else {
    initScrollAnimationTablet();
    initMode = 'mobile';
  }
}

initAnimation();
var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
  var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();

  if (dwidth !== wwidth) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    if (typeof st1 !== "undefined") st1.kill();
    if (typeof st2 !== "undefined") st2.kill();
    tl1.clear();
    tl2.clear();
    tl3.clear();
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".project-page", {
      clearProps: "all"
    });
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pp-intro__title, .pp-intro__text').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    initAnimation();
  }
});

function initScrollAnimationDesktop() {
  resizeFunction = function resizeFunction() {};

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  tl1.to(".at1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl1.to(".at2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".at3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pp-intro__title').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".at4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pp-intro__title').addClass('active');
    }
  }, ">-0.3");
  tl1.from(".pp-intro__text", {
    top: "200%",
    duration: 3,
    ease: "none"
  }, ">-1.7");
  tl1.to(".as1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">1");
  tl1.to(".as2", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".as3", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pp-intro__text').removeClass('active');
    }
  }, ">-0.3");
  tl1.to(".as4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pp-intro__text').addClass('active');
    }
  }, ">-0.3");
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
    ease: "power1.out"
  }, ">-3");
  tl1.to('.pp-task__img', {
    x: 0,
    y: 0,
    duration: 4,
    ease: "power1.out"
  }, ">-3");
  tl1.from('.pp-task__img img', {
    width: "200%",
    height: "200%",
    duration: 5,
    ease: "power1.out"
  }, "<");
  tl1.to('.pp-task__text', {
    y: 0,
    duration: 4,
    ease: "power1.out"
  }, ">-4");
  tl1.to('.pp-task__content', {
    top: "-70%",
    duration: 3,
    ease: "none"
  }, ">");
  tl1.to('.pp-task__img', {
    top: "-100%",
    duration: 4,
    ease: "none"
  }, "<");
  tl1.set('.pp-task', {
    autoAlpha: 100,
    onComplete: function onComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    }
  }, ">");
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
    onComplete: function onComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(100);
    },
    onReverseComplete: function onReverseComplete() {
      (0,_functions__WEBPACK_IMPORTED_MODULE_4__.setMaskHeader)(0);
    }
  }, ">");
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".project-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=" + addTime + "%";
    },
    scrub: 1.5,
    animation: tl1
  });
}

var teamSlider = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.ps-team', {
  loop: false,
  freeMode: true,
  spaceBetween: 0,
  slidesPerView: 'auto',
  direction: 'horizontal'
});
var photosSlider = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.ps-photos', {
  loop: false,
  freeMode: true,
  slidesPerView: 'auto',
  direction: 'horizontal',
  spaceBetween: 0,
  modules: [swiper__WEBPACK_IMPORTED_MODULE_3__.Scrollbar],
  scrollbar: {
    el: '.ps-photos__scrollbar-inner',
    draggable: true
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./src/js/import/_functions.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



addEventListener('beforeunload', function (event) {});

onbeforeunload = function onbeforeunload(event) {
  window.scrollTo(0, 0);
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  //$('body').addClass('active');
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page').length > 0) {
    __webpack_require__(/*! ./animations/_home-page */ "./src/js/import/animations/_home-page.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.about-page').length > 0) {
    __webpack_require__(/*! ./animations/_about-page */ "./src/js/import/animations/_about-page.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts-page').length > 0) {
    __webpack_require__(/*! ./animations/_contacts-page */ "./src/js/import/animations/_contacts-page.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.grow-page').length > 0) {
    __webpack_require__(/*! ./animations/_grow-page */ "./src/js/import/animations/_grow-page.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.faq-page').length > 0) {
    __webpack_require__(/*! ./animations/_faq */ "./src/js/import/animations/_faq.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.portfolio-page').length > 0) {
    __webpack_require__(/*! ./animations/_portfolio */ "./src/js/import/animations/_portfolio.js");
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.project-page').length > 0) {
    __webpack_require__(/*! ./animations/_project */ "./src/js/import/animations/_project.js");
  } else {
    //остальные страницы
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.setMaskHeader)(100);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-hide-menu,.menu__overlay').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__.event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-show-menu').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__.event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.to-top', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__.event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html,body').animate({
      scrollTop: 0
    }, 'fast');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
    var scrollTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();

    if (scrollTop > 300) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.to-top').addClass('active');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.to-top').removeClass('active');
    }
  }); // табы на странице регистрации

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-tab-entity').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-tab-entity').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-tab-individual').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-form-entity').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-form-individual').removeClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-tab-individual').on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-tab-individual').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-tab-entity').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-form-individual').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-register-lk-form-entity').removeClass('active');
  }); // маска для инпута телефона

  function maskPhone(selector) {
    var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "+7 (___) ___-__-__";
    var elems = document.querySelectorAll(selector);

    function mask(event) {
      var keyCode = event.keyCode;
      var template = masked,
          def = template.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      var i = 0,
          newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf("_");

      if (i != -1) {
        newValue = newValue.slice(0, i);
      }

      var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");

      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = newValue;
      }

      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    var _iterator = _createForOfIteratorHelper(elems),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[type="tel"]').length > 0) {
    maskPhone('input[type="tel"]');
  } // popup


  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-popup-active').on('click', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-popup').addClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('no-scroll');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-popup-close').on('click', function (e) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-popup').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('no-scroll');
  });
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_modules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug"] = self["webpackChunkgulp_pug"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map