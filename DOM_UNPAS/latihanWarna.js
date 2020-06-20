const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
  //document.body.style.backgroundColor = 'brown';

  //manipulasi untuk ketika diklik mendapati class
   document.body.classList.toggle('coklat-muda');
  //document.body.setAttribute('class','coklat-muda');
}


//membuat tombol dengan manipulasi node
//membuat tombol baru
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');
//letakkan setelah tombol ubah warna
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click',function() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
document.body.style.backgroundColor = 'rgb(' + r +','+ g +','+ b +')';
});

//tangkap name sMerah
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input',function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';


});

sHijau.addEventListener('input',function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});


sBiru.addEventListener('input',function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});

//tangkap body
document.body.addEventListener('mousemove',function (event) {
  //posisi mousemove
  //console.log(even.clientX);
  //ukuran browser
  //console.log(window.innerWidth);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientX / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});
