import React from "react";
import { withRouter } from 'react-router-dom';

class CodeEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {code: ''};

    this.codeInput = React.createRef();
  }

  componentDidMount() {
    this.codeInput.current.focus();
  }

  onChange = (event) => {
    this.props.onChange(this.codeInput.current.value);
  };

  render() {
    return (
      <input className="code-entry" defaultValue={this.state.code} ref={this.codeInput} onChange={this.onChange}></input>
    );
  }
}

export default withRouter(CodeEntry);
