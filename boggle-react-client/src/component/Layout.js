import React,{ Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Layout extends Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }

}
