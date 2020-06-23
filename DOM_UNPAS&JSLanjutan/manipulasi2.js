//buat elemen baru
const pBaru = document.createElement('p');
//kita buat elemen yg baru dengan teks
const textPBaru = document.createTextNode('Paragraf Baru');
//kita simpan tulisannya
pBaru.appendChild(textPBaru);

//simpan p baru akhir section a
const a = document.getElementById('a');
a.appendChild(pBaru);

const linkBaru = document.createElement('li');
const textLinkBaru = document.createTextNode('item baru');
linkBaru.appendChild(textLinkBaru);

const sectionB = document.querySelector('section#b ul');
const li = sectionB.querySelector('li:nth-child(2)');

sectionB.insertBefore(linkBaru,li);

const link = document.getElementsByTagName('a')[0];
a.removeChild(link);

//mengganti elemen Baru
//1. tangkap bagiannya di section b tag p elemen p4
const b = document.getElementById('b');
const p4 = b.querySelector('p');

const h2Baru = document.createElement('h2');
const texth2Baru = document.createTextNode('Judul baru');

h2Baru.appendChild(texth2Baru);
b.replaceChild(h2Baru,p4);
