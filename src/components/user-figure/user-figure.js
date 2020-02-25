import React from 'react';

import './user-figure.css';

const UserFigure = ({ compareFigures, figureNumber }) => {

    const figureClasses = {
        rock: 'user-rock',
        scissors: 'user-scissors',
        paper: 'user-paper'
    }

    switch (figureNumber) {
        case 1:
            figureClasses.rock += ' blue';
            break;
        case 2:
            figureClasses.scissors += ' blue';
            break;
        case 3:
            figureClasses.paper += ' blue';
            break;
    }

    return (
    <div className="user-figure-wrapper">
        <div className={figureClasses.rock}
             onClick={() => {compareFigures(1)}}>
                <i className="far fa-hand-rock"></i>
        </div>
        <div className={figureClasses.scissors}
             onClick={() => {compareFigures(2)}}>
                <i className="far fa-hand-scissors"></i>
        </div>
        <div className={figureClasses.paper}
             onClick={() => {compareFigures(3)}}>
                 <i className="far fa-hand-paper"></i>
        </div>
    </div>
    );
}

export default UserFigure;
