import $, { event, type } from "jquery";
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

	$('.js-hide-menu,.menu__overlay').on('click',function (event){
		event.preventDefault();
		$('.menu').removeClass('active');
		$('body').addClass('active');
	});
	$('.js-show-menu').on('click',function (event){
		event.preventDefault();
		$('body').removeClass('active');
		$('.menu').addClass('active');
	});

    $(document).on('click', '.to-top', function (event){
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



    if ($('.main-lk-page').length > 0){

        $('.js-popup-avatar').on('click',function () {
            $('.js-popup').addClass('active');
            $('body').addClass('no-scroll');
        });

        $(document).ready(function() {
            var disabled = false;
            $('.js-data-editing').click(function() {
                if (disabled) {
                    $('.input-text').prop('disabled', true);
                    $('.main-lk-page__order').addClass('active');
                    $('.main-lk-page__save').removeClass('active');
                }
                else {
                    $('.input-text').prop('disabled', false);
                    $('.main-lk-page__order').removeClass('active');
                    $('.main-lk-page__save').addClass('active');
                }
                disabled = !disabled;
            })
        });

    } else if ($('.register-lk-page').length > 0){

        $('.register-lk-page__submit').on('click',function(e) {
            e.preventDefault();
            $('.register-lk-page__response').addClass('active');

            $('.register-lk-page__tabs').removeClass('active');
            $('.js-register-lk-form-entity').removeClass('active');
            $('.js-register-lk-form-individual').removeClass('active');
        });


        // табы

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

    } else if ($('.order-page').length > 0){

        $('.content__btn').on('click',function (){
            $('.content__btn').toggleClass('active');
            $('.personal').toggleClass('active');
        });

    } else if ($('.change-password-page').length > 0){

        $('.form-lk__password-btn').on('click',function (){
            const prevInput = $('.form-lk__password-btn').prev();

            if(prevInput.attr('type') === "password") {
                prevInput.attr('type', 'text');
            }else{
                prevInput.attr('type', 'password');
            }
        });

    } else if ($('.catalog-inside-lk-page').length > 0){

        $( ".selector" ).selectmenu();
    } else if ($('.cart-product-page').length > 0){

        $('.slider-big').slick({
            lazyLoad: 'ondemand',
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipe: false,
            asNavFor: '.slider-small',
            responsive: [
                {
                    breakpoint: 540,
                    settings: {
                        centerPadding: '0',
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        centerPadding: '12px',
                    }
                }
            ]
        });
        $('.slider-small').slick({
            lazyLoad: 'ondemand',
            speed: 500,
            adaptiveHeight: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            focusOnSelect: true,
            asNavFor: '.slider-big',
            centerPadding: '0',
        });

        $( ".selector" ).selectmenu();

        $( ".js-counter-minus" ).on('click',function (e){
            const number = $(e.target).next();
            const numberValue = number.text();

            if (parseInt(numberValue) > 0) {
                const numberMinus = parseInt(numberValue) - 1;
                number.text(`${numberMinus}`)
            }
        });
        $( ".js-counter-plus" ).on('click',function (e){
            const number = $(e.target).prev();
            const numberValue = number.text();
            const numberPlus = parseInt(numberValue) + 1;

            number.text(`${numberPlus}`)
        });

    } else if ($('.basket-order-options-page').length > 0) {

        $(".selector").selectmenu({
            open: function (event, ui) {
                const heightMenu = $('.ui-selectmenu-menu').outerHeight();
                $('#ui-id-1-button').css('margin-bottom', `${heightMenu + 'px'}`);
            },
            close: function (event, ui) {
                const heightMenu = $('.ui-selectmenu-menu').outerHeight();
                $('#ui-id-1-button').css('margin-bottom', `${heightMenu + 'px'}`);
            }
        });

        $('.ui-selectmenu-menu').addClass('basket-order-options-page__select-menu');
    }


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

    // menu lk

    $('.menu-lk__btn').on('click', function() {
        $('.menu-lk__btn').toggleClass('active');
        $('.menu-lk').toggleClass('active');
    });

    // form tabs basket page

    if ($('.item__block-tabs')) {
        $('.item__block-tabs').on('click',function (e) {
            $('.item__tab').removeClass('active');
            $(e.target).addClass('active');
        });
    }
});
