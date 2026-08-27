function solve(words){
    
    
    let text = words.split(' ');
    text.sort((a, b) => {
      let numA = a.match(/\d/g);
      let numB = b.match(/\d/g);

      return numA - numB;
    })
  
    console.log(