// var arr = ['Apple', 'Banana', 'Pear', 'Grape', 'Salake'];
// arr.map(function(e) {
//     console.log(e);
// });

//contoh ke-2
// var arr = [1, 2, 5, 6, 4, 8, 7, 3];
// arr.forEach(function(e, i) {
//     console.log("Angka Ke-: " + ' ' + (i + 1) + ' adalah : ' + e);
// })

//map
// var arr = [1, 2, 5, 6, 4, 8, 7, 3];
// var arr2 = arr.map(function(e) {
//     return e * 2;
// });
// console.log(arr2.join('-'));

//sort
// var arr = [1, 2, 5, 6, 4, 8, 7, 3];
// arr.sort();
// console.log(arr.join('-'));

//filter
var arr = [1, 2, 5, 6, 4, 8, 7, 3];
var arr2 = arr.find(function(e) {
    return e > 5;
});
console.log(arr2);