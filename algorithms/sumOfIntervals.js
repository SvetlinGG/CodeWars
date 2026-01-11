function sumIntervals(intervals){

    let arr = [];
    let sum = 0;

    for ( let i = 0; i < intervals.length; i++){
        let firs = intervals[i][0];
        let second = intervals[i][1];
        let diff = second - firs;
        arr.push(diff);
    }
    for (let num of arr){
        sum += num
    }
    console.log(sum);
    
    


}
 sumIntervals([[1, 2],
    [6, 10],
    [11, 15]]);
sumIntervals([[1, 4],
    [7, 10],
    [3, 5]
 ]);
sumIntervals([[1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
 ])
