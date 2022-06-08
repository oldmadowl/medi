$(function(){


  //slider in section offer
  $('.offer__slider').slick({
    prevArrow: '<button class="slick-arrow slick-prev arrow"><img src="images/icons/prev-arrow.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next arrow"><img src="images/icons/next-arrow.svg" alt=""></button>',
  });


  //tabs
  $('.tabs__link').on('click', function(e) {
    e.preventDefault();

    $('.tabs__link').removeClass('tabs__link--active')
    $(this).addClass('tabs__link--active');

    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  });


});