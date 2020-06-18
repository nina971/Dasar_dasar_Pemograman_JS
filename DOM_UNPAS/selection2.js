
//menyeleksi elemen di section id b pada tag p
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'Orange';

const li3 = document.querySelector('section#b ul li:nth-child(3)');
li3.style.fontStyle = 'Italic';
 // const p = document.querySelector('p');
 // p.innerHTML = 'Ini Diubah melalui JAVA SCRIPT';


//menyeleksi semua tag p
const p = document.querySelectorAll('p');
for (var i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';
}
