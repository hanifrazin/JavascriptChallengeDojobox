// Soal 2
// Terdapat 5 data nama berikut ini: 
//     1. Budi 
//     2. Adi 
//     3. Gunawan 
//     4. Joko 
//     5. Bambang 
// Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan output "Boleh masuk!" 
// dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!". 

let name = prompt("Masukkan nama","Budi,Adi,Gunawan,Joko,Bambang");

let answer = (input) => {
    switch(input){
        case "Budi":
        case "Adi":
        case "Gunawan":
        case "Joko":
        case "Bambang":
            document.write('Boleh masuk! <br>');
            break;
        default:
            document.write('Tidak boleh masuk <br>');
    }
};

answer(name);