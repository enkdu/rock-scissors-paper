import React from 'react';

import './opponent-figure.css';

const OpponentFigure = ({ figureNumber }) => {

    const figureClasses = {
        rock: 'opponent-rock',
        scissors: 'opponent-scissors',
        paper: 'opponent-paper'
    }

    switch (figureNumber) {
        case 1:
            figureClasses.rock += ' selected red';
            break;
        case 2:
            figureClasses.scissors += ' selected red';
            break;
        case 3:
            figureClasses.paper += ' selected red';
            break;
    }

    return(
        <div className="opponent-figure-wrapper">
        <div className={figureClasses.rock}><i className="fas fa-hand-rock"></i></div>
        <div className={figureClasses.scissors}><i className="fas fa-hand-scissors"></i></div>
        <div className={figureClasses.paper}><i className="fas fa-hand-paper"></i></div>
        </div>
    );

}

export default OpponentFigure;