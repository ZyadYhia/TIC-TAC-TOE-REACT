// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
export default function GameBoard({onSelectSquare, board}) {
  // export default function GameBoard({onSelectSquare, turns}) {

  // let gameBoard = initialGameBoard;
  // for(const turn of turns) {
  //   const {square, player} = turn;
  //   const {row, cell} = square;
  //   gameBoard[row][cell] = player;
  // }

  // export default function GameBoard({onSelectSquare, activePlayerSymbol}) {

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleCellClick(rowIndex, cellIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map( innerArray => [...innerArray])];
  //     updatedGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
  //     return updatedGameBoard;

  //   });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button disabled={playerSymbol != null} onClick={() => onSelectSquare(rowIndex, cellIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
