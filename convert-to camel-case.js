function convert(str){

    let sentence = str.split('-');

    for ( let char of sentence){
        char = char.charAt(0).toUpperCase() + char.slice(1);
        console.log(char);
        
    }
    //console.log(sentence);
    


}
convert("the-stealth-warrior")