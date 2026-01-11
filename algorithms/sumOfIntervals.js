function sumIntervals(intervals){

    let arr = [];

    for ( let i = 0; i < intervals.length; i++){
        let firs = intervals[i][0];
        let second = intervals[i][1];
        let diff = second - firs;
        arr.push(diff);
    }
    console.log(arr);
    


}
sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
 ])