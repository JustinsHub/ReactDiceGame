import React, {useState} from 'react'
import '../Dice.css'


const Dice = ({numDice = 6, maxVal = 10}) =>{
    const [rolls, setRolls] = useState(Array.from({length: numDice}))
    const rollDice = ()=>{
        setRolls(rolls =>{
            rolls.map(roll => Math.floor(Math.random() * maxVal) +1)
        })
    }
    return (
    <div className="Dice">
        {rolls.map(roll => <div className="Dice-roll">{roll}</div>)}
        <button onClick={rollDice}>Roll!</button>
    </div>
    )
}

export default Dice