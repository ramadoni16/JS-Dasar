// Function Declaration(Lebih Fleksibel (dapat ditulis dimanapun), Mudah dipahami pemula)
// Rumus Menulis Function Declaration
// => function identifier (ParamterList optional) {FunctionBody}

// xample penulisan function Declaration
function tampilPesan(nama) {
  alert("halo" + nama);
}

// Function Expression(Harus didefinisikan terlebih dahulu sebelum dipanggil, Lebih Powerfull)
// Rumus Menulis Function Expression
// => function identifier optional (ParamterList optional) {FunctionBody}

// xample penulisan function Expression
var tampilPesan = function (nama) {
  alert("halo" + nama);
};
