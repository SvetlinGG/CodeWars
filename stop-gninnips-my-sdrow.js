function reverseWord(str){
    let words = str.split(' ');
    let arr = []

    for ( let word of words){
        if ( word.length >= 6){
            let reversed = word.split('').reverse();
            //arr.push(reversed)
            console.log(reversed.join(''));
            
        }
        
        
    }
    //console.log(words);
    
    

}
reverseWord('Hey fellow warriors');