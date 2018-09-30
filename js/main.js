jQuery(document).ready(function($) {
  $(document).scroll(function() {
    if ($(window).scrollTop()>=$('#cover').height()) {
      $('#cover nav').addClass('change-TopNav')
    } else {$('#cover nav').removeClass('change-TopNav')
      $('#cover .nav-link').hover(function() {
        $(this).css({
          color: 'var(--main-color)'
        });;
      }, function() {
        $(this).css({
          color: 'aliceblue'
        });;
      });
  }
  });
});

jQuery(document).ready(function() {
  $('.cardimg').click(function() {
    $('.gallery').fadeTo(200,1);
  });
  $('.closeCarousel').click(function() {
    $(".gallery").fadeOut(200);
  });
});






































$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });