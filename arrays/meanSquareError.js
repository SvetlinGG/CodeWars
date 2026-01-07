
function meanSquare(arr1, arr2){

    let result ;
    let newArr = [];
    let sum = 0;

    for ( let i = 0; i < arr1.length; i++){
            if ( arr1 !== arr2){
                result = arr1[i] - arr2[i];
                newArr.push(result);
            
        }
    }
    newArr = newArr.map(n => Math.pow(n, 2))
    let length = newArr.length;
    for ( let num of newArr){
        sum += num;
    }
    let newResult = sum / length
    console.log(newResult);
    
    
    

}
meanSquare([1, 2, 3], [4, 5, 6]);
meanSquare([10, 20, 10, 2], [10, 25, 5, -2]);
meanSquare([-1, 0], [0, -1])

