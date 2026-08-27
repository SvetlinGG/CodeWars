function twoSort(s) {

    let sort;
    let arr = [];
    let newArr = [];
    let newArr2 = [];

    for ( let word of s){
        arr.push(word.charCodeAt(0));
        sort = arr.sort((a, b) => a - b);
        //console.log(sort);
        
    }
    let sortedArr = s.sort();
    let toString = sort[0];
    
    if (sortedArr[0].includes(String.fromCharCode(toString))){
        newArr.push(sortedArr[0])
    }
    for ( let str of newArr){
        newArr2.push(str.split('').join('***'))
    }
    console.log(newArr2.join(''));
    
    
    

}
//twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out"]);
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
