/* Sorting String
// mengurutkan elemen array
var buah =['Banana','Orange', 'Papaya','Mango'];
var diurutkan = buah.sort();

//array yang belum diurutkan
console.log(buah);
//yang sudah diurutkan
console.log(diurutkan);
*/

/*
//reverse array
var hitung = ['one','two','three','four','five'];
var dibalik = hitung.reverse();
console.log(hitung);
console.log(dibalik);
*/

/*
//sorting numeric
var numbers = [5,20,10,75,50,100];
numbers.sort();
console.log(numbers);
*/

//mengurutkan bilang terkecil ke yang terbesar
/*
var numbers = [5,20,10,75,50,100];
numbers.sort(function(a, b){
return a - b;
});
console.log(numbers);
*/

/*
//Menemukan Nilai Max dan Min
var numbers = [5,20,10,75,50,100];

//definisi function untuk menemukan nilai maximum
function temukanMaximum(array) {
	return Math.max.apply(null, array);
}
//definis function untuk menemukan nilai minimal
function temukanMinimum(array) {
	return Math.min.apply(null, array);
}
console.log(temukanMaximum(numbers));
console.log(temukanMinimum(numbers));
*/

//mengurutkan objek array
var person =[
				{name: "Nina Fani", age:23},
				{name: "Deny", age:14},
				{name: "Doddy", age:17},
				{name: "Alexandra", age:20},
				{name: "James", age:10}
];

//urutkan berdasarkan umur
person.sort(function(a,b){
	return a.age - b.age;
});

console.log(person);

//urutkan berdasarkan nama
person.sort(function(a,b){
	var x = a.name.toLowerCase();
	var y = b.name.toLowerCase();

	if(x < y){
		return -1;
	}
	if(x > y){
		return 1;
	}
	return 0;
});

console.log(person);