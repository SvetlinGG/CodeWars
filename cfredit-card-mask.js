function maskify(cc) {

    let code = cc.split('');
    let lastItems = code.slice(-4).join('');
    let arr = [];
    for (let i= 0; i < code.length - 4; i ++){
        let symbol = code[i].replace(code[i], '#');
        arr.push(symbol);
    }
    arr.push(lastItems)
    console.log(arr.join(''));
  
}
maskify("4556364607935616");
maskify("64607935616");
maskify('1');
maskify('Skippy');
maskify('')
