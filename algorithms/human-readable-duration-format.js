function solve(seconds){

    let mins = seconds % (60 * 60);
    let minutes = Math.floor(mins / 60);

    let sec = mins % 60;
    let second = Math.ceil(sec);
    let hour = Math.floor(second / (60 * 60));
    //console.log(`${hour} hour, ${minutes} minute and ${second} second`);
    if ( hour <= 0){
        console.log(`${minutes} minute and ${second} second`);
    }else if (minutes <= 0){
        console.log(`${second} second`);
    }else {
        console.log(`${hour} hour, ${minutes} minute and ${second} second`);
    }

}
//solve(62);
solve(1);