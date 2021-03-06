import React from 'react';
import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '', hasStatusMessage: false, isValid: false, correctWords: [], incorrectWords: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // console.log('handle change -> set target value: ' + e.target.value);
    this.setState({ text: e.target.value, hasStatusMessage: false });
  }

  handleSubmit(e) {
    // console.log('handle submit -> state text: ' + this.state.text);
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    let text = this.state.text;
    console.log(this.state.correctWords);
    if(this.state.correctWords.filter(function(item){return item == text}).length > 0){
      console.log('you have already found the word');
      return;
    }

    if(this.state.incorrectWords.filter(function(item){return item === text}).length > 0){
      console.log('you have already tried the word');
      return;
    }

    // console.log('before fetch for /words');
    // console.log('this.props.tiles => ' + this.props.tiles)
    // console.log('JSON body =>' + JSON.stringify({ term: this.state.text, tiles: this.props.tiles }));

    fetch(process.env.REACT_APP_API_URL + 'api/words/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ term: this.state.text, tiles: this.props.tiles })
    }).then(res => res.json())
      .then(json => {
        this.setState({ isValid: json.exists, hasStatusMessage: true });
        if (json.exists) {
          let correctWords = this.state.correctWords;
          correctWords.push(this.state.text)
          this.setState({correctWords:correctWords})
          this.props.onCorrectWordEntered(this.state.text)
        }
        else {
          
          let incorrectWords = this.state.incorrectWords;
          incorrectWords.push(this.state.text);
          this.setState({incorrectWords:incorrectWords})
          this.props.onIncorrectWordEntered(this.state.text);
        }
      })
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div id="word-submit">
        <form onSubmit={this.handleSubmit}>
          <label id="spaced">
            <strong>Enter your Word:</strong>
          </label>
          <input className="form-input"
            id="spaced"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className="btn btn-success" id="spaced" type="button" onClick={this.handleSubmit}>
            Check your word
          </button>
          {this.state.hasStatusMessage === true &&
            <div id="status-message">
              <p></p>
              The word '{this.state.text}' is <b>{this.state.isValid ? 'valid' : 'invalid'}</b>.
            </div>
          }
        </form>
      </div>
    );
  }
}