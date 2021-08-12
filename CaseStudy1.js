/* var x = 5;
var y = 8.5;

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.
let jumlah = function(x,y){
    return x+y;
}

let kurang = function(x,y){
    return x-y;
}

let kali = function(x,y){
    return x*y;
}

let bagi = function(x,y){
    return x/y;
}

document.write(`Hasil dari penjumlahan dari ${x} + ${y} = ${jumlah(x,y)} <br>`);
document.write(`Hasil dari pengurangan dari ${x} - ${y} = ${kurang(x,y)} <br>`);
document.write(`Hasil dari perkalian dari ${x} x ${y} = ${kali(x,y)} <br>`);
document.write(`Hasil dari pembagian ${x} / ${y} = ${bagi(x,y)} <br>`); */

var bil1 = parseInt(prompt('Masukkan bilangan 1'));
var bil2 = parseInt(prompt('Masukkan bilangan 2'));

function tambah(){
    document.write('Hasil penjumlahan kedua bilangan adalah : '+(bil1+bil2)+'<br>');
}

function kurang(x,y){
    var hasilKurang = x-y;
    document.write('Hasil pengurangan kedua bilangan adalah : '+hasilKurang+'<br>');
}

var hasilKali = function(x,y){
    return x * y;
}

var hasilBagi = function(x,y){
    return x / y;
}

var sisaHasilBagi = function(x,y){
    return x % y;
}

/* document.write(`Hasil dari penjumlahan ${bil1} + ${bil2} = ${tambah(bil1,bil2)} <br>`);
document.write(`Hasil dari pengurangan ${bil1} - ${bil2} = ${kurang(bil1,bil2)} <br>`); */
tambah();
kurang(bil1,bil2);
document.write(`Hasil dari perkalian ${bil1} x ${bil2} = ${hasilKali(bil1,bil2)} <br>`);
document.write(`Hasil dari pembagian ${bil1} / ${bil2} = ${hasilBagi(bil1,bil2)} <br>`);
document.write(`Hasil dari modulo ${bil1} % ${bil2} = ${sisaHasilBagi(bil1,bil2)} <br>`);
