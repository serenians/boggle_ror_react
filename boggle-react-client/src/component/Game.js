import React from 'react';
import './Game.css';
import Board from './Board';
import WordCheck from './WordCheck';
import Timer from './Timer';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleBoardChange = this.handleBoardChange.bind(this);
    this.handleTimeOut = this.handleTimeOut.bind(this);
    this.renderWordChecker = this.renderWordChecker.bind(this);
    this.handleCorrectWord = this.handleCorrectWord.bind(this);
    this.handleIncorrectWord = this.handleIncorrectWord.bind(this);

    this.state = {
      tiles: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      isGameFinished: false,
      timeLimit: 10,
      score: 0,
      correctWords: [],
      inCorrectWords: []
    };
  }

  handleTimeOut() {
    console.log('handling timeout');
    this.state.isGameFinished = true;
    console.log('isGameFinished:' + this.state.isGameFinished)
    this.renderWordChecker();
  }


  handleBoardChange(tiles) {
    let newState = this.state;
    newState.tiles = tiles;
    this.setState(newState)
  }

  handleCorrectWord(word) {
    this.state.correctWords.push(word);
    this.score = this.score + word.length;
  }

  handleIncorrectWord(word) {
    this.state.inCorrectWords.push(word);
  }

  renderWordChecker() {
    if (this.state.isGameFinished) {
      return <label>Game Over!</label>
    }
    else {
      return <WordCheck tiles={this.state.tiles} onCorrectWordEntered={this.handleCorrectWord} onIncorrectWordEntered={this.handleIncorrectWord} />
    }
  }

  render() {
    const tiles = this.state.tiles;
    return (
      <div className="row">
        <div className="col-xs-12 col-md-2">
          <h2>Timer</h2>
          <Timer timeLimit={this.state.timeLimit} onTimeOut={this.handleTimeOut} />
        </div>

        <div className="col-xs-12 col-md-8">
          <h2 id="center">
            Boggle Words
          </h2>
          <Board tiles={tiles} onBoardChange={this.handleBoardChange} />
          {this.renderWordChecker()}
        </div>
        <div className="col-xs-12 col-md-2">
          <h2>Score</h2>
        </div>
      </div>

    );
  }
}