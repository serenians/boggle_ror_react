import React from 'react';
import Tile from './Tile';

export default class Row extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var row_index = parseInt(this.props.row_index);
        var items = this.props.tiles.filter(function (item, index) {
            // console.log('item index:' + index);
            // console.log('passed row index:' + row_index);
            // console.log('result:' + ((index / 4) == (row_index)))
            return Math.floor(index / 4) == (row_index);
        }).map((item, index) => {
            return <Tile key={index} value={item}></Tile>
        });

        return (
            <div className="row">
                {items}
            </div>
        )

    }
};