function highestRank(arr){
    let rank = {}

    for( let num of arr){
        if (rank[num]){
            rank[num] ++;
        }else{
            rank[num] = 1
        }
    }
    
    let highestCount = 0;
    let result = null;
    for ( let [number, count] of Object.entries(rank)){
        number = Number(number);
        if(count > highestCount){
            highestCount = count;
            result = number;
        }else if ( count === highestCount && number > result){
            result = number
        }
    }
    console.log(result);
    
    
    
}
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]);
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10] );
highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]);