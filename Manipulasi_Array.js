// Manipulasi Array
// 1. Menambahkan isi Array
// var arr = ["a", 1, true];
// console.log(arr[1]);

// ==================//
// var arr = [];
// arr[0] = "RAMADONI";
// arr[1] = "JavaScript";
// arr[2] = "ARRAY";
// console.log(arr);

// ==================//
// 2. Menghapus isi Array(Manual)
// var arr = ["RAMADONI", "JAVASCRIPT", "BELAJAR"];
// arr[1] = undefined;
// console.log(arr);

// =============//
// 3. Menampilkan isi Array
// var arr = ["RAMADONI", "MESSI", "RONALDO", "HALAND"];
// for (let i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);
//   console.log("Mahiswa ke-" + (i + 1) + ":" + arr[i]);
// }

// 4. Method Pada Array
// 1. join (Merubah Isi Array Menjadi String)
// var arr = ["RAMADONI", "JAVASCRIPT", "BELAJAR"];
// console.log(arr.join(" - "));

// 2. push & pop
// push digunakan untuk menambah array diakhir array
// var arr = ["RAMADONI", "JAVASCRIPT", "BELAJAR"];
// arr.push("JARWO");
// console.log(arr.join("-"));

// pop digunakan untuk menghilangkan elemen terakhir dari array
// var arr = ["RAMADONI", "JAVASCRIPT", "BELAJAR", "JARWO"];
// arr.pop();
// console.log(arr.join("-"));

// 3. unshift & shift
// unsift(menggeser kedalam) digunakan untuk menambahkan elemen baru diawal array
// var arr = ["RAMADONI", "JAVASCRIPT", "BELAJAR", "JARWO"];
// arr.unshift("MAHASISWA");
// console.log(arr.join("-"));

// shift(menggeser keluar)
// var arr = ["RAMADONI", "JAVASCRIPT", "BELAJAR", "JARWO"];
// arr.shift();
// console.log(arr.join("-"));

// 4. splice digunakan untuk menyambung atau menambal (bisa menyisipkan sebuah elemen ditengah emggunakan splice )
// splice (indexAwal, mauDihapusBerapa, elemeBaru1, elemenBaru2,....)
// var arr = ["RAMADONI", "MESSI", "HALAND"];
// // arr.splice(2, 0, "BERMAIN", "BOLA DENGAN");
// arr.splice(1, 2, "INFORMATIKA");
// console.log(arr.join("-"));

// 5. slice digunakan untuk mengambil beberapa bagian pada Array untuk menjadi array yang baru
// slice(awal,akhir);
// var arr = ["RAMADONI", "MESSI", "HALAND", "RONALDO", "NEYMAR"];
// var arr2 = arr.slice(1, 4);
// console.log(arr.join("-"));
// console.log(arr2.join("-"));

// 6. forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// CARA 1
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// angka.forEach(function (e) {
//   console.log(e);
// });

// CARA 2
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var cetak = function (element) {
//   console.log(element);
// };
// angka.forEach(cetak);

// CARA 3
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["RAMADONI", "MESSI", "HALAND", "RONALDO", "NEYMAR"];
// nama.forEach(function (e, i) {
//   console.log("PEMAIN KE- " + (i + 1) + " ADALAH : " + e);
// });

// 7. map
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join("-"));

// 8. sort
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join("-"));

// 9. filter(Mencari banyak nilai)
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2.join("-"));

// 10. find (Hanya menemukan satu nilai)
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function (x) {
  return x > 5;
});
console.log(angka2);
