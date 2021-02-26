import React from "react";

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
        return (<div className="timer">Loading in <span>{this.state.timeLeft}</span> seconds</div>);
    }
}