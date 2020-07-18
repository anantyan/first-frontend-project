$(() => {
  // tambah barang
  $(document).on("click", "#tambah-barang", function () {
    $("#form-barang").append('<div class="border rounded px-3 pt-3 mb-1 borderan-saya">\
      <div class="form-group row mb-0">\
        <div class="col-4">\
          <label for="nama-barang">Nama barang</label>\
        </div>\
        <div class="col-4">\
          <label for="harga-barang">Jenis barang</label>\
        </div>\
        <div class="col-4">\
          <label for="harga-barang">Stok barang</label>\
        </div>\
      </div>\
      <div class="form-group row">\
        <div class="col-4">\
          <input type="text" required class="form-control">\
        </div>\
        <div class="col-4">\
          <input type="text" required class="form-control">\
        </div>\
        <div class="col-2">\
          <input type="text" required class="form-control">\
        </div>\
        <div class="col-2">\
          <button type="button" class="btn btn-danger w-100 shadow-sm" id="hapus-barang">Hapus barang</button>\
        </div>\
      </div>\
    </div>');
  });

  // button tambah barang
  $("body").on("click", "#hapus-barang", function () {
    if ($("#form-barang").children().length == 1) return false;
    $(this).parents(".borderan-saya").remove();
  });

  // shortcut button tambah barang
  $(document).bind('keydown', function (e) {
    if (e.shiftKey && (e.which == 107 || e.which == 187)) {
      $("#tambah-barang").trigger("click");
      return false;
    }
  });
});