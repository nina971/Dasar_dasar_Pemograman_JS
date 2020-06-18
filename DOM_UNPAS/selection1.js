const judul = document.getElementById('judul');
judul.innerHTML = 'Nina Fani Sarafina';
judul.style.color = "red";
judul.style.backgroundColor = '#ccc';

//tag p tidak punya id, punya class aja
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';

}

const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px';

//HTML Collection tidak bisa langsung innerHTML
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini Diubah Dari Javascript';
