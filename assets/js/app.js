$(function(){
    // HERO SLIDER START =================================================================
      $('.hero_slider').slick({
          arrows: false,
          autoplay: true,
          fade:true,
          speed:1000,
          dots: true,
          appendDots: $(".slider_dots"),
          dotsClass: "hero_slider_dots"
      });
    // HERO SLIDER END =================================================================

    // PRODUCT SLIDER START =================================================================
      $('.product_slider').slick({
          slidesToShow:4,
          autoplay:true,
          speed: 1000,
          prevArrow: '<i class="fa-solid fa-chevron-left product_slider_arrows"></i>',
          nextArrow: '<i class="fa-solid fa-chevron-right product_slider_arrows"></i>',
          responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 3,
                  },
              },
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2,
                  },
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                  },
              },
          ],
      });
    // PRODUCT SLIDER END =================================================================

    // DEAL DAY SLIDER START =================================================================
      $('.deal_day_box_slider').slick({
          slidesToShow:2,
          arrows: false,
          autoplay: true,
          speed:1000,
          dots: true,
          appendDots: $(".deal_slider_dots"),
          dotsClass: "deal_day_slider_dots",
          responsive: [
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 1,
                  },
              },
          ],
      });
    // DEAL DAY SLIDER END =================================================================

    // LATEST NEWS SLIDER START =================================================================
      $('.latest_news_slider').slick({
          slidesToShow:4,
          arrows: false,
          autoplay: true,
          speed:1000,
          dots: true,
          appendDots: $(".latest_slider_dots"),
          dotsClass: "latest_news_slider_dots",
          responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 3,
                  },
              },
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2,
                  },
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                  },
              }
          ]
      });
    // LATEST NEWS SLIDER END =================================================================

    // LEADERSHIP SLIDER START =================================================================
      $('.leadership_slider').slick({
          slidesToShow:4,
          autoplay:true,
          speed: 1000,
          prevArrow: '<i class="fa-solid fa-chevron-left leadership_slider_arrows"></i>',
          nextArrow: '<i class="fa-solid fa-chevron-right leadership_slider_arrows"></i>',
          responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 3,
                  },
              },
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2,
                  },
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                  },
              },
              {
                  breakpoint: 576,
                  settings: {
                      slidesToShow: 1,
                  },
              }
          ]
      });
    // LEADERSHIP SLIDER END =================================================================

    // ABOUT ANIMATE SLIDER START =================================================================
      $('.animate_silder').slick({
          slidesToShow:1,
          arrows: false,
          autoplay: true,
          fade: true,
          speed:1000,
          dots: true,
          appendDots: $(".animation_slider_dots"),
          dotsClass: "animate_slider_dots"
      });
    // ABOUT ANIMATE SLIDER END =================================================================

    // ABOUT INSTAGRAM SLIDER START =================================================================
      $('.instagram_silder').slick({
          slidesToShow:6,
          arrows: false,
          autoplay: true,
          speed:1000,
          dots: true,
          appendDots: $(".insta_slider_dots"),
          dotsClass: "instagram_slider_dots",
          responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 5,
                  },
              },
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 4,
                  },
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 3,
                  },
              },
              {
                  breakpoint: 576,
                  settings: {
                      slidesToShow: 2,
                  },
              }
          ]
      });
    // ABOUT INSTAGRAM SLIDER END =================================================================

    // SHOP DETAILS SLIDER START =================================================================
      $('.details_sliders').slick({
          arrows: false,
          autoplay: true,
          fade: true,
          speed:1000,
          asNavFor:'.bottom_details_sliders'
      });
    // SHOP DETAILS SLIDER END =================================================================

    // SHOP BOTTOM DETAILS SLIDER START =================================================================
      $('.bottom_details_sliders').slick({
          slidesToShow:5,
          arrows: true,
          autoplay: true,
          speed:1500,
          centerMode:true,
          centerPadding: '10px',
          focusOnSelect: true,
          asNavFor:'.details_sliders',
          prevArrow: '<i class="fa-solid fa-chevron-left shop_details_slider_arrows"></i>',
          nextArrow: '<i class="fa-solid fa-chevron-right shop_details_slider_arrows"></i>',
          responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 4,
                  },
              },
              {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 5,
                  },
              },
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 3,
                  },
              }
          ]
      });
    // SHOP BOTTOM DETAILS SLIDER END =================================================================

    // BLOG DETAILS SLIDER START =================================================================
      $('.blog_slider').slick({
          arrows: true,
          autoplay: true,
          speed:1000,
          prevArrow: '<i class="fa-solid fa-chevron-left blog_slider_arrows"></i>',
          nextArrow: '<i class="fa-solid fa-chevron-right blog_slider_arrows"></i>'
      });
    // BLOG DETAILS SLIDER END =================================================================


    // SEARCH SECTION START ==================
      $('.search_open_btn').on('click', ()=>{
          $('#search').addClass('open');
      });
      $('.search_close_btn').on('click', ()=>{
          $('#search').removeClass('open');
      });
    // SEARCH SECTION END ==================
    
    // CART SECTION START ==================
      $('.cart_open_btn').on('click', ()=>{
          $('#cart').addClass('open');
      })
      $('.cart_close_btn').on('click', ()=>{
          $('#cart').removeClass('open');
      });
    // CART SECTION END ==================
    
    // POPUP SECTION START ==================
      $('.popup_close_btn').on("click", ()=>{
          $('#popup').addClass('open')
      });
    // POPUP SECTION END ==================

    // HOME TIMER  =================================================================
      $('[data-countdown]').each(function() {
          var $this = $(this), finalDate = $(this).data('countdown');
          $this.countdown(finalDate, function(event) {
              $(this).html(event.strftime("" + 
              "<li><h4>%D</h4> <small>Days</small></li>" + 
              "<li><span>:</span></li>" + 
              "<li><h4>%H</h4> <small>Hours</small></li>"+ 
              "<li><span>:</span></li>" + 
              "<li><h4>%M</h4> <small>Minutes</small></li>"+ 
              "<li><span>:</span></li>" + 
              "<li><h4>%S</h4> <small>Second</small></li>"));
          });
      });
    // HOME TIMER  =================================================================

    // INCEREMENT DECREMENT BUTTON =================================================================
      $('.decrement').on('click', function(){
          let cart_value = $(this).siblings('input').val();
          if(cart_value > 1){
            $(this).siblings('input').val(cart_value -1)
          }
      })
      $('.increment').on('click', function(){
          let cart_value = $(this).siblings('input').val();
          $(this).siblings('input').val(Number(cart_value) + 1)
      })
    // INCEREMENT DECREMENT BUTTON =================================================================

    // BACK TO TOP BUTTON =================================================================
      $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();

        if (scrollTop > 800){
            $('.back_to_top').addClass('active')
        }else{
            $('.back_to_top').removeClass('active')
        };

      });

      $('.back_to_top').on('click', function(){
        $('html,body').animate({
            scrollTop : 0
        }, 800)

      });
    // BACK TO TOP BUTTON =================================================================

    // NAVBAR ANIMATION =================================================================
      $(window).scroll(function(){
          let scrollTop = $(window).scrollTop();
          let scrollTopvalue = $('#nav').offset().top;

          if(scrollTop > 200){
              $('#nav').addClass('down')
          }else{
              $('#nav').removeClass('down')
          }
      });
    // NAVBAR ANIMATION =================================================================

    // NUMBER COUNT =================================================================
      $('.count').counterUp({
          delay: 10,
          time: 1000
      });
    // NUMBER COUNT =================================================================
});
    
    // TOOLTIP =================================================================
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    // TOOLTIP =================================================================

    // VIDEO VENOBOX =================================================================
      new VenoBox();
      new VenoBox();
    // VIDEO VENOBOX =================================================================