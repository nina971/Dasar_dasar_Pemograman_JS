function penjumlahan() {

	var hasil = 0;
	for (var i = 0; i < arguments.length; i++) {
		hasil += arguments[i];
	}
	return hasil;
	
}

var coba = penjumlahan(1,2,3,7, 6, 5);
console.log(coba);

