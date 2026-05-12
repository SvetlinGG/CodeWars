function encode(string) {
    let vowel = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    }
    for ( let str of string){
        for ( let char in vowel){
            if ( str == char ){
                string = string.replace(str, vowel[char])
            }
            
        }
    }
    console.log(string);

    let decode = (string) => {
        for( let char in vowel){
            for( let str of string){

                if ( str == char){
                    string = string(vowel[char], str)
                }
            }
        }
    }
    let newStr = decode();
    console.log(newStr);
    
    
  }
  encode("hello")
  
  