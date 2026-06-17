function highestRank(arr){
    let rank = {
        num: 0,
    }

    for( let num of arr){
        if (num){
            rank.num = num;
            rank[0] ++;
        }
    }
    console.log(rank);
    
}
highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]);
//highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10] );
//highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]);