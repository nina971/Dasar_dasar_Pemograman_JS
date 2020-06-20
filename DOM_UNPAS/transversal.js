//DOM transversal
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');
//console.log(card);
// console.log(close);

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener('click',function(e) {
//     // alert('tombole ke-'+i);
//     // card[i].style.display = 'none';
//     //close[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = 'none';
//   });
// }

//setiap elemen pada close ini kita jalnakan pada setiap function
close.forEach(function(el) {
  el.addEventListener('click',function(e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault(); //menghentikan aksi default elemen
    e.stopPropagation();
  });
});
//
//
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('click',function() {
    alert('ok');

  });
});

//method DOM transversal
//parentNode
//parentElement
//nextSibling
//nextElementSibling
//previous sibling

// const nama = document.querySelector('.nama');
// // console.log(nama.parentElement);
// console.log(nama.nextElementSibling.nextElementSibling);






const container = document.querySelector('.container');

container.addEventListener('click',function(e) {
  if(e.target.className == 'close'){
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
});
