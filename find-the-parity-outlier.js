function solve(arr){

    let even = arr.filter(num => num % 2 === 0);
    let odd = arr.filter(num => num % 2 !== 0);

    // if ( even.length === 1){
    //     even[0];
    // }else {
    //     odd[0];
    // }
    console.log(even);
    console.log(odd);
    

}
solve([2, 4, 0, 100, 4, 11, 2602, 36]);
//solve([160, 3, 1719, 19, 11, 13, -21]);