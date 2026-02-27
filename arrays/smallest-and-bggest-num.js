function minMax(arr) {

    arr = arr.sort((a, b) => a - b);
	let min = arr.shift();
    let max = arr.pop();
    let newArr = [];
    newArr.push(min)
    newArr.push(max)
    console.log(newArr);
    
    
    
}
minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5])