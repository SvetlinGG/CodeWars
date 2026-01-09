function pigIt(str){

    let pattern = '/([a-z,A-Z]+)/';
    let char = 'ay';
    let word = str.split(' ').map(w => w.slice(0));
    console.log(word);
    
    
}
pigIt('Pig latin is cool')