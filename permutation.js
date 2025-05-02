function permutation(str){

    if( str.length <= 1){
        console.log([str]); 
    }
    let arr = [];
    for ( let i = 0; i < str.length; i++){
        let char = str[i];
        let remaining = str.slice(0, i) + str.slice(i + 1);
        console.log(remaining);
        
        for ( let perm of remaining){
            arr.push(char+perm);
        }
    }
    //console.log(arr.join(' '));
    
}
permutation('abc')