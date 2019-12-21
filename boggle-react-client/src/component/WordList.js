import React from 'react';

export default class WordList extends React.Component {
    render() {
        return (
            <ul>
                 {this.props.words.map((word)=><li key={word} name={word}>{word}</li>)}
            </ul>
        )

    }
}
