function convert(str){

    let sentence = str.split('-');
    let result = '';

    for ( let char of sentence){
        char = char.charAt(0).toUpperCase() + char.slice(1);
        result += char;
        //console.log(char);
        
    }
    console.log(result);
    
    


}
convert("the-stealth-warrior")