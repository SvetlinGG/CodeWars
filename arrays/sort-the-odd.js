function sortArray(arr) {

   let odd = arr.filter( n => n % 2 !== 0).sort((a, b) => a - b);
   let i = 0;
  
    
   arr = arr.map( num => {
    if ( num % 2 !== 0){
      const v = odd[i];
      i ++;
      console.log(v);
    }
    //console.log(num);
    
   })
   
  }
  sortArray([5, 8, 6, 3, 4])
  //sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])