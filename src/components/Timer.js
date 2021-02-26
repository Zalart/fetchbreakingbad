import React from "react";
import './Timer.css';
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 3,
        }
        this.count = this.count.bind(this);
    }

    count() {
        this.setState(prevState => ({
            timeLeft: prevState.timeLeft - 1
        }))
    }
    componentDidMount() {

        this.counter = setInterval(() => {
            if (this.state.timeLeft > 0) {
                this.count();

            } else {
                this.props.handleLoad();
                clearInterval(this.counter)
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.counter);
    }

    render() {
        return (<div className="timer"><p>Loading in &nbsp;<span>{this.state.timeLeft} </span>&nbsp;seconds</p></div>);
    }
}