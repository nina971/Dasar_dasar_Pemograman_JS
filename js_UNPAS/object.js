// var deksripsiOrang = {
// 	name : "Nina Fani Sarafina",
// 	age : 23,
// 	gender : "Female",
// 	hobby : "Reading",

// 	//tampilkan isi dari property nama
// 	displayName: function(){
// 			console.log(this.name);
// 	}
// };

// console.log(deksripsiOrang.name);

// var book ={
// 	name : "Harry Pother and The Goblet Fire",
// 	author:"J.K Rowling",
// 	year : 2000

// };

// console.log("Pengarng Buku Berjudul " + book.name + " Adalah " + book.author + "Pada Tahun " + book.year);

// var book ={
// 	name : "Harry Pother and The Goblet Fire",
// 	author:"J.K Rowling",
// 	year : 2000

// };

// var kunci = prompt('Masukan nama Property untuk mendapatkan nilai :');

// alert(book[kunci]);

//pengulangan melewati properti object
// var book ={
// 	name : "Harry Pother and The Goblet Fire",
// 	author:"J.K Rowling",
// 	year : 2000

// };
//  for(var i in book){
//  	console.log(book[i] + "/n");
//  }

//mngatur property baru
// var deksripsiOrang = {
// 	name : "Nina Fani Sarafina",
// 	age : 23,
// 	gender : "Female",
// 	hobby : "Reading"
// };

// deksripsiOrang.negara = "Indonesia";
// console.log(deksripsiOrang.negara);

// deksripsiOrang.email = "ninafani65@gmail.com";
// console.log(deksripsiOrang.email);

// deksripsiOrang.jurusan = "Teknik Informatika";
// console.log(deksripsiOrang.jurusan);

// //mengganti property dan nilainya
// deksripsiOrang["name"] = "Sandhika Galih";
// console.log(deksripsiOrang.name);

// deksripsiOrang['gender'] = "Male";
// console.log(deksripsiOrang.gender);

// //menghapus property

//memanggil metod objek

var deksripsiOrang = {
	name : "Nina Fani Sarafina",
 	age : 23,
 	gender : "Female",
 	hobby : "Reading",
 	displayName : function(){
 		console.log(this.name);
 	}
 	
 };

 deksripsiOrang.displayName();
 deksripsiOrang["displayName"];
