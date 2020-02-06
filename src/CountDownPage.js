import React from "react";
import header from "./header.webp";
import Countdown from "./CountDown";
import knoppen from "./buttons.webp";
import { withRouter } from 'react-router-dom';
import CodeEntry from "./CodeEntry";

class CountDownPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      settings: this.props.location.state.settings
    };
    console.log(`Rx settings: `,  this.state.settings);
    this.countDown = React.createRef();
  }

  onCodeChange = (code) => {
    code = code.trim().toLowerCase();
    console.log(`Code changed: ${code}`);
    if (code === this.state.settings.secret) {
      this.countDown.current.disarm();
    }
  };

  render() {
    return (
      <header className="App-header">
        <div className="header">
          <img src={header} alt="COUNTDOWN TIMER KLOK"></img>
        </div>
        <Countdown countDown={this.state.settings.countDown} ref={this.countDown}/>
        <CodeEntry onChange={this.onCodeChange}/>
        <img className="knoppen" src={knoppen} alt="knoppen"></img>
      </header>
    );
  }
}

export default withRouter(CountDownPage);
