function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   const lower = string.toLowerCase();
 
   for (let char of alphabet) {
     if (!lower.includes(char)) {
       return false;
     }
   }
 
   return true;
 }