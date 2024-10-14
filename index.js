const chessboard = document.getElementById('chessboard');
const colorSelector = document.getElementById('color');
const resetButton = document.getElementById('reset');

// Initialize chessboard squares
const initialBoard = [
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"]
];

// Function to create the chessboard
function createBoard() {
  chessboard.innerHTML = ''; // Clear the board
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      
      // Alternate square colors
      if ((row + col) % 2 === 0) {
        square.classList.add('white');
      } else {
        square.classList.add('black');
      }

      // Add initial pieces
      if (initialBoard[row][col]) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.innerText = initialBoard[row][col];
        square.appendChild(piece);
      }

      // Add the square to the chessboard
      chessboard.appendChild(square);
    }
  }
}

// Create the board initially
createBoard();

let selectedPiece = null;

// Add click event to move pieces (simple drag-and-drop)
chessboard.addEventListener('click', (e) => {
  const target = e.target;

  // Select piece if clicked on one
  if (target.classList.contains('piece')) {
    selectedPiece = target;
  } 
  // Move the piece if clicked on an empty square
  else if (selectedPiece && target.classList.contains('square') && !target.firstChild) {
    target.appendChild(selectedPiece);
    selectedPiece = null;
  }
});

// Reset game functionality
resetButton.addEventListener('click', () => {
  const selectedColor = colorSelector.value;
  if (selectedColor === 'black') {
    initialBoard[0][0] = "♜"; initialBoard[0][1] = "♞"; initialBoard[0][2] = "♝"; initialBoard[0][3] = "♛"; initialBoard[0][4] = "♚"; initialBoard[0][5] = "♝"; initialBoard[0][6] = "♞"; initialBoard[0][7] = "♖";
    initialBoard[1][0] = "♟"; initialBoard[1][1] = "♟"; initialBoard[1][2] = "♟"; initialBoard[1][3] = "♟"; initialBoard[1][4] = "♟"; initialBoard[1][5] = "♟"; initialBoard[1][6] = "♟"; initialBoard[1][7] = "♟";
    initialBoard[6][0] = ""; initialBoard[6][1] = ""; initialBoard[6][2] = ""; initialBoard[6][3] = ""; initialBoard[6][4] = ""; initialBoard[6][5] = ""; initialBoard[6][6] = ""; initialBoard[6][7] = "";
    initialBoard[7][0] = ""; initialBoard[7][1] = ""; initialBoard[7][2] = ""; initialBoard[7][3] = ""; initialBoard[7][4] = ""; initialBoard[7][5] = ""; initialBoard[7][6] = ""; initialBoard[7][7] = "";
  } else {
    initialBoard[0][0] = "♖"; initialBoard[0][1] = "♘"; initialBoard[0][2] = "♗"; initialBoard[0][3] = "♕"; initialBoard[0][4] = "♔"; initialBoard[0][5] = "♗"; initialBoard[0][6] = "♘"; initialBoard[0][7] = "♖";
    initialBoard[1][0] = "♙"; initialBoard[1][1] = "♙"; initialBoard[1][2] = "♙"; initialBoard[1][3] = "♙"; initialBoard[1][4] = "♙"; initialBoard[1][5] = "♙"; initialBoard[1][6] = "♙"; initialBoard[1][7] = "♙";
    initialBoard[6][0] = "♟"; initialBoard[6][1] = "♟"; initialBoard[6][2] = "♟"; initialBoard[6][3] = "♟"; initialBoard[6][4] = "♟"; initialBoard[6][5] = "♟"; initialBoard[6][6] = "♟"; initialBoard[6][7] = "♟";
    initialBoard[7][0] = "♜"; initialBoard[7][1] = "♞"; initialBoard[7][2] = "♝"; initialBoard[7][3] = "♛"; initialBoard[7][4] = "♚"; initialBoard[7][5] = "♝"; initialBoard[7][6] = "♞"; initialBoard[7][7] = "♜";
  }

  createBoard(); // Reset the chessboard
});
