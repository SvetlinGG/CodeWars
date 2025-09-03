function highestLowest(num){

    let arr = num.split(' ').map(Number);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    console.log(`${max} ${min}`);
  
}
highestLowest("1 2 -3 4 5");
highestLowest("1 9 3 4 -5")