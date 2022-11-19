// Membuat Object
// (object Literal) 1.
// var mhs = {
//   nama: "Ramadoni",
//   umur: 22,
//   ips: [3.5, 3.6, 3.7],
//   alamat: {
//     jalan: "Lintas Liwa Sumber Jaya",
//     kota: "Liwa",
//     provinsi: "Lampung",
//   },
// };

// Mmembuat Object Literal
// var mhs1 = {
//   nama: "Ramadoni",
//   nrp: "12344321",
//   email: "doni@gmail.com",
//   jurusan: "Teknik Informatika",
// };

// var mhs2 = {
//   nama: "messi",
//   nrp: "43214321",
//   email: "messi@gmail.com",
//   jurusan: "Teknik Informatika",
// };

// Funtion Declaration
function buatObjectMhs(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}
var mhs3 = buatObjectMhs("Jarwo", "1902032", "jarwo@gmail.com", "teknik informatika");
var mhs4 = buatObjectMhs("sopo", "00000021", "sopo@gmail.com", "teknik industri");

// Constuctor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}
const mhs5 = new Mahasiswa("Ramadoni", "540958095809", "upin@gmail.com", "teknik permasalahan");

// membuat object
// cara 1 - function declaration
// function halo(params) {
//   console.log("halo");
// }
// halo();

// cara 2 - objcet literal
// var obj = {};
// obj.halo = function (params) {
//   console.log("halo");
// };
// obj.halo();

// cara 3 - constructor
// function Halo() {
//   console.log("halo");
// }
// new Halo();
