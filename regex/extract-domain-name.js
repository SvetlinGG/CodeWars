function solve(url){
    let pattern = /(^\w+:|^)\/\//;
    
    url = url.replace(pattern, '');
    url = url.replace(/^www\./, '');
    console.log(url.split('.')[0].split('/')[0]);
    
    
    
    
    
    
    
    
    

}
solve("http://github.com/carbonfive/raygun");
solve("http://www.zombie-bites.com");
solve("https://www.cnet.com");
solve("www.xakep.ru");

