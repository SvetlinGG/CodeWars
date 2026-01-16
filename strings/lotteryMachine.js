
function lottery(str){

    let word = str.split('');
    let arr = []
    
    for (let i = 0; i < word.length; i ++){
        
        if (word[i] >= "0" && word[i] <= "9"){
            
            arr.push(word[i])
        }
        
    }
    if ( arr[0] === arr[1]){
        console.log(arr[0]);
        
    }
    console.log(arr.join(''));


}
lottery('hPrBKWDH8yc6Lt5NQZWQ');
lottery('ynMAisVpHEqpqHBqTrwH');
lottery('555')