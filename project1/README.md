# First Project - Chess

## **Outline**
1. Making the board
  * 8x8 board
    - 2 dimensional array
2. Pieces
  * For now, I will create 3 pieces
    - **King** - This piece can move one spot forward, backward, left, right and diagonal in any direction
    - **Rook** - This piece can move any amount of space forward, backward, left and right
    - **Pawn** - This piece can move 1 or 2 spot forward on the first move, and then only 1 spot forward after that
3. Moving the Pieces
  * When pieces are clicked, highlight where it can move
  * To move the pieces, you can either click and drag the piece or click the piece and then click the place you want to move it to
  * If the piece can't move to the location selected, move the piece back to where it was
4. Winning
  * To win the game, you must either checkmate the king or the opposing player must forfeit
5. Stalemate
  * Three-fold Repetition = If position has been repeated 3 times, it may result in a draw
    - A draw button will appear
  * When a player is not in a check, and can no longer make a move
  * Or if the players agree to draw
