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
          scrollTop: target.offset().top -140
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
      if (($(window).scrollTop() > 460)){

    // if (($(window).scrollTop() > 460) && ($(window).width < 460)){
      $('#status').addClass('navbar-fixed');
      $('#status').removeClass('navbar-relative');
    }
    if (($(window).scrollTop() < 461)) {

    // if (($(window).scrollTop() < 461) && ($(window).width < 460) ) {
      $('#status').removeClass('navbar-fixed');
      $('#status').addClass('navbar-relative');

    }
    if($(window).width < 460){
      $('#status').removeClass('navbar-fixed');

      $('#status').addClass('navbar-relative');
    }
  });
});

// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
$(window).scroll(function() {    
    if(isScrolledIntoView($('#research')))
    {
      $('#nav_designGuide').removeClass('scrollPosition');
      $('#nav_research').addClass('scrollPosition'); 
    }   
    if(isScrolledIntoView($('#designGuide')))
    {
      $('#nav_designGuide').addClass('scrollPosition'); 
      $('#nav_research').removeClass('scrollPosition');
      $('#nav_userFlow').removeClass('scrollPosition');

    }   
    if(isScrolledIntoView($('#userFlow')))
    {
      $('#nav_userFlow').addClass('scrollPosition'); 
      $('#nav_designGuide').removeClass('scrollPosition');
      $('#nav_sketches').removeClass('scrollPosition');
    }   
    if(isScrolledIntoView($('#sketches')))
    {
      $('#nav_sketches').addClass('scrollPosition'); 
      $('#nav_userFlow').removeClass('scrollPosition');
      $('#nav_wireframes').removeClass('scrollPosition');
    }   
    if(isScrolledIntoView($('#wireframes')))
    {
      $('#nav_wireframes').addClass('scrollPosition'); 
      $('#nav_sketches').removeClass('scrollPosition');
      $('#nav_prototyping').removeClass('scrollPosition');
    }   
    if(isScrolledIntoView($('#prototyping')))
    {
      $('#nav_prototyping').addClass('scrollPosition'); 
      $('#nav_wireframes').removeClass('scrollPosition');
      $('#nav_userTesting').removeClass('scrollPosition');
    }   
    if(isScrolledIntoView($('#userTesting')))
    {
      $('#nav_userTesting').addClass('scrollPosition'); 
      $('#nav_prototyping').removeClass('scrollPosition');
      $('#nav_research').removeClass('scrollPosition');
    }  
    if(isScrolledIntoView($('#refinement')))
    {
      $('#nav_refinement').addClass('scrollPosition'); 
      $('#nav_userTesting').removeClass('scrollPosition');
    }    

});