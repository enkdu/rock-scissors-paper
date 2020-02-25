import React from 'react';
import './score-board.css';

const ScoreBoard = ({ userWins, opponentWins }) => {

        return (
            <div className="score-board-wrapper">
                <div className="user-score win"><span>{userWins}</span></div>
                <div className="versus-logo"><span>VS</span></div>
                <div className="opponent-score lose"><span>{opponentWins}</span></div>
            </div>
        );
}

export default ScoreBoard;

