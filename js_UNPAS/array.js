// 1. menampilkan isi array
// var arr = ["a", 1, true];
// console.log(arr);

// //2.menampilkan salah satu isi array
// var arr = ["Nina", "Fani", "Sarafina"];
// console.log(arr[1]);


//3. array bisa ditulis dimulai index ke-0 dankita coba hilangkan salah satu array
/*var arr = [];
arr[0] = "Adek Mita";
arr[1] = "Tembem";
arr[2] = "Tembem";
arr[3] = "Pesek";
arr[3] = undefined;
console.log(arr);
*/

//menampilkan isi array satu per satu
// var arr = ["Adek Mita", "Ya Adek Mita", "Pokok Adek Mita", "Adek Mita Lagi Wz"];
// for (var i = 0; i < arr.length; i++) {
//     console.log('Adek Paleng Resek ke ' + i + ' ' + arr[i]);
// }

//methode pada array
//length =untuk mengetahui banyak elemen pada array
// join =menggabungkan array elemen

//contoh method join
// var arr = ["Adek Mita", "Ya Adek Mita", "Pokok Adek Mita", "Adek Mita Lagi Wz"];
// console.log(arr.join());

//contoh method push
var arr = ["Adek Mita", "Ya Adek Mita", "Pokok Adek Mita", "Adek Mita Lagi Wz"];
//arr.push("Pokok Adek Mita");
//arr.pop();
//arr.unshift("Adek Mita");
arr.shift();
console.log(arr.join('-'));