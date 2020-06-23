//1. membuat objek literal
//pembuatan objek ini tidak efektif berskala besar
// let hero = {
//     nama : 'Nina Fani Sarafina',
//     energi : 10,
//     makan : function(porsi) {
//       this.energi = this.energi + porsi ;
//       console.log('Welcome ' + this.nama + ' Selamat Makan');
//     }
//
// }
//
// let hero2 = {
//     nama : 'Gerry',
//     energi : 20,
//     makan : function(porsi) {
//       this.energi = this.energi + porsi ;
//       console.log('Welcome ' + this.nama + ' Selamat Makan');
//     }
//
// }

//2. function declaration
// const her ={
//   makan : function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log('Welcome ' + this.nama + ' Selamat Makan!');
//   },
//   olahraga :function(jam) {
//     this.energi = this.energi - jam;
//     console.log('Welcome ' + this.nama + ' Selamat Olahraga!');
//   }
// };
// function Heroes(nama,energi) {
//   let hero = Object.create(her);
//   hero.nama = nama;
//   hero.energi = energi;
//
//
//       return hero;
// }
//
// let pahlawan = Heroes('Nina Fani',15);
// let pahlawan2 = Heroes('Bill Gates',20);

// 3. konstruktor function
// function Heroes(nama,energi) {
//   //punya keyword this
//   this.nama = nama;
//   this.energi = energi;
//       Heroes.prototype.makan = function(porsi) {
//         this.energi = this.energi + porsi;
//         return 'Welcome ' + this.nama + ' Selamat Makan!';
//       }
//       Heroes.prototype.olahraga = function(jam) {
//         this.energi = this.energi - jam;
//         return 'Welcome ' + this.nama + ' Selamat Olahraga!';
//       }
//
// }
//
// let pahlawan = new Heroes('Nina Fani',15);
// let pahlawan2 = new Heroes('Bill Gates',20);

//4. varsi class
class Heroes {
  constructor(nama,energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
    this.energi = this.energi + porsi;
    return 'Welcome ' + this.nama + ' Selamat Makan!';
  }
  olahraga(jam) {
    this.energi = this.energi - jam;
    return 'Welcome ' + this.nama + ' Selamat Olahraga!';
  }
}

let pahlawan = new Heroes('Nina Fani',15);
let pahlawan2 = new Heroes('Bill Gates',20);
