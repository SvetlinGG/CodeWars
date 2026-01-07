
function meanSquare(arr1, arr2){

    let result ;
    let newArr = [];

    for ( let i = 0; i < arr1.length; i++){

        for ( let j = 0; j < arr2.length; j++){
            if ( arr1[i] !== arr2[j]){
                result = arr1[j] - arr2[i];
                newArr.push(result);
            }
        }
    }
    console.log(newArr);
    

}
meanSquare([1, 2, 3], [4, 5, 6])

