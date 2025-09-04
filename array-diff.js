function arrayDiff(a, b) {
    let arr = [];
    //b = b.join(',');
    //a = a.join(',')
    

    let replaced = a.map(n => {
        b.map(num => {
            if (n == num) {
                a.slice(b);
              } else {
                return n;
              }
        })

    });
    console.log(replaced.join('').split('').map(Number));
    
    
  
}
arrayDiff([1, 2], [1]);
arrayDiff([1, 2, 2, 2, 3], [2]);
arrayDiff([1, 2, 3], [1, 2]);