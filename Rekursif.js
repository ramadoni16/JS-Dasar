// Sebuah Fungsi Yang memanggil dirinya sendiri
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// //////////////////
// function tampilAngka(n) {
//   console.log(n);
//   return tampilAngka(n - 1);
// }
// tampilAngka(10);

// Base Case
// kondisi akhir dari rekursif yang menghasilkan nilai

// Rekursif
// semua lloping bisa dibuat rekursif, tapi tidak sebaliknyaa

// rekursif
// function faktorial(n) {
//   if (n === 0) return 1;
//   return n * faktorial(n - 1);
// }

function cetakAngka(n) {
  if (n === 0) return;
  console.log(n);
  cetakAngka(n - 1);
  {
  }
}
