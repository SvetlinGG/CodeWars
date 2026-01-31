
function lottery(str){

    let word = str.split('');
    let arr = []
    
    for (let i = 0; i < word.length; i ++){
        
        if (word[i] >= "0" && word[i] <= "9"){
            
            arr.push(word[i])
        }
        
    }
    
    console.log(arr.join(''));


}
lottery('hPrBKWDH8yc6Lt5NQZWQ');
lottery('ynMAisVpHEqpqHBqTrwH');
lottery('555')