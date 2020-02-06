import React from "react";
import TimeForm from './TimeForm.js';

export default class InitPage extends React.Component {

  render() {
    return (
      <div  className="container">
        <h1>Setup count-down "Klok"</h1>
        <TimeForm/>
      </div>
    );
  }

}
