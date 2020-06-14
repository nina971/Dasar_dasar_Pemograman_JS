// var jmlAngkot = 10;
// var noAngkot = 1;
// var angkotBeroperasi = 6;

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");
//     } else {
//         console.log("Angkot No. " + noAngkot + " Tidak Beroperasi dengan baik");
//     }
// }

var angka = prompt("Masukkan angka :");
if (angka % 2 == 0) {
    alert(angka + " Bilangan Genap");
} else if (angka % 2 == 1) {
    alert(angka + " Bilangan Ganjil");
} else {
    alert("Bukan angka yang diinputkan !");
}