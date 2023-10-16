$('.partner-carousel').slick({
    infinite: true,
    autoplay: true,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-double-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-double-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  // $('.slider-single').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   fade: false,
  //   adaptiveHeight: true,
  //   infinite: false,
  //  useTransform: true,
  //   speed: 400,
  //   cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   adaptiveHeight: true,
  //   dots: true,
  //   centerMode: true,
  //   focusOnSelect: true
  // });
