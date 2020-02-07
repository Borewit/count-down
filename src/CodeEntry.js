import React from "react";

// Resources
import './CodeEntry.css';
import sndKey from './beep.mp3';

export default class CodeEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {code: ''};

    this.codeInput = React.createRef();
    this.audio = new Audio(sndKey);
  }

  componentDidMount() {
    this.codeInput.current.focus();
  }

  onChange = (event) => {
    this.audio.play();
    this.props.onChange(this.codeInput.current.value);
  };

  setColor(color) {
    this.setState({
      color: color
    });
  }

  reset(color) {
    this.codeInput.current.value = '';
  }

  render() {
    return (
      <input className="code-entry" style={{color: this.state.color}} ref={this.codeInput} onChange={this.onChange}></input>
    );
  }
}
