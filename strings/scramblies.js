function solve(str1, str2){

    let charCount = {};
    for ( let char of str1){
        charCount[char] = (charCount[char] || 0) + 1;
    }
     

    for ( let char of str2){
        if (!charCount[char]){
            console.log(false);
            
        }
        charCount[char] --;
    }
    console.log(true);
    


}
solve('cedewaraaossoqqyt', 'codewars');
solve('rkqodlw', 'world');
solve('katas', 'steak');