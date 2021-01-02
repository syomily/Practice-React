import React from 'react';
import { Button, Input, Form, FormGroup, Label, Container } from "reactstrap";

const FormContact = () => {
    return(
        <Container>
        <div className={FormContact} id="formct">
        <Form>
      <FormGroup size="20px" >
        <Label for="">Name</Label>
        <Input type="text" name="text" id="text" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Age</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          placeholder="Your Age" />
          </FormGroup>
      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Decriptions"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
    </Container>
    )
  };
  

export default FormContact;