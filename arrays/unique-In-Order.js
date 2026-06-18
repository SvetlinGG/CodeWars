function solve(str){

    let character = [];
    for ( let i = 0; i < str.length; i++){
        if (str[i] != str[i + 1]){
            character.push(str[i])
        }
        
    }
    console.log(character);
    


}
solve('AAAABBBCCDAABBB');
solve('ABBCcAD');
solve([1,2,2,3,3])