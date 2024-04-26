/*
36. Valid Sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:


Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

Output: true

Example 2:

Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

Output: false

Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/

export {};

const board = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', ',', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
];
// const arr2 = [1, 2, 3, 41];

const bruteForceSolution = (board: string[][]) => {
  for (let i = 0; i < board.length; i++) {
    let HASH: any = {};
    let VHASH: any = {};
    let BOXHASH: any = {};

    for (let j = 0; j < board.length; j++) {
      HASH[board[i][j]] = (HASH[board[i][j]] || 0) + 1;
      VHASH[board[j][i]] = (VHASH[board[j][i]] || 0) + 1;
      BOXHASH[
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          3 * (i % 3) + (j % 3)
        ]
      ] =
        (BOXHASH[
          board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
            3 * (i % 3) + (j % 3)
          ]
        ] || 0) + 1;
    }

    for (let key in HASH) {
      if (key !== '.' && HASH[key] > 1) {
        return false;
      }
    }

    for (let key in VHASH) {
      if (key !== '.' && VHASH[key] > 1) {
        return false;
      }
    }

    for (let key in BOXHASH) {
      if (key !== '.' && BOXHASH[key] > 1) {
        return false;
      }
    }
  }
  return true;
};

// console.log(bruteForceSolution(board));

const bruteForceSolution_2 = (board: string[][]) => {
  for (let i = 0; i < 9; i++) {
    let RHASH: any = {};
    let VHASH: any = {};
    let BOXHASH: any = {};

    for (let j = 0; j < 9; j++) {
      let rowEle = board[i][j];
      let colEle = board[j][i];
      let boxEle =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          3 * (i % 3) + (j % 3)
        ];

      if (rowEle !== '.') {
        RHASH[rowEle] = (RHASH[rowEle] || 0) + 1;
        if (RHASH[rowEle] > 1) return false;
      }

      if (colEle !== '.') {
        VHASH[colEle] = (VHASH[colEle] || 0) + 1;
        if (VHASH[colEle] > 1) return false;
      }

      if (boxEle !== '.') {
        BOXHASH[boxEle] = (BOXHASH[boxEle] || 0) + 1;
        if (BOXHASH[boxEle] > 1) return false;
      }
      console.log(BOXHASH);
    }
  }
  return true;
};

console.log(bruteForceSolution_2(board));

const optimisedSolution = (board: string[][]) => {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          3 * (i % 3) + (j % 3)
        ];

      if (_row !== '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }

      if (_col !== '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box !== '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
};

// console.log(optimisedSolution(board));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
