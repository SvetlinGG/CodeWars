function arrayDiff(a, b) {
    let arr = [];
    //b = b.join(',');
    //a = a.join(',')
    

    let replaced = a.map(n => {
        b.map(num => {
            if (n == num) {
                a.slice(b);
              } else {
                retu