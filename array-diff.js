function arrayDiff(a, b) {
    b = b.join(',')
    let replaced = a.map(n => n == b ? '' : n);
    //console.log(replaced.join('').split('').map(Number));
    console.log(b);
    
  
}
arrayDiff([1, 2], [1]);
arrayDiff([1, 2, 2, 2, 3], [2]);
arrayDiff([1, 2, 3], [1, 2,3]);