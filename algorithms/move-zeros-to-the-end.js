function moveZeros(arr){

    let newArr = [];
    for ( let num of arr){

        if ( num === 0){
            Array.from(arr).replaceAll(num, '')
            newArr.push(num)
        }
    }
    console.log(arr + newArr);
    

}
moveZeros([false,1,0,1,2,0,1,3,"a"]);