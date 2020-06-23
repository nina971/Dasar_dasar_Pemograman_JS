// function Sapa(salam) {
//   return function(nama) {
//     console.log('Assamualaikum '+nama+' Semoga Berkah di '+salam +' ini');
//   }
// }
//
// let selamatPagi = Sapa('Pagi');
// let selamatSiang = Sapa('Siang');
// let selamatMalam = Sapa('Malam');
//
// selamatPagi('Nina');

//closure

let add = (function () {
  let counter = 0;
  return function() {
    return ++counter;
  }
})();
//let a = add();
console.log(add());
console.log(add());
console.log(add());
