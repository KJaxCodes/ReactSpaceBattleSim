import { useState } from "react";
// my components //
import Message from "./Message";
import GameButton from "./GameButton";

function Battle() {
    //set state to update playerPoints and enemyPoints, both start at 100
    const [points, setPoints] = useState({ playerPoints: 100, enemyPoints: 100 });
    const [gameState, setGameState] = useState({ message: "In the cold expanse, only the bold survive. Start game!", status: "inactive" });

    //create random num generator to generate random damage
    function randomDamage() {
        return Math.floor(Math.random() * 100);
    }
    //handle start button clicked
    function handleStartGame() {
        setGameState({ status: "active", message: "Defend yourself!" })
    }

    //handle reset button clicked
    function handleResetGame() {
        setGameState({ status: "active", message: "Defend yourself!" })
        //game starts with player and enemy at 100
        setPoints({ playerPoints: 100, enemyPoints: 100 })
    }

    //fire button onclick function that will copy the points objects and update it with the randomDamage, 
    // use conditional to show game over if one or both lose

    function handleDamage() {
        const newPoints = { ...points, playerPoints: points.playerPoints - randomDamage(), enemyPoints: points.enemyPoints - randomDamage() }
        console.log(newPoints);
        if (newPoints.enemyPoints < 0 || newPoints.playerPoints < 0) {
            //the game is over
            setGameState({ status: "over", message: "Game Over" });
            setPoints(newPoints);
        } else {
            setPoints(newPoints);
        }
    }

    return (
        <div>
            <div>
                <h1>Space Battle Simulator</h1>
            </div>
            <div>
                <span className="player">Player Health: {points.playerPoints}</span>
                <GameButton
                    status={gameState.status}
                    handleStartGame={handleStartGame}
                    handleResetGame={handleResetGame}
                    handleDamage={handleDamage}
                />
                <span className="enemy">Enemy Health: {points.enemyPoints}</span>
            </div>
            <div>
                <p className="message">{gameState.message}</p>
            </div>
            <div>
                <Message
                    playerPoints={points.playerPoints}
                    enemyPoints={points.enemyPoints}
                />
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
