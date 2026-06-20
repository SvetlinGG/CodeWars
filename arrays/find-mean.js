function findAverage(nums) {
    let sum = 0;
    let length = nums.length;
    for ( num of nums){
        sum += num
    }
    let average = sum/ length;
    console.log(average);
    
}
findAverage([1, 3, 5, 7]);