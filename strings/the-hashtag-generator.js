function generateHashtag(str){

    let arr = [];
    let pattern = /\s/g;
    //str = str.replace(pattern, '');
    //console.log(str);
    str = str.split(' ');
    for (let i = 0; i < str.length; i++){
        let capitalize = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        arr.push(capitalize);
        
        if ( arr.length === 0){
            console.log([]);
            
        }
    }
        arr.unshift('#');
    
    
    let result = arr.join('');
    result = result.replace(pattern, '');
    console.log(result);
    


}
generateHashtag(" Hello there thanks for trying my Kata ");
//generateHashtag("   Hello     World   ");
generateHashtag("");