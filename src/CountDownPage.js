import React from "react";
import header from "./header.webp";
import Countdown from "./CountDown";
import knoppen from "./buttons.webp";
import { withRouter } from 'react-router-dom';
import CodeEntry from "./CodeEntry";
import wrong from './wrong.mp3';
import sndWind from "./win.mp3";

class CountDownPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      settings: this.props.location.state.settings
    };
    console.log(`Rx settings: `,  this.state.settings);
    this.countDown = React.createRef();
    this.codeEntry = React.createRef();
    this.audioWrong = new Audio(wrong);
    this.audioWin = new Audio(sndWind);
  }

  componentDidMount() {
    this.codeEntry.current.setColor('yellow');
  }

  onCodeChange = (code) => {
    code = code.trim().toLowerCase();
    console.log(`Code changed: ${code}`);
    if (code === this.state.settings.secret) {
      this.countDown.current.disarm();
      this.codeEntry.current.setColor('greenyellow');
      this.audioWin.play();
    } else {
      if (code.length >= this.state.settings.secret.length) {
        this.codeEntry.current.reset();
        this.audioWrong.play();
      }
      this.codeEntry.current.setColor('yellow');
    }
  };


  render() {
    return (
      <header className="App-header">
        <div className="header">
          <img src={header} alt="COUNTDOWN TIMER KLOK"></img>
        </div>
        <Countdown countDown={this.state.settings.countDown} ref={this.countDown}/>
        <CodeEntry onChange={this.onCodeChange}  ref={this.codeEntry}/>
        <img className="knoppen" src={knoppen} alt="knoppen"></img>
      </header>
    );
  }
}

export default withRouter(CountDownPage);
