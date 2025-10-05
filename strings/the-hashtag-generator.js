function generateHashtag(str){

    let arr = ['#'];
    let pattern = /\s+/g;
    //str = str.replace(pattern, '');
    for (let i = 0; i < str.length; i++){
        let char = (i === 0) ? str[i].toUpperCase() : str[i];
        arr.push(char)
    }
    console.log(arr.join(''));
    
    


}
generateHashtag(" Hello there thanks for trying my Kata");
//generateHashtag("   Hello     World   ");
//generateHashtag("");