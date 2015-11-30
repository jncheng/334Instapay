$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.headerCopy');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('border-bottom', '1px solid #eeeeee');
       } else {
          $('.navbar-default').css('border', 'transparent');
       }
   });
    }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 460) {
      $('#status').addClass('navbar-fixed');
      $('#status').removeClass('navbar-relative');
    }
    if ($(window).scrollTop() < 461) {
      $('#status').removeClass('navbar-fixed');
      $('#status').addClass('navbar-relative');

    }
  });
});