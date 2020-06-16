var penumpang = ['Nina', undefined, 'galih', 'putri'];
var hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log("Kosong", penumpang[i]);
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + 'Tidak ada');
            }
        }
    }
    return penumpang;
}