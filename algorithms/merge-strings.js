function mergeStrings(word1, word2){

    let newStr1 = word1.split('');
    let newStr2 = word2.split('');
    let result = '';

    for ( let i = 0; i < newStr1.length; i ++){
        result += newStr1[i] + newStr2[i];

    }
    console.log(result);
    
    


}
mergeStrings('abc', 'pqr');