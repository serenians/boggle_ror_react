import React from 'react';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timeLimit: this.props.timeLimit
        }

    }

    componentDidMount() {
        this.intervalTimer = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        this.setState(previousState => ({
            timeLimit: previousState.timeLimit - 1,
        }));

        if (this.state.timeLimit == 0) {
            console.log('timeout')
            this.props.onTimeOut();
            
            clearInterval(this.intervalTimer);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { timeLimit } = this.state;
        return (
            <div on={this.startTimer}>
                <div className='timer'>
                    <h4>Time Remaining (sec): {timeLimit}</h4>
                </div>
            </div>
        );
    }

}