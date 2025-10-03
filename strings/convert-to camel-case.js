function convert(str){

    
    let sentence = '';
    let result = str.match(/[a-zA-Z]+/g);
    if (!result || result.length === 0) return '';
    let arr = [];
    arr.push(result[0])
    for ( let i = 1; i < result.length; i++){
        let word = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        arr.push(word)
    }
    console.log(arr.join(''));
    // again
}
convert("the-stealth-warrior");
convert('The_Stealth_Warrior');
convert('The_Stealth-Warrior');