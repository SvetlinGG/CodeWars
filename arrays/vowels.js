function vowels(str){

    let vowels = ['a', 'o', 'e', 'u','i'];
    let arr = [];
    
    for(let i =0; i < str.length; i++){
        if(vowels.includes(str[i])){
            arr.push(str[i]);
            
        }
    }
console.log(arr.join(' '));

}
vowels("Stoilcho Garabedyan")