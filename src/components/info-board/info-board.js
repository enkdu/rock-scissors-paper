import React from 'react';
import './info-board.css';

const InfoBoard = ({ info }) => {
    return (
        <div className="info-wrapper">
            <p className="info-text">
                {info}
            </p>
        </div>
    );
};

export default InfoBoard;