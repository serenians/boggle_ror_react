import React from 'react';
import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '', hasStatusMessage: false, isValid: false };
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
      .then(json => this.setState({ isValid: json.exists, hasStatusMessage: true }))
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div id="word-submit">
        <form onSubmit={this.handleSubmit}>
          <label id="spaced">
            <strong>Current Word:</strong>
          </label>
          <input
            id="spaced"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button
            id="spaced"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit Word
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