function solve(url){
    let pattern = /^(?:https?:\/\/|w+)?(www\.)?([a-z]+)/
    
    let match = url.match(pattern);
    
    console.log(match[0]);
    console.log(match[1]);
    
    
    
    
    
    

}
solve("http://github.com/carbonfive/raygun");
//solve("http://www.zombie-bites.com");
//solve("https://www.cnet.com");
//solve("www.xakep.ru");

