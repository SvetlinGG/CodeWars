function matrix(arr){
    
    // let row1 = arr[0];
    // let row2 = arr[1];
    // let row3 = arr[2];
    // let row4 = arr[3];
    // let row5 = arr[4];
    
    // for (let i = 0; i<row1.length; i++){
    //     for (let j = i+1; j<row2.length; j++){
    //         for (let k = j+1; k<row3.length; k++){
    //             for (let l = k+1; l<row4.length; l++){
    //                 for (let m = l+1; m<row5.length; m++){
    //                     console.log(row1[i]);
    //                     console.log(row2[j]);
    //                     console.log(row3[k]);
    //                     console.log(row4[l]);
    //                     console.log(row5[m]);
                        
    //                 }
    //             }
    //         }
    //     }
    // }
    let result;
    for (let i = 0; i < arr.length; i++){
        if (arr[i][i] < 0){
            arr[i][i] = 0
        }else {
            arr[i][i] = 1;
        }
        result = arr;
    }
    console.log(result);
    
    
}
matrix([
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
  ]);