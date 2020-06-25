const angka = [-1,8,9,1,4,-5,-4,3,2,9];

//mencari angka yang lebih besar =3
//for
//const newangka = [];
// for (const i =0; i < angka.length; i++) {
//   if(angka[i] >= 3)
//   newangka.push(angka[i]);
// }
// console.log(newangka);

//filterMapReduce
//Filter
// const newangka = angka.filter( (a) => a >= 3);
// console.log(newangka);

//Map
// const newangka = angka.map ((a) => a * 2);
// console.log(newangka);

//Reduce
// const newangka = angka.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
// console.log(newangka);

//method chining
const hasil = angka.filter(a => a > 5)
.map(a => a * 3)
.reduce((acc, curr) =>  acc + curr);
console.log(hasil);
