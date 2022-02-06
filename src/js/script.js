

let slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  navPosition: 'bottom',
  responsive: {
    768: {
      dots: true,
      arrows: false
    },
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');})

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');})