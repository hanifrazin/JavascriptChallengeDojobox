/* 
    Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
    A = 80 - 100
    B = 60 - 80
    C = 40 - 60
    D = 20 - 40
    E = >20
*/

/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/

function nilaiPeserta (nilai) {
    var result;
    
    switch(true){
        case (nilai >= 81 && nilai <= 100):
            result = 'A';
            break;
        case (nilai >= 61 && nilai <= 80):
            result = 'B';
            break;
        case (nilai >= 41 && nilai <= 60):
            result = 'C';
            break;
        case (nilai >= 21 && nilai <= 40):
            result = 'D';
            break;
        case (nilai <= 20):
            result = 'E';
            break;
        default:
            result = 'Maaf inputan anda salah';
    }

    return result;
}

for(i = 0;i < 5;i++){
    var nilai = parseInt(prompt('Masukkan nilai peserta ke-'+(i+1)));
    document.write('Nilai peserta ke-'+(i+1)+' adalah '+nilaiPeserta(nilai)+'<br>');    
}
// document.write('Nilai peserta 1 : '+nilaiPeserta(5)+'<br>');
// document.write('Nilai peserta 2 : '+nilaiPeserta(60.5)+'<br>');
// document.write('Nilai peserta 3 : '+nilaiPeserta(49.5)+'<br>');
// document.write('Nilai peserta 4 : '+nilaiPeserta(50)+'<br>');
// document.write('Nilai peserta 5 : '+nilaiPeserta(101)+'<br>');

