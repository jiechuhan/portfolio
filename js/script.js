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
        }
        else{
          // $(".header").css('background','black');
          $(".bg-change").removeClass('bg-transparent');
        }
      });



  });