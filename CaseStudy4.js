/*
Berapa berat badan ideal Anda?
Rumus menghitung
Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]
nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.
Output:
Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 
*/

function beratBadanPria(tinggiPria) {
    var result = (tinggiPria - 100) - ((tinggiPria - 100) * (10/100));
    return result;
}

function beratBadanWanita(tinggiWanita) {
    var hasil = (tinggiWanita - 100) - ((tinggiWanita - 100) * (15/100));
    return hasil;
}

var heightPria = parseInt(prompt("Masukkan tinggi pria dalam centimeter"));
var heightWanita = parseInt(prompt("Masukkan tinggi wanita dalam centimeter"));

document.write(`Berat badan ideal pria untuk tinggi ${heightPria} sentimeter adalah ${beratBadanPria(heightPria)} kilogram <br>`);
document.write(`Berat badan ideal wanita untuk tinggi ${heightWanita} sentimeter adalah ${beratBadanWanita(heightWanita)} kilogram <br>`);