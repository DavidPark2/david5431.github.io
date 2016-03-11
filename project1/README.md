# Chess

## Technologies used
  * html
  * CSS
  * JavaScript
  * jQuery
  * Skeleton

## Approach Taken
  * I started creating a 2 dimensional array that represented the board.  Then I looped it to html.  I appended each chess piece to the board.  Then I implemented drag and drop.

## Installation Instructions
  * Clone this repository
  * Navigate to the directory
  * Open html file with your favorite browser

## Unfinished Work
  * Use 2d collision detection to prevent pawns from going forward if theres a piece one square ahead of it, to detect if the king has been taken off the board, and to prevent pieces, other then the knight, to continue to go past pieces, if it's in the way.
  * Write functions for each piece, so it can only do legal moves
    - **Pawns** - If it's on the starting square, it can move either 1 or 2 square forward, otherwise it can only move 1 square forward
    <iframe border="0" frameborder="0" allowtransparency="true" width="620" height="410" src="https://www.chess.com/emboard?id=92"></iframe>
      * This piece can only take pieces diagonally
    - **Bishop** - It can only move diagonally as far as it wants
    <iframe border="0" frameborder="0" allowtransparency="true" width="620" height="410" src="https://www.chess.com/emboard?id=76"></iframe>
    - **Knight** - It can move in a L, starting with 2 squares in one direction and one more square at a 90 degree angle
    <iframe border="0" frameborder="0" allowtransparency="true" width="620" height="410" src="https://www.chess.com/emboard?id=77"></iframe>
    - **Rook** - It can only move forward, backward, and to the side as far as it wants
    <iframe border="0" frameborder="0" allowtransparency="true" width="620" height="410" src="https://www.chess.com/emboard?id=90"></iframe>
    - **Queen** - It can move forward, backward, diagonally and to the side as far as it wants
    <iframe border="0" frameborder="0" allowtransparency="true" width="620" height="410" src="https://www.chess.com/emboard?id=74"></iframe>
    - **King** - It can move one square forward, backward, diagonally and to the side from its current position
    <iframe border="0" frameborder="0" allowtransparency="true" width="620" height="410" src="https://www.chess.com/emboard?id=73"></iframe>
  * Write a function for castling
  <iframe border="0" frameborder="0" allowtransparency="true" width="620" height="410" src="https://www.chess.com/emboard?id=84"></iframe>
  * Write a function for pawn promotion
  <iframe border="0" frameborder="0" allowtransparency="true" width="620" height="410" src="https://www.chess.com/emboard?id=80"></iframe>
  * Write a function en passant
  <iframe border="0" frameborder="0" allowtransparency="true" width="620" height="410" src="https://www.chess.com/emboard?id=81"></iframe>
  * Write a function for stalemate
  * Put a timer into the game
  * Put a text field that writes the moves each player did each turn
