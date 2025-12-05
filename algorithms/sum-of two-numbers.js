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
    console.log(newArr.length);
    console.log(newArr);
    


}
sum([7, 8, 9, 10, 5], 15)