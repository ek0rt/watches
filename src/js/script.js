$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 300,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.png"></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
        dots: true,
        arrows: false
      }
    }]
  }
  );
});