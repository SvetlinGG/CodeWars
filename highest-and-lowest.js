function highestLowest(num){

    let arr = num.split(' ');
    arr = arr.map(Number);
    let sortedArr = arr.sort((a, b) => a - b);
    let highest = sortedArr.pop();
    let lowest = sortedArr.shift();
    let newArr = [];
    newArr.push(highest);
    newArr.push(lowest);
    console.log(newArr);
    
    
    

    
    


}
highestLowest("1 2 -3 4 5");