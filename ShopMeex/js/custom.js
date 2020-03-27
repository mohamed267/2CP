// Cart Checkout Widget NavBar

function cartIconAnimation(){
  var tl = new TimelineMax({delay:0.1});
  tl.staggerFromTo('#cart-icon .st1', 0.3, {
      opacity: 0,
      scaleX: 0,
      ease:  Back.easeOut
  }, {
      opacity: 1,
      scaleX: 1,
      ease:  Back.easeOut
  },0.1);
} 

function cartRemoveIconAnimation(){
    var tl = new TimelineMax({delay:0.1});
      tl.staggerFromTo('#cart-icon .st1', 0.3, {
          opacity: 1,
          scaleX: 1,
          ease:  Back.easeOut
      }, {
          opacity: 0,
          scaleX: 0,
          ease:  Back.easeOut
      },0.1); 
}

$(document).ready(function() {
    // loader
    var tl = new TimelineMax({ 
        delay: 0.1,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
    });
    tl.staggerFromTo('.cart-loader .cls-2', 0.3, {
        opacity: 0,
        scaleX: 0,
        ease: Power4.easeOut
    }, {
        opacity: 1,
        scaleX: 1,
        ease: Power4.easeOut
    }, 0.2);

    $('.loader_container').delay(1000).fadeOut('slow');
	$('[placeholder]').focus(function() {
		$(this).attr('data-text', $(this).attr('placeholder')); // For Hiding & Showing Placeholder Text
		$(this).attr('placeholder', '');
	}).blur(function() {
		$(this).attr('placeholder', $(this).attr('data-text'));
	});

    $('.fa-times').on('click', function(e) {
        e.preventDefault();
        $('.promo-popup, .popup-overlay').fadeOut(400);

    });

    $('.gototop').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop: $('html').offset().top}, 500);
        });

    $(window).on('scroll', function(e) {
            e.preventDefault();
            if ($(window).scrollTop() > 200) {
                $('.gototop').addClass('active');
            } else {
                $('.gototop').removeClass('active');
            }
    });

    $('select').niceSelect();

    $("svg#cart-icon").mouseenter(function(){
    cartIconAnimation();   
    });

    $("svg#cart-icon").mouseleave(function(){
    cartRemoveIconAnimation();  
    });

    $('.banner-slides').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
    });

    $('div.tab-panel.newpro').show();
    $('.nav-link.active').attr('aria-selected', 'true');
    $('.tab-panel:eq(0)').css('display', 'block');
    $('.nav-link').click(function(e) {
        e.preventDefault();
        $('.nav-link.active').removeClass('active');
        $('.nav-link').attr('aria-selected', 'false');
        $(this).addClass('active');
        $(this).attr('aria-selected', 'true');
        for (var i = 0; i < 8; i++) {
            var idTabPanel = $('.tab-panel')[i].id;
            var myId = $('.nav-link.active').attr('href');
            if (myId == '#' + idTabPanel) {
                $('.tab-panel').fadeOut(350);
                $('.tab-panel:eq('+i+')').fadeIn(350);
                $('div.tab-panel.newpro').show();
            }
        }
        $('div.tab-panel.newpro').show();
    });

    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(
                '<div class="cdown"><span class="days"><strong>%-D</strong><p>Days.</p></span></div><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours.</p></span></div> <div class="cdown"><span class="minutes"><strong>%M</strong> <p>MINUTES.</p></span></div><div class="cdown"><span class="second"><strong> %S</strong><p>SECONDS.</p></span></div>'
            ));
        });
    });

});