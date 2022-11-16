var tanya = true;
while (tanya) {
  // Menangkap pilihan Player
  var p = prompt("Pilih : gajah, semut, orang");

  // Menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  console.log(comp);

  var hasil = "";
  //menentukan rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "MENANG";
    //   } else {
    //     hasil = "HASIL";
    //   }
    hasil = comp == "orang" ? " MENANG!" : " KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? " KALAH!" : " MENANG!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? " KALAH!" : " MENANG!";
  } else {
    hasil = "Memasukkan PIlhan Yang salah";
  }

  // Tampilkan Hasilnyaa
  alert("Kamu Memilih : " + p + "dan Komputer memlih: " + comp + "\nMaka Hasilnya : Kamu " + hasil);
  tanya = confirm("Lagi");
}
alert("Terimakasih sudah Bermain :)");
