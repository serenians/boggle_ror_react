import React from 'react';
import './Game.css';
import Board from './Board';
import WordCheck from './WordCheck';
import Timer from './Timer';
import { NotificationContainer, NotificationManager, Notifications } from 'react-notifications';


import { tsMethodSignature } from '@babel/types';
import { Score } from './Score';
import WordList from './WordList';

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
    this.setState({ isGameFinished: true })
    console.log('isGameFinished:' + this.state.isGameFinished)
  }


  handleBoardChange(tiles) {
    NotificationManager.success("Board Loaded");
    let newState = this.state;
    newState.tiles = tiles;
    this.setState(newState)
  }

  handleCorrectWord(word) {
    console.log('handling correct word:' + word)

    let correctWords = this.state.correctWords
    if (correctWords.filter((item) => { return item == word }).length > 0) {
      //word already in the list
      console.log('correct word already in the list')
    }
    else {
      correctWords.push(word);
      let score = this.state.score + word.length;
      this.setState({ score: score, correctWords: correctWords });
    }
  }

  handleIncorrectWord(word) {
    let inCorrectWords = this.state.inCorrectWords;
    if (inCorrectWords.filter((item) => { return item == word }).length > 0) {
      //word already in the list
      console.log('word already in the list')
    }
    else {
      console.log('handling in correct word:' + word)
      inCorrectWords.push(word);
      this.setState({ inCorrectWords: inCorrectWords })
    }
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
          <Score score={this.state.score} />
          <h3>Correct words</h3>
          <WordList words={this.state.correctWords}></WordList>
          <h3>Incorrect Words</h3>
          <WordList words={this.state.inCorrectWords}></WordList>
        </div>
      </div>

    );
  }
}