function smallEnough(a, limit){

    a.map(num => {
        if (num <= limit) {
            console.log(true);
            
        } else {
            console.log(false);
            
        }
    })

}
smallEnough([66, 101, 201], 200)
