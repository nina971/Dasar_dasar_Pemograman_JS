

// var nama = 'Nina Fani Sarafina';
// var umur = '23';
// console.log(sayHello());
// function sayHello() {
//   return 'Halo Nama Saya '+ nama + ' Umur Saya '+ umur;
//
// }
//karena di hoisting kita menulis variabelnya dibawah console log
//dan sebuah function mengembalikan sebuah nilai

// var nama = 'Nina Fani Sarafina';
// var username = 'nina';
//
// function cetakURL() {
//   var instagram = 'http://instagram.com';
//   return username + instagram;
// }
// console.log(cetakURL('@raffiahmad'));
 //ini sifatnya scope variabelnya
 //akan mengecek apakah variabel username didefinisikan diatasnya
 //jika tidka ada dia mengecek di argumennya

 function satu() {
   var nama = "nina fani ";
   console.log(nama);
 }

 function dua() {
   console.log(nama);
 }

 console.log(nama); //output undefined
 var nama = 'Alex';
 satu();
 dua('Alex');
 console.log(nama);
