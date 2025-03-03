import {useState} from 'react'
import "./App.css";
//COMPONENT
function Square({value}) {
  const [name, setValue] = useState(null);


  function handleButtonClick() {
    setValue('X');
    console.log('click action', name);
  }
  return<button onClick={handleButtonClick} className="square">{name}</button>
 
}

function App() {
  return (
    <div>
      <div className="board-row">
        <Square value={1}/>
        <Square value={2}/>
        <Square value={3}/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  );
}

export default App;