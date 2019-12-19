import React from 'react';
import './Game.css';
import Board from './Board';
import WordCheck from './WordCheck';
import Timer from './Timer';
import { tsMethodSignature } from '@babel/types';
import { Score } from './Score';

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
      timeLimit: 60,
      score: 0,
      correctWords: [],
      inCorrectWords: []
    };
  }

  handleTimeOut() {
    console.log('handling timeout');
    this.setState({isGameFinished: true})
    console.log('isGameFinished:' + this.state.isGameFinished)
  }


  handleBoardChange(tiles) {
    let newState = this.state;
    newState.tiles = tiles;
    this.setState(newState)
  }

  handleCorrectWord(word) {
    console.log('handling correct word:' + word)
    let correctWords = this.state.correctWords
    correctWords.push(word);
    let score = this.state.score + word.length;
    this.setState({ score: score, correctWords: correctWords });
  }

  handleIncorrectWord(word) {
    console.log('handling in correct word:' + word)
    let inCorrectWords = this.state.inCorrectWords;
    inCorrectWords.push(word);
    this.setState({ inCorrectWords: inCorrectWords })
  }

  renderWordChecker() {
    if (this.state.isGameFinished) {
      return <h3>Game Over!</h3>
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
          <Score score={this.state.score}/>
        </div>
      </div>

    );
  }
}