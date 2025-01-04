export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>Winner: {winner}</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>Would you like to play again?</p>
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
}
