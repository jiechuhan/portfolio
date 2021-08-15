$(document).ready(function(){
  $(".scrolldown").on('click', function() {
      console.log("123");
      $("html, body").animate({
          scrollTop: $(".home-section").offset().top
      }, 500);
  });

  $(window).scroll(function () {
    if( this.scrollY > this.innerHeight / 2 ){
        // $(".header").css('background','transparent');
      $(".bg-change").addClass('bg-transparent');
      $("nav").addClass("sticky");
      $(".logo img").attr('src', "assets/img/CJ.png");
    }
    else{
      // $(".header").css('background','black');
      $(".bg-change").removeClass('bg-transparent');
      $("nav").removeClass("sticky");
      $(".logo img").attr('src', "assets/img/CJ-2.png");
    }

  });

  $(".burger").on('click', function () {
    // Toggle Nav
    $(".nav-links").toggleClass('nav-active');

    // Animate Links
    $(".nav-links li").each(function(index) {
      if (this.style.animation) {
        $(this).css(
          "animation", ""
          );
      } else {
        $(this).css(
          "animation", `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        );
      }
    });

    // Burger Animation
    $(".burger").toggleClass("toggle");
      
  });



});