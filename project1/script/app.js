// black top
// white bottom
// top left corner = board[0][0]
// bottom right corner = board[7][7]
var board = [
  ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  [  '',   '',   '',   '',   '',   '',   '',   ''],
  [  '',   '',   '',   '',   '',   '',   '',   ''],
  [  '',   '',   '',   '',   '',   '',   '',   ''],
  [  '',   '',   '',   '',   '',   '',   '',   ''],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br']
];

// html board
for (var i = 0; i < board.length; i++) {
  // build html row
  var div = $('<div class="row"></div>');
  for (var j = 0; j < board[i].length; j++) {
    // fill cols
    $(div).append('<div class="one column square">' + board[i][j] + '</div>');
    $('.container').append(div);
  }
}

//// Pawn moves 2 spaces
var forwardTwoPawn = function(column, color) {
  // starting position for black
  if (color === 'black') {
    board[1][column] = '';
    board[3][column] = 'bp';
  // starting position for white
  } else if (color === 'white') {
    board[6][column] = '';
    board[4][column] = 'wp';
  }
}
//// Pawn moves 1 space
var forwardOnePawn = function(column, row, color) {
  // black moves
  if (color === 'black') {
    if (isInArray('bp', board[row][column])) {
      board[row][column] = '';
      board[row + 1][column] = 'bp';
    }
  // white moves
  } else if (color === 'white') {
    if (isInArray('wp', board[row][column])) {
      board[row][column] = '';
      board[row - 1][column] = 'wp';
    }
  }
}

// locationOnBoard board[x][y]
// <div data-board="x[y]"></div>
// $(el).data('board') => 'x[y]'
var movePawn = function(locationOnBoard) {
  // figure out where it is being moved
  // then call forwardOnePawn()
  // or forwardTwoPawn();
}



$(document).ready(function() {
  console.log("All resources are loaded");
  console.log(board);
  forwardTwoPawn(4, 'black');
});




// //// Going to use this counter to determine whether its white or blacks turn using
// //// example (x % 2 = 0), this will increase after every turn
// var counter = 0;
// function whosTurnIsIt() {
//   while (true) {
//     if (counter % 2 === 0) {
//       counter++;
//       return 'white';
//     } else {
//       counter++;
//       return 'black';
//     }
//   }
// }

// //// Whether board has piece
// function isInArray(value, array) {
//   return array.indexOf(value) > -1;
// }
//
