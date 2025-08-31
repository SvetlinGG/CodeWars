function reverseWord(str){
    let words = str.split(' ');
    let arr = []

    words.map(word => {
        if ( word.length >= 6){
            word.split('').reverse().join('')
            
        }
        console.log(words);
    });
    
    
    // for ( let word of words){
    //     if ( word.length >= 6){
    //         word = word.split('').reverse();   
    //     }
    //     arr.push(word)
        
    // }
    // console.log(arr.join(' '));
    
    

}
reverseWord('Hey fellow warriors');