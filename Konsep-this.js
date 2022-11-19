// this
var a = 10;
console.log(window.a);

// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log("halo");
// }
// this.halo();
// this mengembalikan objcet global

// cara 2- objcet literal
// var obj = { a: 10, nama: "ramadoni" };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();
// this mengembalikan object yag bersangkutan

// cara 3 - constructor
function Halo() {
  console.log(this);
  console.log("halo");
}
const obj1 = new Halo();
const obj2 = new Halo();
// this mengebalikan object yang baru dibuat
