import $, { event } from "jquery";
import {setMaskHeader} from './_functions';

addEventListener('beforeunload', (event) => { });
onbeforeunload = (event) => {
	window.scrollTo(0, 0);
};

$(document).ready(function (){
	//$('body').addClass('active');

    if ($('.home-page').length > 0)
    {
        require('./animations/_home-page');
    }
    else if($('.about-page').length > 0)
    {
        require('./animations/_about-page');
    }
    else if ($('.contacts-page').length > 0)
    {
        require('./animations/_contacts-page');
    }
    else if($('.grow-page').length > 0)
    {
        require('./animations/_grow-page');
    }
    else if($('.faq-page').length > 0)
    {
        require('./animations/_faq');
    }
    else if($('.portfolio-page').length > 0)
    {
        require('./animations/_portfolio');
    }
    else if($('.project-page').length > 0)
    {
        require('./animations/_project');
    }
    else
    {
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
