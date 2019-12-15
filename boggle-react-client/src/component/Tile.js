import React from 'react';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="boggle">
                <span>{this.props.value}</span>
            </div>
        )
    }
};

