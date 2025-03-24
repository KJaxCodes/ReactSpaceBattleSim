//This component conditionally renders a message based on game state

function Message({ playerPoints, enemyPoints }) {
    if (playerPoints > 0 && enemyPoints < 0) {
        return (
            <p className="message">Player Won!</p>
        );
    } else if (playerPoints < 0 && enemyPoints > 0) {
        return (
            <p className="message">Enegmy Won!</p>
        );
    } else if (playerPoints < 0 && enemyPoints < 0) {
        return (
            <p className="message">Everyone is blown up 💥</p>
        )
    } else {
        return null;
    }
}

export default Message;