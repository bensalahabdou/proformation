import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import Header from './header';
class SignUp extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            Nom:"",
            Prenom:"",
            phone:"",
            adresse:"",
            email:"",
            password:"",

        }
    }
    firstNameChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ Nom: event.target.value });
        }
    }
    lastNameChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ Prenom: event.target.value });
        }
    }
    phoneChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ phone: event.target.value });
        }
    }
    adressChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ adresse: event.target.value });
        }
    }
    passwordChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ password: event.target.value });
        }
    }
    emailChange = (event) => {
        if (event.target.value !== "") {
            this.setState({ email: event.target.value });
        }
    }
   
    render() {
    return (
      <div>
        <Header/>
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col id="signup" className="mx-4" md="9" lg="7" xl="6"> <style jsx> {`#signup {margin-top:100px}`}</style>
              <Card> 
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
               
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    );
  }
}

export default SignUp;