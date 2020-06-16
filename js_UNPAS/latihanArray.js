var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    //jika isi array kosong
    if (penumpang.length == 0) {
        //menambahkan array di awal
        penumpang.push(namaPenumpang);
        //kembalikan isi array
        return penumpang;
    } else {
        //telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika ada yang kosong
            if (penumpang[i] == undefined) {
                //tambah isi array
                penumpang[i] = namaPenumpang;
                //kembalikan isi array
                return penumpang;

            } //jika ada nama elemen yang sama
            else if (penumpang[i] == namaPenumpang) {
                //tampilkan kesalahannya
                console.log(namaPenumpang + ' Sudah didalam Angkot.');
                //kembalikan isi array
                return penumpang;
            }
            //jika seluruh elemen terisi,apabila ada elemen yang kosong
            else if (i == penumpang.length - 1) {
                //tambah elemen di akhir array
                penumpang.push(namaPenumpang);
                //kembalikan isi array
                return penumpang;
            }
        }
    }
}