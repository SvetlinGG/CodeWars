function convert(str){

    
    let sentence = '';
    let result = str.match(/[a-zA-Z]+/g);
    for ( let word of result){
        word = word.charAt(0).toUpperCase() + word.slice(1)
        sentence += word;
        
    }
    console.log(sentence);
    
}
convert("the-stealth-warrior");
convert('The_Stealth_Warrior');
convert('The_Stealth-Warrior')