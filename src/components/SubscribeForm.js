import React, { Component } from 'react';
import { Button, Label, Col, Form, FormGroup, Input } from 'reactstrap';

class SubscribeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Current state is: ' + JSON.stringify(this.state));
    alert('Current state is: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center my-5">
            <h2>Join E-mail List</h2>
          </div>
        </div>

        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label htmlFor="name" md={{ size: 1, offset: 3 }}>Name</Label>
            <Col md={5}>
              <Input type="text" id="name" name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="email" md={{ size: 1, offset: 3 }}>Email</Label>
            <Col md={5}>
              <Input type="text" id="email" name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col className="text-center mb-5">
              <Button type="submit" color="primary">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SubscribeForm;