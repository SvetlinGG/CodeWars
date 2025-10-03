function oddOrrEven(arr){

    let sum = 0;
    for ( let num of arr){
        sum += num;
    }
        if ( sum % 2 === 0){
            console.log('even');
        }else {
            console.log('odd');
        }
    
    
    

}
oddOrrEven([0, 1, 4]);
oddOrrEven([0, -1, -5]);