function pigIt(str){

    //let pattern = '/([a-z,A-Z]+)/';
    
    let char = 'ay';
    let word = str.split(' ');


    for ( let i = 0; i < word.length; i++){
        let newArr = Array.from(word[i])
        //newArr.map( w => w.splice())
        console.log(newArr);
        
    }

    
    
    
}
pigIt('Pig latin is cool')