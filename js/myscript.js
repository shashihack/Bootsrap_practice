$(document).ready(function(){
    'use strict';
$('.center').slick({
  centerMode: true,
     infinite: true,
  centerPadding: '60px',
  slidesToShow: 4,
   autoplay: true,
     responsive: [
    {
      breakpoint: 768,
      settings: {
       
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
          
      }
    }
  ]
});
    $('.slick-next').hide();
    $('.slick-prev').hide();
});