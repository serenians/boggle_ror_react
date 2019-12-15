import React from 'react';
import Tile from './Tile';
import './Board.css';
import Row from './Row';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getBoard();
  }

  getBoard() {
    fetch(process.env.REACT_APP_API_URL+'/api/board', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => this.props.onBoardChange(json.tiles))
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div id="board">
        <Row row_index = '0' tiles= {this.props.tiles}/>
        <Row row_index = '1' tiles= {this.props.tiles}/>
        <Row row_index = '2' tiles= {this.props.tiles}/>
        <Row row_index = '3' tiles= {this.props.tiles}/>
      </div>
    );
  }
}