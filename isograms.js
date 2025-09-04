function isIsogram(str){

    let seen = new Set()
    for ( let char of str.toLowerCase()){

        if (seen.has(char)){
            return false;
            
  