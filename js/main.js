

/*
 * Theme Name: vince onepage & Multipages Business template
 * File name: main.js
 * Theme URL: http://www.kamric.com/vince/
 * Description: vince onepage & Multipages Business template
 * Author: Kamric
 * Author URL: https://themeforest.net/user/kamric
 * Version: 1.0
 */


(function ($)
{
  "use strict";

  //Run function when document ready
  $(document).ready(function ()
  {
    init_pagescroll();
    init_animateloader();
    init_prettyphoto();
    init_menumobile();
    init_counterup();
    init_wowanimation();
    init_testimonialcarousel();
    init_team();
    init_teamcarousel();
    init_appslide();
    init_clients();
    init_screen();
    init_gototop();
    init_countdown();
    init_chart();

  });


  /*------------------------------------------*/
  /*          /*. Navigation /*
  /*------------------------------------------*/


  $(window).scroll(function ()
  {
    if ($(".navbar").offset().top > 0)
    {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
    else
    {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


  /*------------------------------------------*/
  /*          /*. page scroll /*
  /*------------------------------------------*/


  function init_pagescroll()
  {
    $('a.page-scroll').on('click', function (e)
    {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname)
      {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length)
        {
          $('html,body').animate(
          {
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  }


  /*------------------------------------------*/
  /*      /*.  Animate loader off screenx /*
  /*------------------------------------------*/


  function init_animateloader()
  {
    $(".se-pre-con").fadeOut("slow");
  }


  /*------------------------------------------*/
  /*      /*.  prettyphoto Lightbox /*
  /*------------------------------------------*/


  function init_prettyphoto()
  {
    $("a[class^='prettyphoto']").prettyPhoto();
    $("a[class^='work']").prettyPhoto();
  }


  /*------------------------------------------*/
  /*           /*.  Menu Mobile Toggle /*
  /*------------------------------------------*/


  function init_counterup()
  {
    if ($("span.count").length > 0)
    {
      $('span.count').counterUp(
      {
        delay: 10, // the delay time in ms
        time: 1000 // the speed time in ms
      });
    }
  }


  function init_menumobile()
  {
    $('.navbar-collapse ul li a').on('click', function (e)
    {
      $('.navbar-toggle:visible').click();
    });
  }


  /*------------------------------------------*/
  /*           /*.  CounterUp /*
  /*------------------------------------------*/


  function init_counterup()
  {
    if ($("span.count").length > 0)
    {
      $('span.count').counterUp(
      {
        delay: 10, // the delay time in ms
        time: 1000 // the speed time in ms
      });
    }
  }


  /*------------------------------------------*/
  /*           /*.  WOW ANIMATION /*
  /*------------------------------------------*/


  function init_wowanimation()
  {
    var wow = new WOW(
    {
      mobile: false
    });
    wow.init();
  }


  /*------------------------------------------*/
  /*           /*.  Testimonial /*
  /*------------------------------------------*/


  function init_testimonialcarousel()
  {
    $("#Testimonial").owlCarousel(
    {
      navigation: true,
      navigationText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>'
      ],
      singleItem: true,
      autoPlay: true,
      pagination: false
    });
  }

  /*------------------------------------------*/
  /*           /*.  Team /*
  /*------------------------------------------*/

  function init_team()
  {
    var slider = new MasterSlider();
    slider.setup('teamslider',
    {
      loop: true,
      width: 240,
      height: 240,
      speed: 20,
      view: 'focus',
      preload: 'all',
      space: 0,
      wheel: true
    });
    slider.control('arrows');
    slider.control('slideinfo',
    {
      insertTo: '#staff-info'
    });

    $('#myTab a').on(function (e)
    {
      e.preventDefault();
      $(this).tab('show');
    });
  }


  /*------------------------------------------*/
  /*           /*.  Team-2 /*
  /*------------------------------------------*/

  function init_teamcarousel()
  {
    $('.team-carousel').owlCarousel(
    {
      navigation: true,
      navigationText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>'
      ],
      items: 3,
      itemsDesktop: [1024, 3],
      itemsDesktopSmall: [991, 3],
      itemsTablet: [768, 2],
      itemsMobile: [480, 1],
      pagination: false,
      autoPlay: false

    });
  }


  /*------------------------------------------*/
  /*           /*. App Slide /*
  /*------------------------------------------*/


  function init_appslide()
  {
    $('.join-us .carousel').carousel(
    {
      navigation: true,
      navigationText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>'
      ],
      singleItem: true,
      autoPlay: true,
      pagination: false
    });
  }


  /*------------------------------------------*/
  /*           /*. Screenshots /*
  /*------------------------------------------*/


  function init_screen()
  {
    $("#owl-screenshots").owlCarousel(
    {
      autoPlay: 3000,
      items: 3,
      itemsDesktop: [1200, 3],
      itemsDesktopSmall: [991, 3],
      itemsTablet: [768, 2],
      itemsMobile: [480, 1],
      slideSpeed: 900,
      navigation: true,
      navigationText: [
        '<i class="fa fa-arrow-left"></i>',
        '<i class="fa fa-arrow-right"></i>'
      ],

      pagination: false
    });
  }

  /*------------------------------------------*/
  /*           /*. clients /*
  /*------------------------------------------*/

  function init_clients()
  {
    $("#clients").owlCarousel(
    {
      autoPlay: 3000,
      items: 5,
      itemsDesktop: [1200, 4],
      itemsDesktopSmall: [991, 3],
      itemsTablet: [768, 2],
      itemsMobile: [480, 1],
      slideSpeed: 900,
      navigation: false,
      pagination: false,
    });
  }


  /*------------------------------------------*/
  /*           /*. Go to top /*
  /*------------------------------------------*/


  function init_gototop()
  {
    if ($('#back-to-top').length)
    {
      var scrollTrigger = 100,
        backToTop = function ()
        {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger)
          {
            $('#back-to-top').addClass('show');
          }
          else
          {
            $('#back-to-top').removeClass('show');
          }
        };
      backToTop();
      $(window).on('scroll', function ()
      {
        backToTop();
      });
      $('#back-to-top').on('click', function (e)
      {
        e.preventDefault();
        $('html,body').animate(
        {
          scrollTop: 0
        }, 900);
      });
    }
  }


  /*------------------------------------------*/
  /*           /*. Count Down /*
  /*------------------------------------------*/


  function init_countdown()
  {
    if ($(".count-down").length)
    {
      var year = parseInt($(".count-down").attr("data-countdown-year"), 10);
      var month = parseInt($(".count-down").attr("data-countdown-month"), 10) - 1;
      var day = parseInt($(".count-down").attr("data-countdown-day"), 10);
      $(".count-down").countdown(
      {
        until: new Date(year, month, day),
        padZeroes: true
      });
    }
  }


  /*------------------------------------------*/
  /*           /*. Skills Chart /*
  /*------------------------------------------*/


  function init_chart()
  {
    $(document).scroll(function ()
    {
      var index = 0;
      var top = $('#skills').height() - $(window).scrollTop();
      console.log(top);
      if (top < -800)
      {
        if (index === 0)
        {
          $('.chart').easyPieChart(
          {
            easing: 'easeOutBounce',
            onStep: function (from, to, percent)
            {
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });
        }
        index++;
      }
    });
  }


})(jQuery); // JavaScript Document

