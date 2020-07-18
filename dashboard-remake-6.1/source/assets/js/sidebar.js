$(()=>{
  // sidebar
  $("#sidebar").mCustomScrollbar({
      theme: "minimal"
  });
  $('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
  });
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  // sidebar menu utama
  $(function() {
    function e() {
      s.addClass("overflow-hidden"), o.show(), setTimeout(function() {
        s.addClass("side-menu-visible"), d.fadeIn()
      }, 50)
    }

    function n() {
      s.removeClass("side-menu-visible"), d.fadeOut(), setTimeout(function() {
        o.hide(), s.removeClass("overflow-hidden")
      }, 400)
    }
    var s = $("body"),
      i = $(".navbar"),
      a = $(".navbar-collapse");
    s.append('<div class="side-menu-overlay"></div>');
    var d = $(".side-menu-overlay");
    s.append('<div id="side-menu"></div>');
    var o = $("#side-menu");
    var t = o.find(".close");
    o.append('<div class="contents"></div>');
    var l = o.find(".contents");
    i.hasClass("better-bootstrap-nav-left") && o.addClass("side-menu-left"), a.on("show.bs.collapse", function(n) {
      n.preventDefault();
      var s = $(this).html();
      l.html(s), e()
    }), t.on("click", function(e) {
      e.preventDefault(), n()
    }), d.on("click", function(e) {
      n()
    }), $(window).resize(function() {
      !a.is(":visible") && s.hasClass("side-menu-visible") ? (o.show(), d.show()) : (o.hide(), d.hide())
    })
  });

  $(".contents ul form").removeClass("my-0").addClass("mb-2");
});