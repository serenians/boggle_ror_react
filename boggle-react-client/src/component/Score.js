import React from 'react'

export class Score extends React.Component {
    render() {
        return (<h3>{this.props.score}</h3>)
    }
}