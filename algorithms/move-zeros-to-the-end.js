function moveZeros(arr){

    let arrOne = [];
    let arrTwo = []
    
    for ( let num of arr){

        if ( num !== 0){
            arrOne.push(num);
        }

        if ( num === 0){
            arrTwo.push(num)
        }
    }
    console.log(arrOne.concat(arrTwo));
    

}
moveZeros([false,1,0,1,2,0,1,3,"a"]);
moveZeros([1,2,0,1,0,1,0,3,0,1])