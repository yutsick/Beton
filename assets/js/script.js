"use strict";


const h1_height = document.querySelector('h1').offsetHeight;
const h1_top = document.querySelector('h1').offsetTop;

document.querySelector('.decor').style.top = h1_height + h1_top - 30 + 'px';

const bgs = document.querySelectorAll('[data-bg]');


AOS.init({
    disable: 'mobile' 
  });


if (window.innerWidth < 560) {
    console.log('mobile');
    bgs.forEach(function (el) {
        
        el.style.backgroundImage = `url(${el.dataset.bg})`;
    });
}

jQuery(document).ready(function ($) {





// CF7 forms events

    // document.addEventListener( 'wpcf7mailsent', function( event ) {
    //     $('#modalForm .modal-title').text('Ваша заявка прийнята!');
    //     $('#modalForm .modal-body').html('<p class="text-center">Дякуємо за звернення, наш менеджер зателефонує вам протягом кількох годин.</p>');
    // }, false );

    // document.addEventListener( 'wpcf7invalid', function( event ) {
    //     $('#modalForm .modal-title').text('Щось пішло не так...');
    //     $('#modalForm .modal-body').html('<p class="text-center">Перепрошуємо за незручності.<br>Будь ласка, зателефонуйте нам самостійно або спробуйте знову пізніше.</p>');
    // }, false );

    // document.addEventListener( 'wpcf7mailfailed', function( event ) {
    //     $('#modalForm .modal-title').text('Щось пішло не так...');
    //     $('#modalForm .modal-body').html('<p class="text-center">Перепрошуємо за незручності.<br>Будь ласка, зателефонуйте нам самостійно або спробуйте знову пізніше.</p>');
    // }, false );

    $(window).on('resize', function() {
        location.reload();
    });

    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
      });
});