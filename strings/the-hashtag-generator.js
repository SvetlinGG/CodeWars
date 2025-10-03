function generateHashtag(str){

    let arr = ['#'];
    for (let char of str){
        arr.push(char);
    }
    console.log(arr.join(''));
    


}
generateHashtag(" Hello there thanks for trying my Kata");
generateHashtag("   Hello     World   ");
generateHashtag("");