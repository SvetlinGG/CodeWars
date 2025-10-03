function solve(str){
    let arr = str.split(' ');
    let firstLetter ;
    for ( let i = 0; i < arr.length; i++){
        firstLetter = arr[i][0]
        arr[i] = arr[i].slice(1) + arr[i][0] + 'ay';
        
       // console.log(arr[i]);
        
        
    }
    

    console.log(arr.join(' '));
    
    
    
    


}
solve('Pig latin is cool')