import React from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class TimeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        hours: 1,
        minutes: 0,
        secret: 'stop'
      }
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(`Submit form: `, this.state.form);

    this.props.history.push({
      pathname: '/arm',
      state: {
        settings: {
          countDown: (this.state.form.hours * 60 + this.state.form.minutes) * 60,
          secret: this.state.form.secret
        }
      }
    })
  };

  changeHandler = event => {
    const form = this.state.form;
    switch (event.target.name) {
      case 'hours':
      case 'minutes':
        form[event.target.name] = +event.target.value;
        break;
      default:
        form[event.target.name] = event.target.value;
    }
    this.setState({
      form: form
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} action="/arm">
        <Form.Row>
          <InputGroup className="col col-3">
            <InputGroup.Prepend>
              <InputGroup.Text type="number" id="inputGroup-sizing-lg">HH</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" required type="number" name="hours"
                         defaultValue="1" onChange={this.changeHandler}/>
          </InputGroup>

          <InputGroup className="col col-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">MM</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" required type="number" ref="minutes"
                         defaultValue="0" onChange={this.changeHandler}/>
          </InputGroup>
        </Form.Row>

        <Form.Row>
          <InputGroup className="col col-6">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">Code</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" required defaultValue="stop"/>
          </InputGroup>
        </Form.Row>

        <Form.Row>
          <div className="col col-3">
            <Button variant="primary" type="submit">Arm</Button>
          </div>
        </Form.Row>
      </Form>
    );
  }

}

export default withRouter(TimeForm);
