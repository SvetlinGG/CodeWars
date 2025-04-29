function solve(arr){

    let newArr = [];

    arr.filter(num => {
        if ( num !== 0){
            newArr.push(num)
        }
    });
    arr.map(num => {
        if ( num === 0){
            newArr.push(num)
        }
    })
    console.log(newArr);
    


}
solve([false,1,0,1,2,0,1,3,"a"])