function sum(arr, result){

    let newArr = [];

    for ( let i = 0; i < arr.length; i++){
        for ( let j = i+1; j < arr.length; j++){
            if ( arr[i] + arr[j] === result){
                newArr.push(i);
                newArr.push(j);
            }
        }
    }
    console.log(newArr);
    


}
sum([1, 2, 3, 4], 6)
sum([2, 1, 4, 4], 3)