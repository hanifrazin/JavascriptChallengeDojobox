var nama = ["Akhmad","Alif","Andika","Jojo","Adib","Valen","Vista","Aura","Cahya"];

var showNama = function(input){
    var display = [];
    if(input == 'mentor'){
        display = nama.slice(0,4);
    }else if(input == 'ta'){
        display = nama.slice(4,7);
    }else if(input == 'Admin'){
        display = nama.slice(7,10);
    }
    return display;
}

var answer = prompt('Input Rule','mentor,ta,admin');
document.write(`${showNama(answer)}`);
