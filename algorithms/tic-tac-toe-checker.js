// function isSolved(board){

//     let x = 1;
//     let o = 2;
    

//     if ( (board[0][0] && board[1][0] && board[2][0]) === x || 
//         (board[0][1] && board[1][1] && board[2][1]) === x || 
//         (board[0][2] && board[1][2] && board[2][2]) === x || 
//         (board[0][1] && board[0][1] && board[0][2]) === x ||
//         (board[1][0] && board[1][1] && board[1][2]) === x ||
//         (board[2][0] && board[2][1] && board[2][2]) === x ||
//         (board[0][0] && board[1][1] && board[2][2]) === x ||
//         (board[0][2] && board[1][1] && board[2][0]) === x){
//         console.log('Player X is the winner');
        
//     }else if ( (board[0][0] && board[1][0] && board[2][0]) === x || 
//     (board[0][1] && board[1][1] && board[2][1]) === o || 
//     (board[0][2] && board[1][2] && board[2][2]) === o || 
//     (board[0][1] && board[0][1] && board[0][2]) === o ||
//     (board[1][0] && board[1][1] && board[1][2]) === o ||
//     (board[2][0] && board[2][1] && board[2][2]) === o ||
//     (board[0][0] && board[1][1] && board[2][2]) === o ||
//     (board[0][2] && board[1][1] && board[2][0]) === o) {
//         console.log('Player O is the winner'); 
//     }else {
//         console.log("cat's game");
        
//     }

// }
isSolved([[1, 0, 1],
          [0, 1, 2],
          [2, 1, 0]]);
isSolved([[2, 0, 1],
          [0, 2, 2],
          [2, 1, 2]]);
isSolved([[0, 0, 1],
          [0, 1, 2],
          [1, 1, 0]]);