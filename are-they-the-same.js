function compSame(array1, array2){

    let result = [];

    for ( let num1 of array1){
        for ( let num2 of array2){
            if (Math.pow(num1, 2) == num2){
                result.push(num1);
            }

        }
    }
    console.log(result);
    


}
compSame([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])