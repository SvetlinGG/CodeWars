function arrayDiff(a, b) {
    b = b.join('')
    let replaced = a.map(n => n == b ? '' : n);
    console.log(replaced.join('').split('').map(Number));
    
  
}
arrayDiff([1, 2], [1]);
arrayDiff([1, 2, 2, 2, 3], [2]);