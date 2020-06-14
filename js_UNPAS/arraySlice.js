var arr = ['Apple', 'Banana', 'Pear',
    'Grape', 'Salake'
];
//splice(indexAwal,MauDihpusBerapa, ElemenBaru1, elemen2,.....n);
//arr.splice(1, 2, 'Pear', 'Strawberry');

//methode slice
//slice(maudiIrisIndexkeBerapa, diAkhirnyaberapa);
var arr2 = arr.slice(1, 3);
console.log(arr2.join('-'));