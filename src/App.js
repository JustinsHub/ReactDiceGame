import Dice from './DiceGame/Dice'
import './App.css';


function App() {
  return (
    <div className="App">
      <Dice numDice={4} maxVal={20}/>
    </div>
  );
}

export default App;
