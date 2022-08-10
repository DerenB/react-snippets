import React from "react";

/*
 - Challenge that makes use of States
 - Creates a clock component

 - Call with <Name isPrecise={boolean} />
*/

export default class ClockMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
          <div>
            {this.props.isPrecise
              ? this.state.date.toISOString()
              : this.state.date.toLocaleTimeString()}
          </div>
        );
      }

    componentDidMount() {
        const oneSecond = 1000;
        this.startInterval();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    componentDidUpdate(prevProps) {
        if(this.props.isPrecise === prevProps.isPrecise) {
            return;
        }
        clearInterval(this.intervalID);
        this.startInterval();
    }

    startInterval() {
        let delay;
        if(this.props.isPrecise) {
            delay = 100;
        } else {
            delay = 1000;
        }

        this.intervalID = setInterval(() => {
            this.setState({ date: new Date() });
        }, delay);
    }
}