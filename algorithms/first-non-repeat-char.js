function firstNonRepeatingLetter(str){

    let length = str.length;
    let res ;
    for ( let i = 0; i < length; i++){
            let found = false;
        for ( let j = 0; j < length; j++){
            if ( i !== j && str[i] === str[j]){
                found = true;
                res = str[j]
                break;
                
            }
        }
    }
    console.log(res);
    


}
firstNonRepeatingLetter('stress')