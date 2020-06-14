var a = 1; //window scope / variabel global
function tes(){
//name conflict
var a = 2;
console.log(a);
}

tes();