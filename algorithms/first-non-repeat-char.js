function firstNonRepeatingLetter(str){

    let word = str.split('');
    for ( let i = 0; i < word.length; i++){
        if ( word[i] !== word[i+1]){
            console.log(word[i]);
            
        }
    }
    


}
firstNonRepeatingLetter('stress')