function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */
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

var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(55.5)],
    ["Andika", 70.1, nilaiPeserta(70.1)],
    ["Alif", 19, nilaiPeserta(19)],
    ["Vista", 102, nilaiPeserta(102)]
];

var identitas = ["Nama","Nilai","Rank"];

//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.
/* for(var i = 0;i < dataSiswa.length; i++){
    for(var j = 0; j < dataSiswa[i].length; j++){
        document.write(`${identitas[j]} : ${dataSiswa[i][j]} <br>`);
    }
    document.write('<br>');
} */

for (var i = 0, l1 = dataSiswa.length; i < l1; i++) {
    for (var j = 0, l2 = dataSiswa[i].length; j < l2; j++) {
        if(j==0){
            document.write('Nama : ' + dataSiswa[i][j], '<br>')
        }
        if(j==1){
            document.write('Nilai angka : ' + dataSiswa[i][j], '<br>')
        }
        if(j==2){
            document.write('Nilai huruf : ' + dataSiswa[i][j], '<br>')
        }
    }
}