import { useState } from "react";

function Battle() {
    //set state to update playerPoints and enemyPoints, both start at 100
    const [points, setPoints] = useState({ playerPoints: 100, enemyPoints: 100, message: "In the cold expanse, only the bold survive. Ready… aim… fire!" });
    //create random num generator to generate random damage
    function randomDamage() {
        return Math.floor(Math.random() * 100);
    }


    //fire button onclick function that will copy the points objects and update it with the randomDamage
    function applyDamage() {
        const newPoints = { ...points, playerPoints: points.playerPoints - randomDamage(), enemyPoints: points.enemyPoints - randomDamage() }
        setPoints(newPoints);
    }

    //do i need a separate button that is a reset button?
    function reset() {
        setPoints({ playerPoints: 100, enemyPoints: 100, message: "In the cold expanse, only the bold survive. Ready... aim... fire!" })
    }

    return (
        <div>
            <div>
                <h1>Space Battle Simulator</h1>
            </div>
            <div>
                <span className="player">Player Health: {points.playerPoints}</span>
                <button className="fire" onClick={applyDamage}>Fire</button>
                <span className="enemy">Enemy Health: {points.enemyPoints}</span>
            </div>
            <div>
                <p className="message">{points.message}</p>
            </div>
        </div>
    )
}

export default Battle;

// const diceArr = [];
// for (let i = 0; i < numDice; i++) {
//     const num = Math.floor(Math.random() * maxVal) + 1;
//     //gives a random number from 1 - 20
//     diceArr.push(num)
// }

// function randomEmoji() {
//     const choices = ["🤖", "😸", "😘", "👽", "🧙🏼‍♀️", "🦄"];
//     return choices[Math.floor(Math.random() * choices.length)];
// }



//States - GameStatus is a state, PlayerHealth is a state, EnemyHealth is a state ???

// const InitialHealth = 100;
// const GameStatus = ""; //active, win, loss, draw - connected to firebutton or restartbutton, game message

// const PlayerHealth = InitialHealth;
// const EnemyHealth = InitialHealth;

// function FireButton

//onClick
//RandomDamage, Max and Min limits??
//Re-render PlayerHealth and EnemyHealth based on damage


//Conditional: If PlayerHealth or EnemyHealth is less than or equal to 0, gameover
// if both are 0, Stalemate message and RestartButton displays.
// If PlayerHealth is less than or equal to 0, gameover, and if EnemyHealth is greater than 0, You lost message and RestartButton displays.
// If EnemyHealth is less than or equal to 0, gameover, and if PlayerHealth is greater than 0, You won message and RestartButton displays.

// function RestartButton

// function GameMessage = ""; //"Congratulations you won!" "Stalemate, both battleships down" "You lost, better luck next time!"
