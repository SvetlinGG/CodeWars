function solve(str){

   
   let arr = [];
   for ( let i = 0; i < str.length; i ++){
    if ( str.length === 1){
        console.log([str]);
       }
    let char = str[i];
    let rest = str.slice(0, i) + str.slice(i + 1);
       console.log(rest);
       
    for ( let perm of rest){
        arr.push(char + perm)  
    }
   }
   console.log(arr);
   
}
solve('a')
solve('ab')
solve('aabb')