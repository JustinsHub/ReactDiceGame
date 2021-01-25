import Dice from './DiceGame/Dice'
import './App.css';


function App() {
  return (
    <div className="App">
      <Dice numDice={2} maxVal={6}/>
    </div>
  );
}

export default App;
