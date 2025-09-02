function convert(str){

    
    
    let result = str.match(/[a-zA-Z]+/);
    console.log(result);
    
}
convert("the-stealth-warrior");
convert('The_Stealth_Warrior');
convert('The_Stealth-Warrior')