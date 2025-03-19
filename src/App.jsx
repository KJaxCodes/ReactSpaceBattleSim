import { useState } from 'react'
import './App.css'

//States - GameStatus is a state, PlayerHealth is a state, EnemyHealth is a state ???

const InitialHealth = 100;
const GameStatus = ""; //active, win, loss, draw - connected to firebutton or restartbutton, game message

const PlayerHealth = InitialHealth;
const EnemyHealth = InitialHealth;

function FireButton

    //onClick
    //RandomDamage, Max and Min limits
    //Re-render PlayerHealth and EnemyHealth based on damage


 //Conditional: If PlayerHealth or EnemyHealth is less than or equal to 0, gameover
 // if both are 0, Stalemate message and RestartButton displays.
 // If PlayerHealth is less than or equal to 0, gameover, and if EnemyHealth is greater than 0, You lost message and RestartButton displays.
 // If EnemyHealth is less than or equal to 0, gameover, and if PlayerHealth is greater than 0, You won message and RestartButton displays.

function RestartButton

function GameMessage = ""; //"Congratulations you won!" "Stalemate, both battleships down" "You lost, better luck next time!"


function App() {
  

  return (
    <>
      <div>
        <h1>Space Battle Simulator</h1>
      </div>
      <div>
        PlayerHealth
        FireButton / RestartButton
        EnemyHealth
      </div>
      <div>
        GameMessage
      </div>



    </>
  )
}

export default App
