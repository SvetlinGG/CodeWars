
function lottery(str){

    let word = str.split('');
    let arr = []
    const seen = new Set();
    
    for (let i = 0; i < word.length; i ++){
        
        if (word[i] >= "0" && word[i] <= "9" && !seen.has(word[i])){
            seen.add(word[i])
            arr.push(word[i]);
    }

    }
    if ( arr.length === 0){
        console.log('One more run!');
        
    }
    console.log(arr.join(''));
    
    
    
    


}
lottery('hPrBKWDH8yc6Lt5NQZWQ');
lottery('ynMAisVpHEqpqHBqTrwH');
lottery('555');