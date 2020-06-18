const p3 = document.querySelector('.p3');
p3.onclick = ubahWarna2;
function ubahWarna(){
        p2.style.backgroundColor = 'lightblue';
}
function ubahWarna2(){
        p3.style.backgroundColor = 'lightblue';
}

//even handler
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

//ssetiap click menambah item setiap diklik
//ul di section id b
//tangkap p4 di section b
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
  //tangkap parentnya
  const ul = document.querySelector('section#b ul');
  const li = document.createElement('li');
  const textBaru = document.createTextNode('item baru');

  li.appendChild(textBaru);
  ul.appendChild(li);
});

p3.addEventListener('mouseenter',function() {
  p3.style.backgroundColor = 'lightblue';
})

p3.addEventListener('mouseleave',function() {
  p3.style.backgroundColor = 'white';
})
