// function tampilAngka(n){

// 	//berhentikan rekursif dengan base case
// 	if(n == 0){
// 		return;
// 	}
// 	console.log(n);
// 	return tampilAngka(n-1);
// }

// tampilAngka(10);

function faktorial (n){
	if(n == 0){
		return 1;
	} 
	console.log(n);
	return n * faktorial(n-1);
	
}

faktorial(5);

