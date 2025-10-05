function generateHashtag(str){

    let arr = ['#'];
    let pattern = /\s+/g;
    str = str.replace(pattern, '');
    for (let char of str){
        char.charAt(0).toUpperCase();
        arr.push(char)
    }
    console.log(arr.join(''));
    
    


}
generateHashtag(" Hello there thanks for trying my Kata");
//generateHashtag("   Hello     World   ");
//generateHashtag("");