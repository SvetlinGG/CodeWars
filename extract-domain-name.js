function solve(url){
    let pattern = /(https?:\/\/)([a-z]+\.[a-z]+\W+)/
    let match = url.match(pattern);
    
    console.log(match[2]);
    
    
    
    

}
solve("http://github.com/carbonfive/raygun");
solve("http://www.zombie-bites.com");
solve("https://www.cnet.com");
//solve("www.xakep.ru");

