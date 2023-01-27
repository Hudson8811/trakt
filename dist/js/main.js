/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);
addEventListener('beforeunload', function (event) {});
onbeforeunload = function onbeforeunload(event) {
  window.scrollTo(0, 0);
};
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  //$('body').addClass('active');

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
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-page').length > 0) {
    var initAnimation = function initAnimation() {
      if (window.innerWidth > 999) {
        initScrollAnimationDesktop();
        initMode = 'desk';
      } else if (window.innerWidth > 699) {
        _initScrollAnimationTablet();
        initMode = 'tablet';
      } else {
        _initScrollAnimationMobile();
        initMode = 'mobile';
      }
    };
    var initScrollAnimationDesktop = function initScrollAnimationDesktop() {
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
          setMaskHeader(100);
          lightHead = false;
        },
        onReverseComplete: function onReverseComplete() {
          setMaskHeader(0);
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
          curviness: 1
          //type: "cubic"
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
          curviness: 1
          //type: "cubic"
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
        onReverseComplete: function onReverseComplete() {
          setMaskHeader(100);
          lightHead = false;
        },
        onUpdate: function onUpdate() {
          if (lastProgress < this.progress()) {
            if (this.progress() > targetProgress && lightHead) {
              setMaskHeader(100);
              lightHead = false;
            }
          } else {
            if (this.progress() < targetProgress && !lightHead) {
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
          setMaskHeader(0);
        },
        onReverseComplete: function onReverseComplete() {
          setMaskHeader(100);
        },
        onUpdate: function onUpdate() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
          var targetProcent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.connect').offset().left / jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() * 100;
          setMaskHeader(targetProcent);
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
    };
    var _initScrollAnimationTablet = function _initScrollAnimationTablet() {
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
          setMaskHeader(100);
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
          setMaskHeader(0);
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
          setMaskHeader(0);
          lightHead = true;
        } else if (lastBlockTop >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && lastBlockTop <= viewportBottom && lightHead) {
          setMaskHeader(100);
          lightHead = false;
        }
      };
    };
    var _initScrollAnimationMobile = function _initScrollAnimationMobile() {
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
          setMaskHeader(0);
          lightHead = true;
        } else if (lastBlockTop >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && lastBlockTop <= viewportBottom && lightHead) {
          setMaskHeader(100);
          lightHead = false;
        }
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= firstBlockTop && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() < lastBlockTop && lightHead) {
          setMaskHeader(100);
          lightHead = false;
        } else if (firstBlockTop >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && firstBlockTop <= viewportBottom && !lightHead) {
          setMaskHeader(0);
          lightHead = true;
        }
      };
    };
    //главная страница
    splitLetterSpan('.assorti__intro-title', 'at');
    splitLetterSpan('.assorti__intro-text', 'as');
    splitLetterSpan('.partners__intro-title', 'pt');
    splitLetterSpan('.partners__intro-text', 'ps');
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
    initAnimation();
    var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
      /*if ( (window.innerWidth > 999 && initMode != 'desk') ||
          (window.innerWidth > 699 && window.innerWidth <= 999 && initMode != 'tablet') ||
          (window.innerWidth <= 699 && initMode != 'mobile') ){*/
      var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
      if (dwidth !== wwidth) {
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
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.about-page').length > 0) {
    var _initAnimation = function _initAnimation() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.about-page').addClass('active');
      if (window.innerWidth > 999) {
        _initScrollAnimationDesktop();
        initMode = 'desk';
      } else if (window.innerWidth > 699) {
        _initScrollAnimationTablet2();
        initMode = 'tablet';
      } else {
        _initScrollAnimationTablet2();
        initMode = 'mobile';
      }
    };
    var _initScrollAnimationDesktop = function _initScrollAnimationDesktop() {
      _resizeFunction = function _resizeFunction() {};
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
      _tl.to(".at1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">1");
      _tl.to(".at2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl.to(".at3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title').removeClass('active');
        }
      }, ">-0.3");
      _tl.to(".at4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function onReverseComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title').addClass('active');
        }
      }, ">-0.3");
      _tl.from(".ap-activity__intro-text", {
        top: "200%",
        duration: 3,
        ease: "none"
      }, ">-1.7");
      _tl.to(".as1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">1");
      _tl.to(".as2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl.to(".as3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-text').removeClass('active');
        }
      }, ">-0.3");
      _tl.to(".as4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function onReverseComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-text').addClass('active');
        }
      }, ">-0.3");
      _tl.from('.ap-activity-item', {
        top: "100%",
        duration: 3,
        ease: "power1.out"
      }, ">-0.5");
      _tl.to('.ap-activity-item__img', {
        x: 0,
        y: 0,
        duration: 5,
        ease: "power1.out"
      }, ">-2");
      _tl.from('.ap-activity-item__img img', {
        width: "200%",
        height: "200%",
        duration: 5,
        ease: "power1.out"
      }, "<");
      _tl.to('.ap-activity-item__text', {
        y: 0,
        duration: 4,
        ease: "power1.out"
      }, ">-3");
      _tl.to('.ap-activity-item__content', {
        top: "-100%",
        duration: 3,
        ease: "none"
      }, ">");
      _tl.to('.ap-activity-item__img', {
        top: "-100%",
        duration: 4,
        ease: "none"
      }, "<");
      _tl.set('.ap-activity', {
        autoAlpha: 100,
        onComplete: function onComplete() {
          setMaskHeader(0);
        },
        onReverseComplete: function onReverseComplete() {
          setMaskHeader(100);
        }
      }, ">");
      _tl.from(".ap-green-logo", {
        backgroundColor: '#FFFFFF',
        duration: 2,
        ease: "none"
      }, ">-1");
      _tl.to(".ap-green-logo", {
        autoAlpha: 100,
        duration: 2,
        ease: "none"
      }, "<");
      _tl.to(".ap-green-logo__img", {
        autoAlpha: 1,
        duration: 1.5,
        delay: 1,
        ease: "none"
      });
      _tl.to(".ap-green-logo__logo", {
        width: 0,
        margin: 0,
        autoAlpha: 0,
        duration: 2,
        ease: "power1.out"
      }, ">");
      _tl.to(".ap-green-logo__title", {
        width: "91.66vw",
        ease: "power1.out",
        duration: 3.5
      }, "<");
      _tl.to(".ap-l1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">0.2");
      _tl.to(".ap-l2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl.to(".ap-l3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl.to(".ap-l4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl.to(".ap-green-logo", {
        backgroundColor: '#FFFFFF',
        duration: 2,
        ease: "none"
      }, ">-0.5");
      _tl.set('.ap-green-logo', {
        autoAlpha: 100,
        onComplete: function onComplete() {
          setMaskHeader(100);
        },
        onReverseComplete: function onReverseComplete() {
          setMaskHeader(0);
        }
      }, ">");
      _tl.from(".ap-achivments", {
        top: "100vh",
        duration: 2,
        ease: "none"
      }, ">-1");
      _tl.to(".pt1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">1.5");
      _tl.to(".pt2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl.to(".pt3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-achivments__intro-title').removeClass('active');
        }
      }, ">-0.3");
      _tl.to(".pt4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function onReverseComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-achivments__intro-title').addClass('active');
        }
      }, ">-0.3");
      _tl.fromTo(".ap-achivments-item--1", {
        left: "100vw",
        top: "100vh"
      }, {
        left: "0vw",
        top: "0vw",
        duration: 2.5,
        ease: "none"
      }, ">");
      _tl.from(".ap-achivments-item--1 .ap-achivments-item__img img", {
        width: '200%',
        height: '200%',
        duration: 2.5,
        ease: "none"
      }, "<");
      _tl.from(".ap-achivments-item--1 .ap-achivments-item__content", {
        x: "100%",
        ease: "none",
        duration: 2
      }, ">-2");
      _tl.fromTo(".ap-achivments-item--1", {
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
      _tl.fromTo(".ap-achivments-item--2", {
        left: "100vw",
        top: "100vh"
      }, {
        left: "0vw",
        top: "0vw",
        duration: 2.5,
        ease: "none"
      }, ">-3");
      _tl.from(".ap-achivments-item--2 .ap-achivments-item__img img", {
        width: '200%',
        height: '200%',
        duration: 2.5,
        ease: "none"
      }, "<");
      _tl.from(".ap-achivments-item--2 .ap-achivments-item__content", {
        x: "100%",
        ease: "none",
        duration: 2
      }, ">-2");
      _tl.to(".ap-achivments-item--2 .ap-achivments-item__img ", {
        left: "-100%",
        ease: "none",
        duration: 3
      }, ">1");
      _tl.fromTo(".ap-achivments-item--2 .ap-achivments-item__content", {
        left: "75.625vw"
      }, {
        left: "10.625vw",
        duration: 3,
        ease: "none"
      }, "<");
      _tl.from(".ap-achivments-item--3", {
        left: "100vw",
        ease: "none",
        duration: 2.5
      }, ">-2.5");
      _tl.from(".ap-achivments-item--3 .ap-achivments-item__img", {
        y: "-100%",
        ease: "none",
        duration: 2.5
      }, "<");
      _tl.from(".ap-achivments-item--3 .ap-achivments-item__img img", {
        width: '200%',
        height: '200%',
        duration: 2.5,
        ease: "none"
      }, "<");
      _tl.from(".ap-achivments-item--3 .ap-achivments-item__content", {
        y: "100%",
        ease: "none",
        duration: 2.5
      }, "<");
      _tl.to(".ap-achivments-item--2", {
        y: "-100%",
        ease: "none",
        duration: 3.5
      }, ">1");
      _tl.to(".ap-achivments-item--3", {
        y: "-100%",
        ease: "none",
        duration: 3.5
      }, "<");
      _tl.from(".ap-automation", {
        top: "100vh",
        duration: 2.5,
        ease: "none"
      }, ">-2.5");
      _tl.to(".vt1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">1.5");
      _tl.to(".vt2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl.to(".vt3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-automation__intro-text').removeClass('active');
        }
      }, ">-0.3");
      _tl.to(".vt4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function onReverseComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-automation__intro-text').addClass('active');
        }
      }, ">-0.3");
      _tl.from(".ap-automation__content", {
        top: '100vh',
        left: '100vw',
        duration: 3,
        ease: "none"
      }, "<-0.5");
      _tl.to(".ap-automation", {
        autoAlpha: 1,
        duration: 1.7,
        ease: "none"
      }, ">");
      _st = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
        trigger: ".about-page",
        pin: true,
        start: "top top",
        end: function end() {
          return "+=" + _addTime + "%";
        },
        scrub: 1.5,
        animation: _tl
      });
    };
    var _initScrollAnimationTablet2 = function _initScrollAnimationTablet2() {
      _resizeFunction = function _resizeFunction() {
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
        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= greenBlockTop && !_lightHead && jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() <= greenBlockTop + greenBlockTop2 && !_lightHead) {
          setMaskHeader(0);
          _lightHead = true;
        } else if (greenBlockTop >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() && greenBlockTop <= viewportBottom && _lightHead) {
          setMaskHeader(100);
          _lightHead = false;
        } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() >= greenBlockTop + greenBlockTop2 && _lightHead) {
          setMaskHeader(100);
          _lightHead = false;
        }
      };
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
      _tl.to(".at1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, 0);
      _tl.to(".at2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl.to(".at3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title').removeClass('active');
        }
      }, ">-0.3");
      _tl.to(".at4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function onReverseComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title').addClass('active');
        }
      }, ">-0.3");
      _tl.from(".ap-activity__intro-text", {
        top: "200%",
        duration: 3,
        ease: "none"
      }, ">-1.7");
      _tl.to(".as1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">1");
      _tl.to(".as2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl.to(".as3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-text').removeClass('active');
        }
      }, ">-0.3");
      _tl.to(".as4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function onReverseComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-text').addClass('active');
        }
      }, ">-0.3");
      _tl2.to(".ap-activity", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "none"
      }, ">");
      _st = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
        trigger: ".ap-activity",
        pin: true,
        start: "top top",
        end: function end() {
          return "+=300%";
        },
        scrub: 1,
        animation: _tl
      });
      _tl2.to(".vt1", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, 0);
      _tl2.to(".vt2", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none"
      }, ">-0.3");
      _tl2.to(".vt3", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-automation__intro-text').removeClass('active');
        }
      }, ">-0.3");
      _tl2.to(".vt4", {
        autoAlpha: 0,
        duration: 0.7,
        ease: "none",
        onReverseComplete: function onReverseComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-automation__intro-text').addClass('active');
        }
      }, ">-0.3");
      _tl2.to(".ap-automation__intro", {
        autoAlpha: 1,
        duration: 0.5,
        ease: "none"
      }, ">");
      _st2 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
        trigger: ".ap-automation__intro",
        pin: true,
        start: "top top",
        end: function end() {
          return "+=120%";
        },
        scrub: 1,
        animation: _tl2
      });
    };
    //о компании
    setMaskHeader(100);
    splitLetterSpan('.ap-activity__intro-title', 'at');
    splitLetterSpan('.ap-activity__intro-text', 'as');
    splitLetterSpan('.ap-achivments__intro-title', 'pt');
    splitLetterSpan('.ap-automation__intro-text', 'vt');
    var initMode;
    var _addTime = 1750;
    var _lightHead = true,
      _lastProgress,
      _targetProgress;
    var _st, _st2;
    var _tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
    var _tl2 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
    var _tl3 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
    var _resizeFunction;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
      _resizeFunction();
    });
    _initAnimation();
    var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
      var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
      if (dwidth !== wwidth) {
        setMaskHeader(100);
        if (typeof _st !== "undefined") _st.kill();
        if (typeof _st2 !== "undefined") _st2.kill();
        _tl.clear();
        _tl2.clear();
        _tl3.clear();
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".at1, .at2, .at3, .at4, .ap-activity__intro-text, .as1, .as2, .as3, .as4, .ap-activity-item," + ".ap-activity-item__img, .ap-activity-item__img img, .ap-activity-item__text, .ap-activity-item__content," + ".ap-activity, .ap-green-logo, .ap-green-logo__img, .ap-green-logo__title, .ap-l1, .ap-l2, .ap-l3, .ap-l4," + ".ap-achivments, .pt1, .pt2, .pt3, .pt4, .ap-achivments-item, .ap-achivments-item .ap-achivments-item__img, " + ".ap-achivments-item .ap-achivments-item__img img, .ap-achivments-item .ap-achivments-item__content," + ".ap-automation, .vt1, .vt2, .vt3, .vt4, .ap-automation__content, .about-page, .ap-automation__intro", {
          clearProps: "all"
        });
        window.scrollTo({
          top: 0,
          behavior: "instant"
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ap-activity__intro-title, .ap-activity__intro-text, .ap-achivments__intro-title, .ap-automation__intro-text').addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
        _initAnimation();
      }
    });
  } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.contacts-page').length > 0) {
    var _initAnimation2 = function _initAnimation2() {
      if (window.innerWidth > 999) {
        _initScrollAnimationDesktop2();
        initMode = 'desk';
      } else if (window.innerWidth > 699) {
        initScrollAnimationTablet();
        initMode = 'tablet';
      } else {
        initScrollAnimationMobile();
        initMode = 'mobile';
      }
    };
    var _initScrollAnimationDesktop2 = function _initScrollAnimationDesktop2() {
      _resizeFunction2 = function _resizeFunction2() {};
      _tl4.to(".loader__center", {
        autoAlpha: 1,
        duration: 1.5,
        delay: 1,
        ease: "none",
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
        }
      });
      _tl4.to(".loader__logo", {
        width: 0,
        margin: 0,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.out"
      }, ">");
      _tl4.to(".loader__title", {
        width: "74.6875vw",
        ease: "power1.out",
        duration: 1.5
      }, "<");
      _tl4.to(".loader .l1", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none"
      }, ">0.2");
      _tl4.to(".loader .l2", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none"
      }, ">-0.1");
      _tl4.to(".loader .l3", {
        autoAlpha: 0,
        duration: 0.4,
        ease: "none"
      }, ">-0.1");
      _tl4.to(".loader .l4", {
        autoAlpha: 0,
        duration: 0.3,
        ease: "none"
      }, ">-0.1");
      _tl4.to(".loader", {
        autoAlpha: 0,
        duration: 0.5,
        ease: "none",
        onStart: function onStart() {
          setMaskHeader(100);
          _lightHead2 = false;
        },
        onReverseComplete: function onReverseComplete() {
          setMaskHeader(0);
          _lightHead2 = true;
        }
      }, ">0.2");
      _tl5.to(".c1__title", {
        top: "32vh",
        opacity: 1,
        delay: 4,
        duration: 3
      }, ">");
      _tl5.to(".c1__contacts", {
        top: "50vh",
        opacity: 1,
        duration: 2,
        onComplete: function onComplete() {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
        }
      }, ">-1");
      _tl6.to(".first", {
        left: '-100vw',
        top: '-100vh',
        ease: "none",
        duration: 0.2
      }, ">-1");
      _tl6.to(".contacts-page__map ", {
        motionPath: {
          path: [{
            left: '83vw',
            top: '83vh'
          }, {
            left: '00vw',
            top: '5vh'
          }],
          curviness: 1
          //type: "cubic"
        },

        duration: 0.2,
        ease: "none"
      }, "<-0.1"), _tl6.to(".contacts-page__map ", {
        motionPath: {
          path: [{
            left: '0vw',
            top: '5vh'
          }, {
            left: '-100vw',
            top: '5vh'
          }],
          curviness: 1
          //type: "cubic"
        },

        duration: 0.1,
        delay: 0.005,
        ease: "none"
      }, ">"), _tl6.to(".contacts-page__walk", {
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
          curviness: 1
          //type: "cubic"
        },

        duration: 0.1,
        ease: "none"
      }, ">-0.1"), _tl6.to(".contacts-page__walk", {
        motionPath: {
          path: [{
            left: '50vw',
            top: '40vh'
          }, {
            left: '-100vw',
            top: '40vh'
          }],
          curviness: 1
          //type: "cubic"
        },

        delay: 0.005,
        duration: 0.1,
        ease: "none"
      }, ">"), _tl6.to(".contacts-page__startWalk", {
        left: 0,
        top: 0,
        duration: 0.1,
        ease: "none"
      }, ">-0.1"), _tl6.to(".contacts-page__startWalk", {
        duration: 0.01,
        delay: 0.005,
        ease: "none"
      }, ">"), _st4 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
        trigger: ".contacts-page",
        pin: true,
        start: "top top",
        end: function end() {
          return "+=" + _addTime2 + "%";
        },
        scrub: 1.5,
        animation: _tl6
      });
    }; // function initScrollAnimationTablet(){
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
    var initMode;
    var _addTime2 = 2300;
    var _lightHead2 = true,
      _lastProgress2,
      _targetProgress2;
    var _tl4 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
      onComplete: function onComplete() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
      }
    });
    var _st3, _st4, _st5, _st6;
    var _tl5 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
    var _tl6 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
    var _tl7 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
    var _tl8 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
    var _resizeFunction2;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function () {
      _resizeFunction2();
    });
    _initAnimation2();
    var dwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function () {
      /*if ( (window.innerWidth > 999 && initMode != 'desk') ||
          (window.innerWidth > 699 && window.innerWidth <= 999 && initMode != 'tablet') ||
          (window.innerWidth <= 699 && initMode != 'mobile') ){*/
      var wwidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
      if (dwidth !== wwidth) {
        _addTime2 = 2300;
        setMaskHeader(100);
        _lightHead2 = true;
        if (typeof _st3 !== "undefined") _st3.kill();
        if (typeof _st4 !== "undefined") _st4.kill();
        if (typeof _st5 !== "undefined") _st5.kill();
        _tl4.clear();
        _tl5.clear();
        _tl6.clear();
        _tl7.clear();
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(".loader__center, .loader__logo, .loader__title, .loader .l1, .loader .l2, .loader .l3, .loader .l4,.loader," + ".s1__title, .s1__left, .s1__text,  .s1__right,  .s1__link, .about, .first, .s2, .s2__img img, .s3, .s3__right, .s3__right img," + ".contacts-page__map" + ".contacts-page", {
          clearProps: "all"
        });
        window.scrollTo({
          top: 0,
          behavior: "instant"
        });
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text, .assorti__intro-title, .partners__intro-text, .partners__intro-title').addClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
        _initAnimation2();
      }
    });
  } else {
    //остальные страницы
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    setMaskHeader(100);
  }
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-hide-menu,.menu__overlay').on('click', function () {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-show-menu').on('click', function () {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('active');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu').addClass('active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.to-top', function () {
    event.preventDefault();
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
  });

  // маска для инпута телефона

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
  }
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