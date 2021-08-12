/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/

// fungsi menghitung luas dengan function declaration

// tidak menggunakan nilai balik atau return
// segi empat (sisi * sisi)
function luasSegiEmpat(sisi){
    // tidak ada return
    var luas = sisi * sisi;
    document.write(`Luas segi empat = ${luas}`);
}

// segi panjang (panjang * lebar)
function luasPersegiPanjang(panjang,lebar){
    // tidak ada return
    var luas = panjang * lebar;
    document.write(`Luas persegi panjang = ${luas}`);
}

// menggunakan nilai balik atau return
// segi tiga (0.5 * alas * tinggi)
function luasSegitiga(alas,tinggi){
    var luas = 0.5 * alas * tinggi;
    return luas;
}

// lingkaran (3.14 * jari-jari^2)
function luasLingkaran(r){
    return 3.14 * r**2;
}

// fungsi menghitung keliling dengan function expression

// segi empat (sisi + sisi + sisi + sisi)
var kelilingSegiEmpat = function(sisi){
    return sisi + sisi + sisi + sisi;
}

// segi panjang (2 * (panjang +lebar))
var kelilingPersegiPanjang = function(panjang,lebar){
    return 2 * (panjang + lebar);
}

// segi tiga (alas + tinggi + sisi miring)
var kelilingSegitiga = function(alas,tinggi,sisiMiring){
    return alas + tinggi + sisiMiring;
}

// lingkaran (2 * 3.14 * jari-jari)
var kelilingLingkaran = function(jariJari){
    return 2 * 3.14 * jariJari;
}