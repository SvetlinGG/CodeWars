function solve(str){

    let num = str.length;
    let arr = [];
    for ( let i = 0; i <= num; i++){
        arr.push(str.charAt(i).toUpperCase())
        break;
    }
    console.log(arr);
    
    
}
solve('hello')