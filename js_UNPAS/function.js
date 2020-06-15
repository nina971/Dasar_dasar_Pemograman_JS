// ketahui sisi kubus
//deklarasi variabel a dan b


//hitung volume kubus s^3
function menjumlahkanVolumeDuaKubus(a, b) {
    var volume1 = a * a * a;
    var volume2 = b * b * b;

    var hasil = volume1 + volume2;

    return hasil;

}

//tampilkan hasilnya
console.log(menjumlahkanVolumeDuaKubus(8, 3));