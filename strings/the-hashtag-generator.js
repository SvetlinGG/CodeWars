function generateHashtag(str){

    let arr = ['#'];
    let pattern = /\s+/;
    //str = str.replace(pattern, '');
    for (let char of str){
        if ( char === pattern){
            char = '';
        }
        arr.push(char)
    }
    console.log(arr.join(''));
    
    


}
//generateHashtag(" Hello there thanks for trying my Kata");
generateHashtag("   Hello     World   ");
//generateHashtag("");