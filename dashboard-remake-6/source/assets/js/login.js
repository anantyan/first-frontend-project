$(() => {
  // show hide password
  $("#masuk-show").mousedown(function () {
    $("#masuk-show-pass").replaceWith($('#masuk-show-pass').clone().attr('type', 'text'));
  })
  .mouseup(function () {
    $("#masuk-show-pass").replaceWith($('#masuk-show-pass').clone().attr('type', 'password'));
  })
  .mouseout(function () {
    $("#masuk-show-pass").replaceWith($('#masuk-show-pass').clone().attr('type', 'password'));
  });

  // show hide password
  $("#daftar-show").mousedown(function () {
    $("#daftar-show-pass").replaceWith($('#daftar-show-pass').clone().attr('type', 'text'));
  })
  .mouseup(function () {
    $("#daftar-show-pass").replaceWith($('#daftar-show-pass').clone().attr('type', 'password'));
  })
  .mouseout(function () {
    $("#daftar-show-pass").replaceWith($('#daftar-show-pass').clone().attr('type', 'password'));
  });

  // show hide password
  $("#daftar-show-re").mousedown(function () {
    $("#daftar-show-re-pass").replaceWith($('#daftar-show-re-pass').clone().attr('type', 'text'));
  })
  .mouseup(function () {
    $("#daftar-show-re-pass").replaceWith($('#daftar-show-re-pass').clone().attr('type', 'password'));
  })
  .mouseout(function () {
    $("#daftar-show-re-pass").replaceWith($('#daftar-show-re-pass').clone().attr('type', 'password'));
  });
});