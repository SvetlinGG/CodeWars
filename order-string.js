function solve(words){

    // if (!words){
    //     console.log('');
        
    // }

    let arr = words
      .split(' ')
      .sort((a, b) => {
        const numA = a.match(/\d/)[0];
        const numB = b.match(/\d/)[0];
        return numA - numB;
      })
      .join(' ');
      console.log(arr);
      


}
solve("is2 Thi1s T4est 3a")