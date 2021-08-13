//Soal 1
// Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
// - apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. // - apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 

// let hitungLuasPermukaanBalok = (panjang,lebar,tinggi) => {
//     return 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
// };

// let hitungVolumeBalok = (panjang,lebar,tinggi) => {
//     return panjang * lebar * tinggi;
// };

let hitung = (keterangan) => {
    let result = 0;
    let panjang = parseInt(prompt('Masukkan panjang'));
    let lebar = parseInt(prompt('Masukkan lebar'));
    let tinggi = parseInt(prompt('Masukkan tinggi'));

    if(keterangan == "luas permukaan"){
        result = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
    }else if(keterangan == "volume"){
        result = panjang * lebar * tinggi;
    }
    return result;
};

let balok = ['luas permukaan','volume']

let jawab = prompt('Masukkan menu pilihan anda','luas permukaan balok, volume balok');
let keterangan = '';

if(jawab == balok[0]){
    keterangan = balok[0];
    document.write(`${keterangan} balok adalah ${hitung(keterangan)}`);
}else if(jawab == balok[1]){
    keterangan = balok[1];
    document.write(`${keterangan} balok adalah ${hitung(keterangan)}`);
}else{
    document.write('Maaf pilihan yang anda masukkan salah');
}