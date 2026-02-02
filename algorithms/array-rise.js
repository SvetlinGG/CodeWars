function rise(arr){

    //let result = Array.from({length: 5}, (_, i) => arr[0] + i*10);

    let result = [0, 0, 0, 0, 0];
    result = result.map ( (_, i) => arr[0] + i * 10)
    
    console.log(result);
    


}
rise([11]);