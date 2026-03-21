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
                string = string.replace(str, vowel[str])
            }
            
        }
    }
    console.log(string);
    
  }
  encode("hello")
  
  function decode(string) {
    return
  }