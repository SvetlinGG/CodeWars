function reverseWord(str){
    let words = str.split(' ');
    words.map(word => {
        if ( word.length >= 6){
            word.split('').reverse();
            
        }
    })
    console.log(words.join(' '));
    
}
reverseWord('Hey fellow warriors');