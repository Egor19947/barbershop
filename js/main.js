$(function(){

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.menu').toggleClass('menu--active');
  });
  $('.menu__list-link').on('click', function () {
    $('.burger').removeClass('burger--active');
    $('.menu').removeClass('menu--active');
  });

  $('.works__slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 971,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 671,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".menu a, .footer__up").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});