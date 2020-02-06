import React from "react";

export default class CodeEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {code: '###'};
  }

  render() {
    return (
      <div className="code-entry">{this.state.code}</div>
    );
  }
}
