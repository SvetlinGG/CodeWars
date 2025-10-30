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

function isSolved(board) {
    const LINES = [
      // rows
      [[0,0],[0,1],[0,2]], [[1,0],[1,1],[1,2]], [[2,0],[2,1],[2,2]],
      // cols
      [[0,0],[1,0],[2,0]], [[0,1],[1,1],[2,1]], [[0,2],[1,2],[2,2]],
      // diagonals
      [[0,0],[1,1],[2,2]], [[0,2],[1,1],[2,0]],
    ];
  
    // check winners
    for (const player of [1, 2]) {
      const won = LINES.some(line => line.every(([r, c]) => board[r][c] === player));
      if (won) return player; // 1 for X, 2 for O
    }
  
    // unfinished (-1) vs draw (0)
    const hasEmpty = board.some(row => row.includes(0));
    return hasEmpty ? -1 : 0;
  }
  
isSolved([[1, 0, 1],
          [0, 1, 2],
          [2, 1, 0]]);
isSolved([[2, 0, 1],
          [0, 2, 2],
          [2, 1, 2]]);
isSolved([[0, 0, 1],
          [0, 1, 2],
          [1, 1, 0]]);