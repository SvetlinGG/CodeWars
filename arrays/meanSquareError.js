
function meanSquare(arr1, arr2){

    let result ;
    let newArr = [];

    for ( let i = 0; i < arr1.length; i++){
            if ( arr1 !== arr2){
                result = arr1[i] - arr2[i];
                newArr.push(result);
            
        }
    }
    newArr = newArr.map(n => Math.pow(n, 2))
    console.log(newArr);
    

}
meanSquare([1, 2, 3], [4, 5, 6])

