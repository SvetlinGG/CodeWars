function solve(recipe, materials){

    let recipeProduct = Object.entries(recipe);
    let materialsProduct = Object.entries(materials);
    let result ;
    let arr = [];
    
    for ( let [item1, item2] of recipeProduct){
        for (let [item11, item22] of materialsProduct){
            if (item1 === item11){
        
                if ( item22 > item2){
                    result = item22 / item2;
                    arr.push(result);
                    
                }
                
            }
        }
    }
        arr.sort((a, b) => a - b);
        console.log(Math.floor(arr[0]));
   
}
solve({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
solve({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})