$(document).ready(function(){
  // show hide password
  $(".show").mousedown(function() {
    $(".show-pass").replaceWith($('.show-pass').clone().attr('type', 'text'));
  })
  .mouseup(function() {
    $(".show-pass").replaceWith($('.show-pass').clone().attr('type', 'password'));
  })
  .mouseout(function() {
    $(".show-pass").replaceWith($('.show-pass').clone().attr('type', 'password'));
  });
  $(".show-se").mousedown(function() {
    $(".show-pass-se").replaceWith($('.show-pass-se').clone().attr('type', 'text'));
  })
  .mouseup(function() {
    $(".show-pass-se").replaceWith($('.show-pass-se').clone().attr('type', 'password'));
  })
  .mouseout(function() {
    $(".show-pass-se").replaceWith($('.show-pass-se').clone().attr('type', 'password'));
  });
  // sidebar menu
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
    o.append('<button class="close"><span aria-hidden="true">×</span></button>');
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

  // form nota
  $(document).on("click",".add-more", function() {
    //var html = $("#nota .input-group:last-child").html();
    $("#nota").append("<div class='input-group control-group row m-2'>"+
      '<div class="col-2">\
          <input type="number" name="" class="form-control" placeholder="Qty" required>\
      </div>\
      <div class="col-5">\
        <input type="text" name="" class="form-control" placeholder="Barang/Jasa" required>\
      </div>\
      <div class="col-2">\
        <input type="text" name="" class="form-control text-right" placeholder="Harga satuan" required>\
      </div>\
      <div class="col-2">\
        <input type="text" name="" class="form-control text-right" placeholder="Jumlah harga" required>\
      </div>\
      <div class="col-1">\
        <a class="btn btn-danger remove"><i class="text-white icon ion-md-close-circle-outline"></i></a>\
      </div>'+
    "</div>");
  });
  $("body").on("click", ".remove", function() {
    if( $("#nota").children().length==1) return false;
    $(this).parents(".control-group").remove();
  });
  // shortcut tambah
  $(document).bind('keydown', function(e) {
    if (e.altKey && (e.which == 107 || e.which == 187)) {
      $(".add-more").trigger("click");
      return false;
    }
  });
  
  // chart js - statistik line
  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ['Janu', 'Febi', 'Mara', 'April', 'Mei', 'Juni', 'Juli', 'Agus', 'Septi', 'Okta', 'Nova', 'Desi'],
      datasets: [{
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478, 2312, 1231],
        label: "Marketplace",
        backgroundColor: "#3e95cd",
        fill: false
      }, {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267, 3219, 5039],
        label: "Web & Blog",
        backgroundColor: "#8e5ea2",
        fill: false
      }, {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734, 890, 900],
        label: "Instagram",
        backgroundColor: "#3cba9f",
        fill: false
      }, {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784, 320, 600],
        label: "Youtube",
        backgroundColor: "#e8c3b9",
        fill: false
      }]
    },
    options: {
      title: {
        display: true,
        text: 'SIMAK! Layanan'
      },
      tooltips: {
        mode: 'index'
      }
    }
  });
});