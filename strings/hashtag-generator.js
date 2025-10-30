function hashtag(str){
    if (!str || str.trim() === '') return false;
    let arr = str.split(/\s+/);
    
    let hashtag = '#' + arr.map(word =>  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
     
    console.log(hashtag.length > 140 ? false : hashtag) ;
    

}
hashtag(" Hello there thanks for trying my Kata");
hashtag("   Hello     World   ");