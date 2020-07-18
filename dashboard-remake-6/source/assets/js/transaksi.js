$(() => {
  // tambah barang
  $(document).on("click", "#tambah-barang", function () {
    $("#form-barang").append('<div class="form-group row">' + "\n" +
      '  <div class="col-6">' + "\n" +
      '    <select id="harga-barang" class="custom-select form-control form-control-sm shadow-sm">' + "\n" +
      '       <option selected>Pilihan..</option>' + "\n" +
      '       <option value="1">Mobil Ferarri 456GT</option>' + "\n" +
      '       <option value="2">Laptop HP EliteBook 1050 UHD Intel</option>' + "\n" +
      '       <option value="3">Motor Ninja Kawasaki H2R</option>' + "\n" +
      '    </select>' + "\n" +
      '  </div>' + "\n" +
      '  <div class="col-4">' + "\n" +
      '     <select id="harga-barang" class="custom-select form-control form-control-sm shadow-sm">' + "\n" +
      '       <option selected>Pilihan..</option>' + "\n" +
      '       <option value="1">12000000</option>' + "\n" +
      '       <option value="2">12000000</option>' + "\n" +
      '       <option value="3">12000000</option>' + "\n" +
      '    </select>' + "\n" +
      '  </div>' + "\n" +
      '  <div class="col-2">' + "\n" +
      '    <button type="button" class="btn btn-danger w-100 shadow-sm" id="hapus-barang">Hapus barang</button>' + "\n" +
      '  </div>' + "\n" +
      '</div>');
  });

  // button tambah barang
  $("body").on("click", "#hapus-barang", function () {
    if ($("#form-barang").children().length == 1) return false;
    $(this).parents(".form-group").remove();
  });

  // shortcut button tambah barang
  $(document).bind('keydown', function (e) {
    if (e.shiftKey && (e.which == 107 || e.which == 187)) {
      $("#tambah-barang").trigger("click");
      return false;
    }
  });

  // on change form transaksi
  $('#input-nama').on('change', function () {
    var inputNama = $(this).val();
    if (inputNama) {
      $('#alamat-penerima').html('\
        <option selected>Pilihan..</option>\
        <option value="1">Banjar</option>\
      ');
      $('#nomor-hp').html('<option selected>Pilihan..</option>');
    } else {
      $('#alamat-penerima').html('<option selected>Pilihan..</option>');
      $('#nomor-hp').html('<option selected>Pilihan..</option>');
    }
  });
  $('#alamat-penerima').on('change', function () {
    var alamatPenerima = $(this).val();
    if (alamatPenerima) {
      $('#nomor-hp').html('\
        <option selected>Pilihan..</option>\
        <option value="1">081234567890</option>\
      ');
    } else {
      $('#nomor-hp').html('<option selected>Pilihan..</option>');
    }
  });

  // select2 js
  $("#input-nama, #alamat-penerima, #nomor-hp, #jenis-transaksi, #nama-barang, #harga-barang").select2({
    placeholder:'Pilihan',
    theme: 'bootstrap'
  })

  // responsive select2 js
  $("span.select2").css({
    'width':'100%'
  });

});