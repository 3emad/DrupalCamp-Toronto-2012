(function($){
  $(window).load(function() {
    /* prepend menu icon */
    $path = "/development-work/sites/2012.drupalcamptoronto.org/themes/dcto2012/images/menu-icon.png";
    $('#block-menu-menu-mobile-menu').prepend('<div style="text-align: right; color: #FFF; padding: 15px 15px;" id="menu-icon"><img src="' + $path + '" style="margin-right: 5px;"/>Menu</div>');
    /* toggle nav */
    $("#menu-icon").click(function(){
      $('#block-menu-menu-mobile-menu .block-inner').slideToggle();
      $(this).toggleClass("active");
    });
    /* start closed */
    $('#block-menu-menu-mobile-menu .block-inner').hide();
  });
})(jQuery);

