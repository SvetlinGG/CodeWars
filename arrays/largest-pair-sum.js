function largestPairSum(numbers){

    // let sorted = numbers.sort((a, b) => a - b);
    // let lastNum = sorted.pop();
    // let prevNum = sorted.pop();
    // let sum = lastNum + prevNum
    // console.log(`${sum} (= ${lastNum} + ${prevNum})`);
    const sorted = [...numbers].sort((a, b) => a - b);
