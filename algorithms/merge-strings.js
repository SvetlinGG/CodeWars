function mergeStrings(word1, word2){

    // let newStr1 = word1.split('');
    // let newStr2 = word2.split('');
    // let arr = [];
    // let result = ''

    // for ( let i = 0; i < newStr1.length; i ++){
    //     arr.push(newStr1[i] + newStr2[i]);
    //     if (newStr1.length > newStr2.length || newStr1.length < newStr2.length){
    //         result  += newStr2.length - newStr1.length;
    //     }
    // }
    // arr.push(result)
    // console.log(arr.join(''));

    let arr = [];
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (word1[i]) arr.push(word1[i]);
        if (word2[i]) arr.push(word2[i]);
  }

  console.log(arr.join(''));
  return arr.join('');
    
}
mergeStrings('abc', 'pqraa');