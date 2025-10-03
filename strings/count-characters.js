function count(str){

    let word = {};
    for (let char of str){
        word[char] = ( word[char] || 0) + 1;
    }
    console.log(word);
    
}
count('aba');
count('');
count('a');
count('ABC');