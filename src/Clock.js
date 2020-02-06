import React from "react";

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {time: this.getTime()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.getTime()
    });
  }

  padDigits(number) {
    if (number <= 9999) {
      number = ("0" + number).slice(-2);
    }
    return number;
  }

  getTime() {
    const now = new Date();
    return {
      hours: this.padDigits(now.getHours(), 2),
      minutes: this.padDigits(now.getMinutes(), 2),
      seconds: this.padDigits(now.getSeconds(), 2),
    }
  }

  render() {
    return (
      <div className="clock-display">
        <span className="digits">{this.state.time.hours}</span><span className="colon">:</span><span
        className="digits">{this.state.time.minutes}</span><span className="colon">:</span><span
        className="digits">{this.state.time.seconds}</span>
      </div>
    );
  }
}
