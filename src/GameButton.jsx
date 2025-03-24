function GameButton({ status, handleStartGame, handleResetGame, handleDamage }) {
    if (status === "inactive") {
        // render the start button //
        return (
            <button className="start" onClick={handleStartGame}>Start</button>
        );

    } else if (status === "active") {
        // render the fire button //
        return (
            <button className="fire" onClick={handleDamage}>Fire</button>
        );
    } else {
        // render the reset button
        return (
            <button className="reset" onClick={handleResetGame}>Reset</button>
        )
    }
}

export default GameButton;