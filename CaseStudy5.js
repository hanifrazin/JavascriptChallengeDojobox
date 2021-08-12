/*
silahkan buat sebuah program dengan java script yang di kaitkan ke sebuah halaman html. 
yang ketika halaman diload akan menjalankan urutan program sebagai berikut :
1. memberikan pilihan luas atau keliling
2. memberikian pilihan bidang datar diantaranya segi empat, segi panjang, segi tiga, dan lingkaran
3, masing masing menu yang dipilih akan memberikan parameter berbeda-beda sesuai dengan kebutuhan masing-masing menu
4. tampilkan hasil perhitunganya di document html
*/

var menu = 
`Pilihlah salah satu menu di bawah ini
 1. Luas
 2. Keliling`;

var bidang_datar = 
`Pilih salah satu bidang datar di bawah ini
 1. Segi Empat
 2. Segi Panjang
 3. Segi Tiga
 4. Lingkaran`;

const phi = 3.14;

var luasSegiEmpat = function(sisi){
    return sisi * sisi;
}

var kelilingSegiEmpat = function(sisi){
    return sisi * 4;
}

var luasSegiPanjang = function(panjang,lebar){
    return panjang * lebar;
}

var kelilingSegiPanjang = function(panjang,lebar){
    return ((2*panjang)+(2*lebar));
}

var luasSegiTiga = function(alas,tinggi){
    return (alas*tinggi)/2;
}

var kelilingSegitiga = function(alas,tinggi,sisi_miring){
    return alas + tinggi + sisi_miring;
}

var luasLingkaran = function(jari2){
    return phi * jari2**2;
}

var kelilingLingkaran = function(jari2){
    return 2 * phi * jari2;
}

function hitungLuas(input){
    switch(input){
        case 1:
            var s = parseInt(prompt("Masukkan sisi"));
            document.write(`Luas Segi Empat dengan sisi sebesar ${s} adalah ${luasSegiEmpat(s)}`);
            break;
        case 2:
            var p = parseInt(prompt("Masukkan panjang"));
            var l = parseInt(prompt("Masukkan lebar"));
            document.write(`Luas Persegi Panjang dengan panjang sebesar ${p} dan lebar sebesar ${l} adalah ${luasSegiPanjang(p,l)}`);
            break;
        case 3:
            var a = parseInt(prompt("Masukkan alas"));
            var t = parseInt(prompt("Masukkan tinggi"));
            document.write(`Luas Segitiga dengan alas sebesar ${a} dan tinggi sebesar ${t} adalah ${luasSegiTiga(a,t)}`);
            break;
        case 4:
            var r = parseInt(prompt("Masukkan jari-jari"));
            document.write(`Luas Lingkaran dengan jari-jari sebesar ${r} adalah ${luasLingkaran(r)}`);
            break;
        default:
            document.write(`Inputan anda salah`);
    }
}

function hitungKeliling(input){
    switch(input){
        case 1:
            var s = parseInt(prompt("Masukkan sisi"));
            document.write(`Keliling Segi Empat dengan sisi sebesar ${s} adalah ${kelilingSegiEmpat(s)}`);
            break;
        case 2:
            var p = parseInt(prompt("Masukkan panjang"));
            var l = parseInt(prompt("Masukkan lebar"));
            document.write(`Keliling Persegi Panjang dengan panjang sebesar ${p} dan lebar sebesar ${l} adalah ${kelilingSegiPanjang(p,l)}`);
            break;
        case 3:
            var a = parseInt(prompt("Masukkan alas"));
            var t = parseInt(prompt("Masukkan tinggi"));
            var sm = parseInt(prompt("Masukkan sisi miring"));
            document.write(`Keliling Segitiga dengan alas sebesar ${a}, tinggi sebesar ${t}, dan sisi miring sebesar ${sm} adalah ${kelilingSegitiga(a,t,sm)}`);
            break;
        case 4:
            var r = parseInt(prompt("Masukkan jari-jari"));
            document.write(`Keliling Lingkaran dengan jari-jari sebesar ${r} adalah ${kelilingLingkaran(r)}`);
            break;
        default:
            document.write(`Inputan anda salah`);
    }
}

do{
    var pilihan = parseInt(prompt(menu));
    if(pilihan === 1){
        var luas = parseInt(prompt(bidang_datar));
        hitungLuas(luas);
    }else if(pilihan === 2){
        var keliling = parseInt(prompt(bidang_datar));
        hitungKeliling(keliling);
    }else{
        alert('Maaf pilihan anda salah');
    }
}while(pilihan === "");



