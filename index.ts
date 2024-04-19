// hello ther
// write a func that takes in a string and returns true if string in file else return false
// Test Cases:
// - Input: "DDA", Output: False
// - Input: "ADD", Output: True

// 1.
// parse text file
// add strings into array
// join on \n newline character

// 2. array.indexOf(inp) => if !== -1 return true

// const fs = require('node:fs');
console.log('foo');
import { promises as fs } from 'fs';
const test1 = 'DDA';
const test2 = 'ADD';
const test3 = 'ZZZ';
// function fileContainsWord(word) {
//   const data = fs.readFileSync('./dictionary.txt', 'utf-8');
//   const arr = data.split('\n');
//   if (arr.indexOf(word) !== -1) {
//     return true;
//   } else {
//     return false;
//   }
// }

async function readFile() {
  const data = await fs.readFile('dictionary.txt', 'binary');
  return Buffer.from(data);
}

const data = await readFile();
console.log('data', data);
// console.log(fileContainsWord(test3));

// new func- take input str, return all possible valid words that in dictionary
// Input: "DDA", Output: "ADD", "DAD", "AD"

// get all permutations of input str (DDA => ADD, DAD, etc), store in array
// take resulting powerset, and for each el in powerset, check if contained in dict

// const getAllSubsets = (inputArr) => {
//   let result: Array<any> = [];

//   const permute = (arr, m = []) => {
//     if (arr.length === 0) {
//       result.push(m);
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr.slice();
//         let next = curr.splice(i, 1);
//         permute(curr.slice(), m.concat(next));
//       }
//     }
//   };

//   permute(inputArr);

//   return result;
// };

function getAllSubsets(A, comb = [], result = [comb]) {
  return A.reduce(
    (acc, a, i) =>
      acc.concat(
        getAllSubsets(
          A.slice(0, i).concat(A.slice(i + 1)),
          comb.concat(a)
        )
      ),
    result
  );
}
// function getAllSubsets(array) {
//   const subsets: Array<any> = [[]];

//   for (const el of array) {
//     const last = subsets.length - 1;
//     for (let i = 0; i <= last; i++) {
//       subsets.push([...subsets[i], el]);
//     }
//   }

//   return subsets;
// }

// console.log(getAllSubsets('DDA'.split(''), []));
// const wordAsArr = (word) => word.split('');

// const powersetArr = getAllSubsets(wordAsArr);

// function fileContainsWord(powersetArr) {
//   const data = fs.readFileSync('./dictionary.txt', 'utf-8');
//   const arr = data.split('\n');
//   const result = new Set();
// //   powersetArr.forEach((el) => {
// //     const elAsStr = el.join('');
// //     if (arr.indexOf(elAsStr) !== -1) {
// //       result.add(elAsStr);
// //     } else {
// //     }
// //   });
//   return result;
// }
// const data = await fs
//   .readFile('./dictionary.txt', 'utf-8')
//   .then((data) => {
//     const arr = data.split('\n');
//   })
//   .catch((err) => {
//     console.error('Error reading file:', err);
//   });
// console.log('data', data);
// const testArr = powersetArr(wordAsArr('DDA'));
// console.log(fileContainsWord(getAllSubsets('SBAD'.split(''), [])));

// given scrabble board (15 x 15 matrix)
// get all words from board
// check if all words are valid (from dictionary)

const testBoard = `...............
...............
...............
...............
...............
...............
.ZYMURGY.......
.O.O...E.......
...B...L.......
.......L.......
.......O.......
.......WIND....
.........A.....
.........N.....
...............`;
// iterate across board, and collect "words":

// base case: empty square, do nothing
// else: check surrounding squares from starting square
//      go right (x+ 1 zymurgy), stop at empty square (that's one word, push to array)
//      go up, down, left (y - 1, y + 1, x - 1), stop at empty square, push word to results array

// at end of traversal, get results array, and check if each el in dictionary

const boardAsArr = testBoard.split('');
console.log(boardAsArr);
function parseBoard(matrix) {
  const words: Array<any> = [];
  for (let y = 0; y < matrix.length; y++) {
    // for (let x = 0; x < matrix[0].length; x++) {
    //   const curr = matrix[y][x];
    //   if (curr !== '.') {
    //     // go right until empty square
    //     let tempX = x;
    //     let word = '';
    //     while (tempX < 15) {
    //       const letter = matrix[y][tempX];
    //       // TODO if (letter) is blank continue
    //       word += letter;
    //       tempX++;
    //       // go right
    //     }
    //     words.push(word);
    //   }
    // }
  }
  return words;
}

// console.log(parseBoard(boardAsArr));
// const board = boardAsArr;
// function extractWordsFromBoard(board) {
//   const words = [];
//   const rows = board.length;
//   const cols = board[0].length;

//   // Extract horizontal words from rows
//   for (let r = 0; r < rows; r++) {
//     const rowWord = board[r].join('');
//     words.push(rowWord);
//   }

//   // Extract vertical words from columns
//   for (let c = 0; c < cols; c++) {
//     let colWord = '';
//     for (let r = 0; r < rows; r++) {
//       colWord += board[r][c];
//     }
//     words.push(colWord);
//   }

//   return words;
// }

// console.log(extractWordsFromBoard(testBoard));
