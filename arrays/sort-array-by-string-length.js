function sortByLength (array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest
  let arr = array.sort((a,b) => a.length - b.length)
    console.log(arr);
    
    
}
sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]);