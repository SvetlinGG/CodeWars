function solve(str){
    str.split(' ')
        .map(word => {
        if ( word.length >= 5){
            word.split('').reverse().join('')
        }else{
            word
        }
        
    })
    .join(' ');
    console.log(str);
    
   

}
solve("Hey fellow warriors");