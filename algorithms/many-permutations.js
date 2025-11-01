function solve(str){
    if ( str.length === 1){
        console.log([str]);
       }
       if ( str.length === 0){
        console.log([]);
       }
   
   let arr = [];
   for ( let i = 0; i < str.length; i ++){
    
    let char = str[i];
    let rest = str.slice(0, i) + str.slice(i + 1);
       
       
    for ( let perm of rest){
        arr.push(char + perm)  
    }
   }
   console.log(arr);
   
}
//solve('a')
//solve('ab')
solve('aabb')