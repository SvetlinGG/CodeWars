function solve(num){
    
    let mind = num % (60 * 60);
    let minutes = Math.floor(mind / 60);

    let secd  = mind % 60;
    let seconds = Math.ceil(secd);
    let hour = Math.floor(num / ( 60*60));
    //console.log(`${hour}:${minutes}:${seconds}`);
    
    if ( seconds < 10){
        seconds = '0' + seconds;
    }
    if(  minutes < 10){
        minutes = '0' + minutes;
    }
    if(  hour < 1){
        hour = '0' + hour;
    }
    
    console.log(`${hour}:${minutes}:${seconds}`);
    
    
    
    

    


}
//solve(359999);
//solve(3600);
//solve(3620)
//solve(90);
solve(3599)