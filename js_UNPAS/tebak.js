var tanya  = true;

var hasil = '';

var comp = Math.floor(Math.random() * 10)+1;
//console.log(comp);
var kesempatan = 3;
//aturan jika player
while(tanya){
while(kesempatan > 0){
var p = prompt('Masukkan Angka Random 1 - 10 :');
if(p == comp){
	hasil = 'Tebakan Kamu Benar';
	alert('Angka yang kamu masukan : ' + p + '\n ' + hasil);
	kesempatan = false;
}else if(p > comp){
	hasil = 'Tebakan Kamu Terlalu Besar';
	alert('Angka yang kamu masukan : ' + p + '\n ' + hasil);
}else{
	hasil = 'Tebakan kamu terlalu Kecil';
	alert('Angka yang kamu masukan : ' + p + '\n ' + hasil);
}if(kesempatan > 1){
	alert('Angka yang kamu masukan : ' + p + hasil + '\n' + 'Kamu Punya kesempatan ' + (kesempatan-1) + 'x');
}if(kesempatan == 1){
	alert('Anda Kalah!' + ' Angka yang benar adalah : ' + comp );
}
kesempatan--;

}

     
     tanya = confirm('Mau Main lagi?');
}
alert("Thank You");


