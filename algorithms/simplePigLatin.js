function pigIt(str) {
    return str
      .split(" ")
      .map(word => {
        if (!/[a-zA-Z]/.test(word)) return word; 
        return word.slice(1) + word[0] + "ay";
      })
      .join(" ");
  }
  
  console.log(pigIt("Pig latin is cool"));


// function pigIt(str){

//     //let pattern = '/([a-z,A-Z]+)/';
    
//     let char = 'ay';
//     let word = str.split(' ').map( w => {
//         if (!/[a-zA-Z]/.test(word)) {
//             return word;
//         }
//         return w.slice(1) + w[0] + char;
        
//     })
//     console.log(word.join(' '));
    
    
    
    
    
// }
// pigIt('Pig latin is cool');
// pigIt('Hello world !');