/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");




gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"]);
gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var addTime = 0;
  var addTimeAssorti = 200; //$('body').addClass('active');

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').each(function () {
    var words = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().split(' ');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).empty().html(function () {
      for (var _i = 0; _i < words.length; _i++) {
        if (_i == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append('<span>' + words[_i] + '</span>');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append(' <span>' + words[_i] + '</span>');
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var characters = elem.text().split("");
      elem.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(characters, function (i, el) {
        var random = Math.floor(Math.random() * 4) + 1;
        elem.append("<i class='at" + random + "'>" + el + "</i>");
      });
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-text').each(function () {
    var words = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().split(' ');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).empty().html(function () {
      for (var _i2 = 0; _i2 < words.length; _i2++) {
        if (_i2 == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append('<span>' + words[_i2] + '</span>');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append(' <span>' + words[_i2] + '</span>');
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var characters = elem.text().split("");
      elem.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(characters, function (i, el) {
        var random = Math.floor(Math.random() * 4) + 1;
        elem.append("<i class='as" + random + "'>" + el + "</i>");
      });
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').each(function () {
    var words = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().split(' ');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).empty().html(function () {
      for (var _i3 = 0; _i3 < words.length; _i3++) {
        if (_i3 == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append('<span>' + words[_i3] + '</span>');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append(' <span>' + words[_i3] + '</span>');
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var characters = elem.text().split("");
      elem.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(characters, function (i, el) {
        var random = Math.floor(Math.random() * 4) + 1;
        elem.append("<i class='pt" + random + "'>" + el + "</i>");
      });
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-text').each(function () {
    var words = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text().split(' ');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).empty().html(function () {
      for (var _i4 = 0; _i4 < words.length; _i4++) {
        if (_i4 == 0) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append('<span>' + words[_i4] + '</span>');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).append(' <span>' + words[_i4] + '</span>');
        }
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('span').each(function () {
      var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      var characters = elem.text().split("");
      elem.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(characters, function (i, el) {
        var random = Math.floor(Math.random() * 4) + 1;
        elem.append("<i class='ps" + random + "'>" + el + "</i>");
      });
    });
  });
  var tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('active');
    }
  });
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
  var st1, st2;
  var tl1 = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({});
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
    backgroundColor: '#FFFFFF'
  }, ">");
  tl1.to(".s1__link", {
    autoAlpha: 0,
    duration: 0.5
  }, ">1");
  tl1.to(".s1__right", {
    width: "62.5vw",
    height: "38.75vw",
    left: "2.5vw",
    duration: 2,
    ease: "none"
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
    ease: "none"
  }, "<");
  tl1.to(".second", {
    top: "-100vh",
    duration: 3,
    ease: "none"
  }, ">1");
  tl1.to(".assorti", {
    top: "0vh",
    duration: 2,
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').addClass('active');
    }
  }, ">-2.5");
  tl1.to(".at1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti__intro-title').removeClass('active');
    }
  }, ">3");
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
  }, ">");
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
    ease: "none"
  }, ">-0.3");
  tl1.to(".as4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  var i = 0;
  var assortiCount = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti-item').length;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.assorti-item').each(function () {
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
      duration: 2,
      ease: "none"
    }, ">" + firstDelay);
    tl1.to(img, {
      x: 0,
      y: 0,
      duration: 3,
      ease: "none"
    }, ">-1");
    tl1.from(img2, {
      width: "200%",
      height: "200%",
      duration: 3,
      ease: "none"
    }, "<");
    tl1.to(text, {
      y: 0,
      duration: 2,
      ease: "none"
    }, ">-2");

    if (i < assortiCount) {
      tl1.to(elem, {
        top: "-100%",
        duration: 3,
        ease: "none"
      }, ">0.5");
    } else {
      tl1.to('.assorti', {
        left: "-100%",
        duration: 3,
        ease: "none"
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
  var p = 0;
  var portfolioCount = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.portfolio-item').length;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.portfolio-item').each(function () {
    var firstDelay = '-3.1';

    if (p === 0) {
      firstDelay = "-2";
    }

    p++;
    var elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var first = elem.find('.portfolio-item__first');
    var title = elem.find('.portfolio-item__first-content');
    var second = elem.find('.portfolio-item__second');
    var img = elem.find('.portfolio-item__second img');
    var block = elem.find('.portfolio-item__second-content');
    tl1.from(elem, {
      left: "100%",
      duration: 3,
      ease: "none"
    }, ">" + firstDelay);
    tl1.from(title, {
      x: "100%",
      duration: 2,
      ease: "none"
    }, ">-2");
    tl1.to(first, {
      left: "-150%",
      top: "100%",
      duration: 3,
      ease: "none"
    }, ">");
    tl1.to(second, {
      left: "30%",
      top: "0",
      duration: 2,
      ease: "none"
    }, "<-0.8");
    tl1.from(img, {
      width: "200%",
      height: "200%",
      duration: 2,
      ease: "none"
    }, "<");
    tl1.to(second, {
      left: "0",
      duration: 2,
      ease: "none"
    }, ">");
    tl1.from(block, {
      y: "-100%",
      duration: 3,
      ease: "none"
    }, ">-3");

    if (p < portfolioCount) {
      tl1.to(elem, {
        left: "-100%",
        duration: 3,
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
    ease: "none",
    onComplete: function onComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').addClass('active');
    }
  }, ">-2.5");
  tl1.to(".pt1", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none",
    onReverseComplete: function onReverseComplete() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.partners__intro-title').removeClass('active');
    }
  }, ">3");
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
  }, ">");
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
    ease: "none"
  }, ">-0.3");
  tl1.to(".ps4", {
    autoAlpha: 0,
    duration: 0.7,
    ease: "none"
  }, ">-0.3");
  tl1.to(".partners__items", {
    autoAlpha: 1,
    duration: 1,
    ease: "none"
  }, ">");
  tl1.from(".connect", {
    left: "100%",
    duration: 2,
    ease: "none"
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
    duration: 1.1,
    ease: "none"
  }, "<2");
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
  st1 = gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    trigger: ".home-page",
    pin: true,
    start: "top top",
    end: function end() {
      return "+=5000%";
    },
    scrub: 1,
    animation: tl1
  });
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
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