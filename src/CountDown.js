import React from "react";
import sndExplosion from './explosion.mp3';
import sndTick from './tick.mp3';

export default class CountDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startTime: new Date().getTime(),
      time: {
        hours: '--',
        minutes: '--',
        seconds: '--'
      }
    };
    console.log(`CountDown: count-down=${this.props.countDown}`);
    this.audioExplosion = new Audio(sndExplosion);
    this.audioTick = new Audio(sndTick);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const now = new Date().getTime();
    // const timeLeft = this.state.startTime + (this.props.countDown * 10000);
    if (!this.state.disarmed) {
      const timeLeft = Math.max(0, (this.state.startTime - now) / 1000 + this.props.countDown);
      if (timeLeft === 0) {
        clearInterval(this.timerID);
        this.audioExplosion.play();
      }
      this.audioTick.play();
      this.setState({
        time: this.getTime(timeLeft)
      });
    }
  }

  disarm() {
    console.log(`CountDown: disarm`);
    this.setState({
      disarmed: true
    });
  }

  padDigits(number) {
    if (number <= 9999) {
      number = ("0" + number).slice(-2);
    }
    return number;
  }

  getTime(timeLeft) {
    console.log(`timeLeft=${timeLeft}`);
    const hours = Math.floor(timeLeft / 3600);
    timeLeft -= hours * 3600;
    const minutes = Math.floor(timeLeft / 60);
    timeLeft -= minutes * 60;
    const seconds =  Math.floor(timeLeft);
    timeLeft -= minutes * 60;
    return {
      hours: this.padDigits(hours, 2),
      minutes: this.padDigits(minutes, 2),
      seconds: this.padDigits(seconds, 2),
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
