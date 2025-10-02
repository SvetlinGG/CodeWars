function solve(url){
    let pattern = /^(?:https?:\/\/|w+)?(www\.)?/
    
    let match = url.match(pattern);
    
    console.log(match[0]);
    
    
    
    
    
    

}
solve("http://github.com/carbonfive/raygun");
solve("http://www.zombie-bites.com");
solve("https://www.cnet.com");
solve("www.xakep.ru");

