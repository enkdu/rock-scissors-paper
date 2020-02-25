import React, { Component } from 'react';

import OpponentFigure from '../opponent-figure';
import UserFigure from '../user-figure';
import ScoreBoard from '../score-board';
import AppHeader from '../app-header';
import InfoBoard from '../info-board';
import AppFooter from '../app-footer';


import './app.css';
import './reset.css';

export default class App extends Component {

  state = {
    userWins: 0,
    opponentWins: 0,
    opponentChoice: 0,
    userChoice: 0,
    info: ''
  };

  getRandomFigure () {
    return Math.floor(Math.random() * 3) + 1;
  }

  getFigureName (figureNumber) {
    if(figureNumber === 1) {
      return 'камень';
    } else if (figureNumber === 2) {
      return  'ножницы';
    } else {
      return 'бумага';
    }
  }

  setInfoInState (newInfo) {
    this.setState({info: newInfo});
  }

  compareFigures = (userFigureNumber) => {
    const opponentFigureNumber = this.getRandomFigure();
    this.setState( {opponentChoice: opponentFigureNumber,
                    userChoice: userFigureNumber} );

    const userFigureName = this.getFigureName(userFigureNumber);
    const opponentFigureName = this.getFigureName(opponentFigureNumber);

    if ((userFigureNumber === 1 && opponentFigureNumber === 2) ||
        (userFigureNumber === 2 && opponentFigureNumber === 3) ||
        (userFigureNumber === 3 && opponentFigureNumber === 1)) {
                
      this.setInfoInState(`у вас ${userFigureName}, 
                           у противника ${opponentFigureName}: вы победили!`);

      this.setState(({ userWins }) => {
        return {userWins: userWins + 1};
      });

    } else if ((userFigureNumber === 1 && opponentFigureNumber === 3) ||
               (userFigureNumber === 2 && opponentFigureNumber === 1) ||
               (userFigureNumber === 3 && opponentFigureNumber === 2)) {

      this.setInfoInState(`у вас ${userFigureName}, 
                           у противника ${opponentFigureName}: вы проиграли.`);

      this.setState(({ opponentWins }) => {
        return {opponentWins: opponentWins + 1};
      });
    
    } else {
      this.setInfoInState(`у вас ${userFigureName}, 
                           у противника ${opponentFigureName}: ничья...`);
    }
  };

  render() {
    return (
      <div className="rcp-app">
        <main>
          <AppHeader />
          <OpponentFigure figureNumber={this.state.opponentChoice}/>
          <ScoreBoard userWins={this.state.userWins}
                    opponentWins={this.state.opponentWins}/>
          <UserFigure compareFigures={this.compareFigures}
                    figureNumber={this.state.userChoice}/>
          <InfoBoard info={this.state.info} />
        </main>
        <AppFooter />
      </div>
    );
  }
};
