const input = require('fs').readFileSync(0, "utf8");
let count = 0;
let save;
let save_in = input;
while (input*1!=save) {
    if(save_in*1<10){
        save = save_in*10+save_in*1;
    }else{
        save = save_in*1%10*10+((save_in*1-save_in*1%10)/10+save_in*1%10)%10
    }
    save_in=save;
    count++;
}
console.log(count);