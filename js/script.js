var NS = {
  claimStartStrings: [],
  claimEndStrings: []
};

jQuery(document).ready(function($) {

  /*
  Placeholders
   */
  $('input, textarea').each(function() {
    if ($(this).data('placeholder')) {
      $(this).val($(this).data('placeholder'));
    }
  });

  $('input, textarea').on('focus', function() {
    if ($(this).val() === $(this).data('placeholder')) {
      $(this).val('');
    }
  });

  $('input, textarea').on('blur', function() {
    if ($(this).val() === '') {
      $(this).val($(this).data('placeholder'));
    }
  });



  /*
  SKIP TO CONTENT
   */
  $('.skip-to-content').on('click', function() {
    $('html, body').animate({
      scrollTop: $("#content").offset().top - 120
    }, 500);
  });


  // if (NS.claimStartStrings.length === 0) {
  //   NS.claimStartStrings = [];
  // }
  //
  // if (typeof NS.claimEndStrings === "undefined") {
  //   NS.claimEndStrings = [];
  // }



  claimStartStrings = NS.claimStartStrings;
  claimEndStrings = NS.claimEndStrings;

  var changeTime = 2000;
  var changeTime2 = 1000;
  var claimStartCounter = 0;
  var claimEndCounter = 0;

  $(".only-mobile-hide .claimStart").
    css({
      'width': "toggle",
      'opacity': 1
    }).
    html(claimStartStrings[claimStartCounter]);

  $(".only-mobile-hide .claimEnd").
    css({
      'width': "toggle",
      'opacity': 1
    }).
    html(claimEndStrings[claimEndCounter]);


  $(".only-mobile-show .claimStart").
    css({
      'height': "toggle",
      'opacity': 1
    }).
    html(claimStartStrings[claimStartCounter]);

  $(".only-mobile-show .claimEnd").
    css({
      'height': "toggle",
      'opacity': 1
    }).
    html(claimEndStrings[claimEndCounter]);

  setTimeout(function() {
    changeClaimStart();
    changeClaimEnd();
  }, changeTime);


  function changeClaimStart() {

    $(".only-mobile-hide .claimStart")
      .animate({
        opacity: 0,
        width: 'toggle'
      }, changeTime2, "easeOutQuint", function() {

        if (claimStartCounter < claimStartStrings.length - 1) {
          claimStartCounter++;
        } else {
          claimStartCounter = 0;
        }

        $(".only-mobile-hide .claimStart")
          .html(claimStartStrings[claimStartCounter])
          .animate({
            opacity: 1,
            width: 'toggle'
          }, changeTime, "easeOutQuint", function() {

            // changeClaimStart();

          });
      });



      // MOBILE
      $(".only-mobile-show .claimStart")
        .animate({
          opacity: 0,
          height: 'toggle'
        }, changeTime2, "easeOutQuint", function() {

          if (claimStartCounter < claimStartStrings.length - 1) {
            claimStartCounter++;
          } else {
            claimStartCounter = 0;
          }

          $(".only-mobile-show .claimStart")
            .html(claimStartStrings[claimStartCounter])
            .animate({
              opacity: 1,
              height: 'toggle'
            }, changeTime, "easeOutQuint", function() {

              setTimeout(function() {
                changeClaimStart();
              }, 3000);


            });
        });

    }

    function changeClaimEnd() {

      $(".only-mobile-hide .claimEnd")
        .animate({
          opacity: 0,
          width: 'toggle'
        }, changeTime2, "easeOutQuint", function() {

          if (claimEndCounter < claimEndStrings.length - 1) {
            claimEndCounter++;
          } else {
            claimEndCounter = 0;
          }

          $(".only-mobile-hide .claimEnd")
            .html(claimEndStrings[claimEndCounter])
            .animate({
              opacity: 1,
              width: 'toggle'
            }, changeTime, "easeOutQuint", function() {

              // changeClaimEnd();

            });
        });


        // MOBILE
        $(".only-mobile-show .claimEnd")
          .animate({
            opacity: 0,
            height: 'toggle'
          }, changeTime2, "easeOutQuint", function() {

            if (claimEndCounter < claimEndStrings.length - 1) {
              claimEndCounter++;
            } else {
              claimEndCounter = 0;
            }

            $(".only-mobile-show .claimEnd")
              .html(claimEndStrings[claimEndCounter])
              .animate({
                opacity: 1,
                height: 'toggle'
              }, changeTime, "easeOutQuint", function() {

                setTimeout(function() {
                  changeClaimEnd();
                }, 3000);

              });
          });
    }




  // hide menu on scroll
  var lastScrollTop = 0;
  $(window).scroll(function(event){

    // console.log($(window).width());

    if ($(window).width() > 800) {
      if ($('#sticky-top').hasClass('slided')) {
        $('body').css({
          // 'padding-top': topHeight + 'px',
        });
        $('#sticky-top').css({
          'margin-top': '0',
        }).removeClass('slided');
      }
      return;
    }

    var st = $(this).scrollTop();

    var topHeight = $('#sticky-top').outerHeight();

    if (st > lastScrollTop && $(document).scrollTop() > 105 && lastScrollTop !== 0){
      $('body').css({
        // 'padding-top': '0',
      });
      $('#sticky-top').css({
        'margin-top': '-' + topHeight + 'px',
      }).addClass('slided');
    } else {
      $('body').css({
        // 'padding-top': topHeight + 'px',
      });
      $('#sticky-top').css({
        'margin-top': '0',
      }).removeClass('slided');
    }


    lastScrollTop = st;
  });




  $('.slider-mac-screen').each(function() {
    $(this).find('.slides').slick({
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false
      //prevArrow: $('.aktualnosci-content .prev'),
      //nextArrow: $('.aktualnosci-content .next'),
    });
  });

  $('.slider-macbook').each(function() {
    $(this).find('.slides').slick({
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false
      //prevArrow: $('.aktualnosci-content .prev'),
      //nextArrow: $('.aktualnosci-content .next'),
    });
  });

  $('.slider-classic').each(function() {
    $(this).find('.slides').slick({
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false
      //prevArrow: $('.aktualnosci-content .prev'),
      //nextArrow: $('.aktualnosci-content .next'),
    });
  });



  $.srSmoothscroll({
    // defaults
    step: 100,
    speed: 300,
    ease: 'swing',
    target: $('body'),
    container: $(window)
  });


  $('.view-portfolio-main-slider .view-content').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: $('.aktualnosci-content .prev'),
    nextArrow: $('.aktualnosci-content .next'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.standards-carousel').slick({
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 6,
    swipeToSlide: false,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: $('.standards-left'),
    nextArrow: $('.standards-right'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          speed: 2000,
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          speed: 1500,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          speed: 1000,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





  progressBar();

  $(window).on('resize', function() {
    progressBar();
  });

  function progressBar() {
    var fromTop;
    var windowWidth = $(window).width();

    // console.log(windowWidth);
    $(window).scroll(function (event) {
      var fromTop = $(window).scrollTop();
      // console.log(fromTop);

      if (windowWidth > 768) {
        if (fromTop > 50) {
          // add progress bar
          $('.progress-bar').addClass('revealed');
          $('#sticky-top').addClass('sticked');
          $('body').removeClass('not-scrolled');
          $('body').addClass('scrolled');
          // shrink top menu
        } else {
          $('.progress-bar').removeClass('revealed');
          $('#sticky-top').removeClass('sticked');
          $('body').removeClass('scrolled');
          $('body').addClass('not-scrolled');
        }
      }

      // console.log($(document).height());

      var progressPercent = (fromTop)*100/($(document).height()-$(window).height());


      // console.log('fromTop: ' + fromTop);
      // console.log('$(document).height(): ' + $(document).height());
      //
      // console.log('progressPercent: ' + progressPercent);


      $('.progress-bar').find('.loaded').css({
        'width': progressPercent + '%'
      });

    });

    if (windowWidth <= 768) {
      $('.progress-bar').removeClass('revealed');
      $('#sticky-top').removeClass('sticked');
      $('body').removeClass('scrolled');
      $('body').addClass('not-scrolled');
    }


  }


  $('.hamburger').on('click', expandMenu);

  function expandMenu() {

    $('body').append('<div class="menu-mobile"><ul></ul></div>');

    $('.menu-mobile').animate({
      'height': '100%'
    }, 300);


    var time = 100;

    $('.main-menu li').each(function() {
      var $that = $(this);
      setTimeout( function() {
        $that.clone().appendTo('.menu-mobile > ul').css({
          'opacity': 0,
          'position': 'relative',
          'bottom': '-10px'
        }).animate({
          'opacity': 1,
          'bottom': '0'
        }, 1000);
      }, time);
      time += 100;
    });


  }

  $(document).on('click', '.hide-menu', function() {
    $('.menu-mobile').animate({
      'height': '0'
    }, 300, function() {
      $('.menu-mobile').remove();
    });

  });




  var timeout;

  $('.offer-for-box .inner').stop().on('mouseenter', function() {

    var $this = $(this);

    $this.children('.offerFor-icon').stop().animate({
      opacity: 0.1,
    }, 100, function() {

      console.log($this);
    });
    $this.children('.offerFor-icon').children('img').stop().delay(300).addClass('scaleUp');

    $this.children('.offerFor-title').stop().delay(300).addClass('text-transform');

    timeout = setTimeout(function(){
      $this.children('.offerFor-desc').stop().addClass('offerFor-desc-show');
    }, 300);


  });


  $('.offer-for-box .inner').stop().on('mouseleave', function() {

    var $this = $(this);

    $this.children('.offerFor-icon').stop().animate({
      opacity: 1,
    }, 100, function() {

      console.log($this);
    });
    $this.children('.offerFor-icon').children('img').stop().removeClass('scaleUp');

    $this.children('.offerFor-title').stop().removeClass('text-transform');


    clearTimeout(timeout);
    $this.children('.offerFor-desc').stop().removeClass('offerFor-desc-show');

  });



  var stepInternet = 1;

  function changeStepInternet() {
    if (stepInternet < 6) {
      $('.howWeWorkInternet-item').each(function(index) {
        if (index < stepInternet) {
          $(this).addClass('active');
        }
      });
      stepInternet++;
    } else {
      stepInternet = 1;
      $('.howWeWorkInternet-item').removeClass('active');
    }
  }

  setInterval(function() {
    changeStepInternet();
  }, 2000);



  var stepGraphic = 1;

  function changeStepGraphic() {
    if (stepGraphic < 5) {
      $('.howWeWorkGraphic-item').each(function(index) {
        if (index < stepGraphic) {
          $(this).addClass('active');
        }
      });
      stepGraphic++;
    } else {
      stepGraphic = 1;
      $('.howWeWorkGraphic-item').removeClass('active');
    }
  }

  setInterval(function() {
    changeStepGraphic();
  }, 2000);


  function onScrollInit( items, trigger ) {
    items.each( function() {
      var osElement = $(this),
          osAnimationClass = osElement.attr('data-os-animation'),
          osAnimationDelay = osElement.attr('data-os-animation-delay');

          osElement.css({
            '-webkit-animation-delay':  osAnimationDelay,
            '-moz-animation-delay':     osAnimationDelay,
            'animation-delay':          osAnimationDelay
          });

          var osTrigger = ( trigger ) ? trigger : osElement;

          osTrigger.waypoint(function() {
            osElement.addClass('animated').addClass(osAnimationClass);
            },{
                triggerOnce: true,
                offset: '90%'
          });
    });
  }

   onScrollInit( $('.os-animation') );
   onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );





});


jQuery(window).on('load', function() {

  var $ = jQuery;

  /*
   Dopasowywanie mapy
   */
  var mapWidth = $('.map-wrapper').outerWidth();

  $('.map').attr('width', mapWidth);


  // skalowanie mac screen mockup
  $(window).on('resize', function() {
    scaleMacScreenMockup();
    $('.offer-item').matchHeight();
  });

  scaleMacScreenMockup();

  function scaleMacScreenMockup() {
    var mockupWidth = $('.mac-screen-mockup').width();
    var fromLeft = mockupWidth * 0.087;

    $('.mac-screen-mockup').css({
      'height': mockupWidth*0.836,
      'padding-top': mockupWidth*0.071
    });

    $('.mac-screen-mockup video').css({
      'width': mockupWidth - 2*fromLeft,
      'margin-left': fromLeft
    });

  }



  // skalowanie macbook screen mockup
  $(window).on('resize', function() {
    scaleMacbookScreenMockup();
    $('.offer-item').matchHeight();
  });

  scaleMacbookScreenMockup();

  function scaleMacbookScreenMockup() {
    var mockupWidth = $('.macbook-screen-mockup').width();
    var fromLeft = mockupWidth * 0.12222222222222222222222222222222;

    $('.macbook-screen-mockup').css({
      'height': mockupWidth*0.65166666666666666666666666666667,
      'padding-top': mockupWidth*0.09
    });

    $('.macbook-screen-mockup video').css({
      'width': mockupWidth - 2*fromLeft,
      'margin-left': fromLeft
    });

  }




  $('.match-height-parent').each(function() {
    $(this).children().matchHeight();
  });

  $(".stick-in-parent").stick_in_parent({
    offset_top: 100
  });


  $('.offer-item').matchHeight();





});
