function distinct(a) {

  let arr = [];
  for ( let i =0; i < a.length; i++){
        if([...arr].indexOf(a[i]) === -1){
            arr.push(a[i])
        }
    
  }
  console.log(arr);
  


}
distinct([1, 1, 2]);
distinct([1, 2, 1, 1, 3, 2]);