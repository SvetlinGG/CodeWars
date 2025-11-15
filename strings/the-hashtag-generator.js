function generateHashtag(str){

    let arr = ['#'];
    let pattern = /\s+/g;
    //str = str.replace(pattern, '');
    for (let i = 0; i < str.length; i++){
        if ( str[i] === pattern){
            str.replace(pattern, '');
            arr.push(str)
        }
        
    }
    console.log(arr.join(''));
    
    


}
generateHashtag(" Hello there thanks for trying my Kata");
generateHashtag("   Hello     World   ");
//generateHashtag("");