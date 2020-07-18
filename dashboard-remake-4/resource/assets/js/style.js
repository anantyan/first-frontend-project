$(document).ready(function() {
  // hover menu jadwal
  $('.dropdown-saya-juga, #dropdown-saya').hover(function() {
    $('.dropdown-saya-juga').stop().slideDown(200);
    // rotate icon
    $('#dropdown-saya i').addClass('rotate-icon');
  }, function(){
    $('.dropdown-saya-juga').stop().slideUp(200);
    // rotate icon
    $('#dropdown-saya i').removeClass('rotate-icon');
  });
});