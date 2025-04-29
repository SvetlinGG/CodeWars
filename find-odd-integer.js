function solve(arr){

    let count = {};
    for ( let num of arr){
        if(count[num] > 0){
            count[num] ++;
        }else{
            count[num] = 1;
        }
        
    }
    let numbers = Object.entries(count);
    for ( let [num, value] of numbers){
        if ( value % 2 !==0){
            console.log(`${num} -> ${value}`);
            
        }
    }
    
    
    



}
//solve([1,2,2,3,3,3,4,3,3,3,2,2,1]);
//solve([1,1,2]);
solve([1,2,2,2,2,3,4,4,4,4,5]);
solve([7])