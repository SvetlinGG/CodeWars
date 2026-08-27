function smallEnough(a, limit){

    let positive = 0;
    let negative = 0;

    a.map(num => {
        if (num <= limit) positive ++;
            
         else negative ++;
    })
    if ( negative > 0){
        console.log(false);
        
    }else{
        console.log(true);
        
    }

}
smallEnough([66, 101, 201], 200)
