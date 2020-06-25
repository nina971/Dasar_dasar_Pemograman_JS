//ambil semua elemn Video
const videox = Array.from(document.querySelectorAll('[data-duration]'));
//console.log(videox);
//kita pilih JAVASCRIPT LANJUTAN
let jsLanjut = videox.filter((videox) => videox.textContent.includes('JAVASCRIPT LANJUTAN'))
//
//ambil durasi masing -masing Video
.map(item => item.dataset.duration)
//ubah durasi menjadi float ubah menjadi detik
.map(waktu => {
  //pecah durasi waktu 10:30 menjadi array [10,30] split
  const parts = waktu.split(':').map(parts => parseFloat(parts));
  return (parts[0]*60) + parts[1];
})
//jumlahkan semua detiknya
.reduce((total,detik)=>total + detik, 0);
//ubah formatnya jadi jam menit detiknya
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
//simpan di DOM
const pdurasi = document.querySelector('.total-durasi');
pdurasi.textContent = jam + ' Jam '+menit+' Menit '+detik+' Detik';

const jmlVideo = videox.filter((videox) => videox.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pjmlVideo = document.querySelector('.jumlah-video');
pjmlVideo.textContent = jmlVideo+' Video.';
console.log(jmlVideo);
