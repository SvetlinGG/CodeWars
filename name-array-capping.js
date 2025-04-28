function solve(arr){

arr = arr.map(word => String(word).charAt(0).toUpperCase() + String(word).slice(1).toLowerCase());
console.log(arr);


}
solve(['jo', 'nelson', 'jurie']);
solve(['KARLY', 'DANIEL', 'KELSEY']);