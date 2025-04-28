function solve(str){

    // let arr = str.split('');
    // let num = str.length;
    // let newArr = [];
    // for ( let i =0; i < arr.length; i++){
    //     for( let j =0; j <=num; j++){
            
    //     }
    //     newArr.push(arr[i].charAt().toUpperCase());
    //     console.log(newArr);
    // }
   let arr = str.split('');
   arr = arr.map(word => word + word.toUpperCase());
   console.log(arr);
   
    
    

}
solve('hello')