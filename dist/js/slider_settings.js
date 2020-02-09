$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 30,
        loop: true,
        dotClass: 'teacher__carousel_dot',
        dots: 2,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 4
            }
        }
    });
  });