/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/




// Operation
// Input dan Output

// fungsi menghitung luas dengan function declaration

// tidak menggunakan nilai balik atau return
// segi empat (sisi * sisi)
function hitungLuasSegiEmpat(sisi){
    // tidak ada return
    var luas = sisi * sisi;
    return luas;
}

// segi panjang (panjang * lebar)
function hitungLuasPersegiPanjang(panjang,lebar){
    // tidak ada return
    var luas = panjang * lebar;
    return luas;
}

// menggunakan nilai balik atau return
// segi tiga (0.5 * alas * tinggi)
function hitungLuasSegitiga(alas,tinggi){
    var luas = 0.5 * alas * tinggi;
    return luas;
}

// lingkaran (3.14 * jari-jari^2)
function hitungLuasLingkaran(r){
    return 3.14 * r**2;
}

// fungsi menghitung keliling dengan function expression

// segi empat (sisi + sisi + sisi + sisi)
var hitungKelilingSegiEmpat = function(sisi){
    return sisi * 4;
}

// segi panjang (2 * (panjang +lebar))
var hitungKelilingPersegiPanjang = function(panjang,lebar){
    return 2 * (panjang + lebar);
}

// segi tiga (alas + tinggi + sisi miring)
var hitungKelilingSegitiga = function(alas,tinggi,sisiMiring){
    return alas + tinggi + sisiMiring;
}

// lingkaran (2 * 3.14 * jari-jari)
var hitungKelilingLingkaran = function(jariJari){
    return 2 * 3.14 * jariJari;
}

//input outputnya

//luas
//persegi (1 variable)
function luasPersegi(){
    var persegi = parseInt(prompt('Masukkan sisi persegi'));
    var luas = hitungLuasSegiEmpat(persegi);

    document.write(`Luas persegi adalah : ${luas}`);
}

//persegi panjang (2 variable)
function luasPersegiPanjang(){
    var panjang = parseInt(prompt('Masukan panjang'));
    var lebar = parseInt(prompt('Masukkan lebar'));
    var luas = hitungLuasPersegiPanjang(panjang,lebar);
    document.write(`Luas persegi panjang adalah : ${luas}`);
}

//segitiga (2 variable)
function luasSegitiga(){
    var alas = parseInt(prompt('Masukkan alas'));
    var tinggi = parseInt(prompt('Masukkan tinggi'));
    var luas = hitungLuasSegitiga(alas,tinggi);
    document.write(`Luas segitiga adalah : ${luas}`);
}

//lingkaran (1 variable)
function luasLingkaran(){
    var jari2 = parseInt(prompt('Masukkan jari-jari'));
    var luas = hitungLuasLingkaran(jari2);
    document.write(`Luas lingkaran adalah : ${luas}`);
}

//keliling
//persegi (1 variable)
function kelilingPersegi(){
    var persegi = parseInt(prompt('Masukkan sisi persegi'));
    var keliling = hitungKelilingSegiEmpat(persegi);
    // console.log(keliling);
    document.write(`Keliling persegi adalah : ${keliling}`); 
}

//persegi panjang (2 variable)
function kelilingPersegiPanjang(){
    var panjang = parseInt(prompt('Masukan panjang'));
    var lebar = parseInt(prompt('Masukkan lebar'));
    var keliling = hitungKelilingPersegiPanjang(panjang,lebar);
    document.write(`Keliling persegi panjang adalah : ${keliling}`);
}

//segitiga (3 variable)
function kelilingSegitiga(){
    var alas = parseInt(prompt('Masukan alas'));
    var tinggi = parseInt(prompt('Masukkan tinggi'));
    var sm = parseInt(prompt('Masukkan sisi miring'));
    var keliling = hitungKelilingSegitiga(alas,tinggi,sm);
    document.write(`Keliling Segitiga adalah : ${keliling}`);
}

//lingkaran (1 variable)
function kelilingLingkaran(){
    var jari2 = parseInt(prompt('Masukkan jari-jari'));
    var keliling = hitungKelilingLingkaran(jari2);
    document.write(`Keliling lingkaran adalah : ${keliling}`);
}

// Menu
var menu = prompt('Silahkan pilih menu yang tersedia','1 - Luas,2 - Keliling');

if(menu == 1){
    // mengoperasikan menu Luas
    alert('Anda telah memilih menu Luas');
    var menuLuas = prompt('Masukkan bangun datar yang dihitung luasnya','1 - Persegi; 2 - Persegi Panjang; 3 - Segitiga; 4 - Lingkaran');

    if(menuLuas == 1){
        //Luas Persegi
        luasPersegi();
    }else if(menuLuas == 2){
        //Luas Persegi Panjang
        luasPersegiPanjang();
    }else if(menuLuas == 3){
        //Luas Segitiga
        luasSegitiga();
    }else if(menuLuas == 4){
        //Luas Lingkaran
        luasLingkaran();
    }else{
        document.write('Menu yang anda pilih tidak valid');
    }

}else if(menu == 2){
    // mengoperasikan keliling
    alert('Anda telah memilih menu Keliling');
    var menuKeliling = prompt('Masukkan bangun datar yang dihitung kelilingnya','1 - Persegi; 2 - Persegi Panjang; 3 - Segitiga; 4 - Lingkaran');

    if(menuKeliling == 1){
        //Keliling Persegi
        kelilingPersegi();
    }else if(menuKeliling == 2){
        //Keliling Persegi Panjang
        kelilingPersegiPanjang();
    }else if(menuKeliling == 3){
        //Keliling Segitiga
        kelilingSegitiga();
    }else if(menuKeliling == 4){
        //Keliling Lingkaran
        kelilingLingkaran();
    }else{
        document.write('Menu yang anda pilih tidak valid');
    }
}else{
    document.write('Menu yang anda pilih tidak valid');
}