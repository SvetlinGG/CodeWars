function solve(recipe, materials){

    let recipeProduct = Object.keys(recipe);
    let materialsProduct = Object.keys(materials);

    for ( let item1 of recipeProduct){
        for ( let item2 of materialsProduct){
            if ( item1 === item2){
                console.log(item1);
                
            }
        }
    }
    
    
    


}
solve({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})