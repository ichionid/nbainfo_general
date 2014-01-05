(function ($) {
  Drupal.behaviors.nbainfo_general = {
    attach: function (context, settings) {
      var page = window.location.pathname;
      if (page=='/nbalive') {
        $("#logo img").fadeOut(2000);
        $("#logo").attr("src", "/sites/default/files/nbainfologo2.png");
        $("#logo img").attr("src", "/sites/default/files/nbainfologo2.png");
        $("#logo img").fadeIn(500);
      }
      $('div.pane-shoutbox-shoutbox h2').replaceWith('<h2 class="pane-title"><a href="shoutbox">Chat</a></h2>');
    }
  };
})(jQuery);

