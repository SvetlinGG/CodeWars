function encode(string) {
    let vowel = {
        a: '1',
        e: '2',
        i: '3',
        o: '4',
        u: '5',
    }
    for ( let str of string){
        for ( let char in vowel){
            if ( str == char){
                string = string.replace(str, vowel[char])
            }
            
        }
    }
    console.log(string);
    
    
  
  
  let decode = (string) => {
    let numbers = {
        '1': 'a',
        '2': 'e',
        '3': 'i',
        '4': 'o',
        '5': 'u',
    }


    for( let str of string){
        for( let num in numbers){

            if ( str == num ){
                string = string.replace(str, numbers[num])
            }
                
            }
        }
    }

let newStr = decode(string);
console.log(newStr);

}
encode("hello")