//function expression
// const tampilNama = function (nama) {
//   return 'Halo '+nama;
// }
// console.log(tampilNama('Nina Fani'));

/*
arrow function adalah bagaimana membuat fungsi ekspressi menjadi lebih singkat
*/
//coba arrow function
// const tampilNama = (nama) => {
//   return nama;
// }
// console.log(tampilNama('Nina Fani'));

//bagaimana jika parameternya lebih dari satu
// const tampilNama = (nama, waktu) => {
//   return 'Selamat '+waktu+nama;
// }
// console.log(tampilNama('Nina Fani','Malam'));

//jika parameternya hanya 1 kalian tidak perlu menuliskan return dan tidak usah
//memberi tanda kurung di parameternya dan menghapus kurung kurawalnya
// const tampilNama = nama => 'Halo ' + nama;
// console.log(tampilNama('Nina Fani'));




//bagaimana jika tidak ada parameter di arrow function
//walaupun tidak ada parameternya kurung ttep ada
// const tampilNama = () => 'Hello World';
// console.log(tampilNama());



//bagaimana jika mencari data array
//let mahasiswa = ['Sandhika Galih','Nina Fani Sarafina','Erik'];
//mencari banyaknya panjang string didalam array
// let jmlHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jmlHuruf);

//bagaimana jika mencari data sebuah objek
//ouput akan menghasilkan data berbentuk objek
// let jmlHuruf = mahasiswa.map(nama => ({nama:nama, jmlHuruf:nama.length}));
// console.table(jmlHuruf);



//konnsep this arrow function

//constructor function
// const mahasiswa = function () {
//   this.nama = 'Nina';
//   this.umur = 23;
//   this.sayHello = function () {
//     console.log('Halo Nama Saya '+ this.nama +' Umur saya '+ this.umur);
//   }
// }


//arrow function
// const mahasiswa = function () {
//   this.nama = 'Nina';
//   this.umur = 23;
//   //function eksperssion disimpan dulu didalam variabel
//   this.sayHello = function () {
//     console.log('Halo Nama Saya '+ this.nama +' Umur saya '+ this.umur);
//   }

  //sebuah function yg otomatis dijalankan pda interval tertentu
  //output akan NaN karena dia akan mencari variabel globalnya diatasnya
//arrow function tidak mempunya konsep this
//thisnya akan mencari hoscopenya keluar
//   setInterval( () => {
//     console.log(this.umur++);
//   },500);
// }
//  const nina = new mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click',function () {
  let satu = 'size';
  let dua = 'caption';
  if(this.classList.contains(satu)){
    [satu,dua] = [dua,satu];
  }
  this.classList.toggle(satu);
  setTimeout( () => {
    this.classList.toggle(dua);
  },600);
});
