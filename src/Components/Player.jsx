import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    // it is not best practice to use this method
    // because it will not work as expected according to the React documentation and scheduling
    // setIsEditing(!isEditing)
    // instead, use the function form of setState
    setIsEditing((isEditing) => !isEditing);   
    if (isEditing) {
      onChangeName(symbol, playerName); 
    }
  }
  function handleChange(event) {
    setPlayerName(() => event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" defaultValue={playerName} onChange={handleChange}/>
        )}
        <span id="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>
      {/* <button onClick={() => setIsEditing(!isEditing)}> */}
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  );
}
