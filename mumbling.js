function accumulated(s){

    console.log(s.split('')                           // ['a','b','c','d']
    .map((char, index) => 
      char.toUpperCase() + char.toLowerCase().repeat(index)
    )
    .join('-'));
    

}
accumulated('abcd')