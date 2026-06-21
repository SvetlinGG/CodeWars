function largestPairSum(numbers){

    // let sorted = numbers.sort((a, b) => a - b);
    // let lastNum = sorted.pop();
    // let prevNum = sorted.pop();
    // let sum = lastNum + prevNum
    // console.log(`${sum} (= ${lastNum} + ${prevNum})`);
    const sorted = [...numbers].sort((a, b) => a - b);
    console.log(sorted[sorted.length - 1] + sorted[sorted.length - 2]);


}
largestPairSum([10, 14, 2, 23, 19]);
largestPairSum([99, 2, 2, 23, 19]);