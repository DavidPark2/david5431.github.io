// black top
// white bottom
// top left corner = board[0][0]
// bottom right corner = board[7][7]
var board = [
  ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  [  '',   '',   '',   '',   '',   '',   '',   ''],
  [  '',   '',   '',   '',   '',   '',   '',   ''],
  [  '',   '',   '',   '',   '',   '',   '',   ''],
  [  '',   '',   '',   '',   '',   '',   '',   ''],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr']
];

// html board
function boards() {
  var colorType;
  for (var i = 0; i < board.length; i++) {
    // build html row
    var div = $('<div class="row"></div>');
    for (var j = 0; j < board[i].length; j++) {
      // making the board checkered colored
      if ((i + 1) % 2 !== 0 && (j + 1) % 2 !== 0) {
        colorType = 'white';
      } else if ((i + 1) % 2 !== 0 && (j + 1) % 2 === 0) {
        colorType = 'black';
      } else if ((i + 1) % 2 === 0 && (j + 1) % 2 !== 0) {
        colorType = 'black';
      } else colorType = 'white';
      // fill cols
      $(div).append('<div class="one column square '+ [i] + [j] + ' ' + colorType + '">' + board[i][j] + '</div>');
      $('.container').append(div);
    }
  }
}
////////////////////
// adding images
////////////////////
function img() {
  // add images
  // White Pieces
  for (var i = 60; i < 68; i++) {
    // gave id = 60 - 67 to target the white pawn directly
    $('.' + i).html('<img class="pieces"' + ' ' + 'id=' + i + ' ' + 'src="img/White Pawn.svg" />');
  }
  //WHITE = #68-left rook, #69-left knight, #70-left bishop, #71-queen, #72-king,
  //WHITE = #73-right bishop, #74-right knight, #75-right rook
  $('.70').html('<img class="pieces"' + ' ' + 'id=' + 68 + ' ' + ' src="img/White Rook.svg" />');
  $('.71').html('<img class="pieces"' + ' ' + 'id=' + 69 + ' ' + ' src="img/White Knight.svg" />');
  $('.72').html('<img class="pieces"' + ' ' + 'id=' + 70 + ' ' + ' src="img/White Bishop.svg" />');
  $('.73').html('<img class="pieces"' + ' ' + 'id=' + 71 + ' ' + ' src="img/White Queen.svg" />');
  $('.74').html('<img class="pieces"' + ' ' + 'id=' + 72 + ' ' + ' src="img/White King.svg" />');
  $('.75').html('<img class="pieces"' + ' ' + 'id=' + 73 + ' ' + ' src="img/White Bishop.svg" />');
  $('.76').html('<img class="pieces"' + ' ' + 'id=' + 74 + ' ' + ' src="img/White Knight.svg" />');
  $('.77').html('<img class="pieces"' + ' ' + 'id=' + 75 + ' ' + ' src="img/White Rook.svg" />');
  // Black Pieces
  for (var i = 10; i < 18; i++) {
    // gave id = 10-17 to target the black pawn directly
    $('.' + i).html('<img class="pieces"' + ' ' + 'id=' + i + ' ' + 'src="img/Black Pawn.svg" />');
  }
  //BLACK = #9-left rook, #8-left knight, #7-left bishop, #6-queen, #5-king,
  //BLACK = #4-right bishop, #3-right knight, #2-right rook
  $('.00').html('<img class="pieces"' + ' ' + 'id=' + 9 + ' ' + ' src="img/Black Rook.svg" />');
  $('.01').html('<img class="pieces"' + ' ' + 'id=' + 8 + ' ' + ' src="img/Black Knight.svg" />');
  $('.02').html('<img class="pieces"' + ' ' + 'id=' + 7 + ' ' + ' src="img/Black Bishop.svg" />');
  $('.03').html('<img class="pieces"' + ' ' + 'id=' + 6 + ' ' + ' src="img/Black Queen.svg" />');
  $('.04').html('<img class="pieces"' + ' ' + 'id=' + 5 + ' ' + ' src="img/Black King.svg" />');
  $('.05').html('<img class="pieces"' + ' ' + 'id=' + 4 + ' ' + ' src="img/Black Bishop.svg" />');
  $('.06').html('<img class="pieces"' + ' ' + 'id=' + 3 + ' ' + ' src="img/Black Knight.svg" />');
  $('.07').html('<img class="pieces"' + ' ' + 'id=' + 2 + ' ' + ' src="img/Black Rook.svg" />');
}

///////////////////
// drag and drop
//////////////////
// change this to directly target pieces!!!!!!!!!!!!!!!!!!!!!!!!!
// Black pieces id=2-17
// White pieces id=60-75
var app = app || {};
// var location = [];

function dragAndDrop() {
  app.piece = $('.pieces');
  app.square = $('.square');

  $(app.piece).on('drag', function(evt) {
    evt.preventDefault()
    // console.log(app.piece[0]+ " --------------------------------------")
    // console.log('drag');
    // console.log($(this));
    app.piece = $(this)
  })

  $(app.piece).on('dragend', function(evt) {
    // console.log('dragend');
  })

  $(app.square).on('dragover', function(evt) {
    evt.preventDefault();
    // console.log('In the square');
  })

  $(app.square).on('dragleave', function(evt) {
    // console.log("don't leave!!!");
  })

  $(app.square).on('drop', function(evt) {
    evt.preventDefault()
    $(this).empty();
    $(this).append(app.piece);
  })
}

// //////////////////////////////////
// // Pawn
// //////////////////////////////////
//
// //// Pawn moves 2 spaces
// var forwardTwoPawn = function(column, color) {
//   // starting position for black
//   if (color === 'black') {
//     board[1][column] = '';
//     $('.' + 1 + column).children().remove();
//     board[3][column] = 'bp';
//   // starting position for white
//   } else if (color === 'white') {
//     board[6][column] = '';
//     board[4][column] = 'wp';
//   }
// }
// //// Pawn moves 1 space
// var forwardOnePawn = function(column, row, color) {
//   // black moves
//   if (color === 'black') {
//     if (isInArray('bp', board[row][column])) {
//       board[row][column] = '';
//       board[row + 1][column] = 'bp';
//     }
//   // white moves
//   } else if (color === 'white') {
//     if (isInArray('wp', board[row][column])) {
//       board[row][column] = '';
//       board[row - 1][column] = 'wp';
//     }
//   }
// }
//
// // locationOnBoard board[x][y]
// // <div data-board="x[y]"></div>
// // $(el).data('board') => 'x[y]'
// var movePawn = function(locationOnBoard) {
//   // figure out where it is being moved
//   // then call forwardOnePawn()
//   // or forwardTwoPawn();
// }

////////////////////////////////////////
// Loading the DOM
////////////////////////////////////////

$(document).ready(function() {
  console.log("All resources are loaded");
  boards();
  img();
  console.log(board);
  dragAndDrop();
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
