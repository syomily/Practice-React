import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Axios from 'axios';

class SyohanCrud extends React.Component {
state = {
data:
    {
        name: "",
        age: null,
        desc: ""
    },
    submit: [],

InputDta: 
    {
        id: null,
        title: '',
        body: ''
    }

};

Inputs = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({
    InputDta: {
    ...this.state.InputDta,
    [e.target.id]: e.target.value,
        },
    });
};

Output = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let dataSubmit = [
    ...this.state.submit,
    {
        name: this.state.data.name,
        age: this.state.data.age,
        desc: this.state.data.desc,
        },
    ];
    this.setState({
    submit: dataSubmit,
        });
    console.log(this.state.submit, dataSubmit);
    };

PostInputData = () => 
{
    const InputDatas = this.state.InputDta;
    Axios.post('https://jsonplaceholder.typicode.com/posts', {InputDatas})
    .then((resultData) => 
    {
        console.log(resultData)
    })
}    

render() {
    const { submit } = this.state;
    const items = submit.map((item, index) => {
      return (
        <div key={item.name + index}>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
          <h1>{item.desc}</h1>
        </div>
      );
    });
return (
<>
    <Form>
        <Row form>
            <Col md={6}>
                <FormGroup>
                     <Label for="name">Name</Label>
                        <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="enter your name"
                        onChange={this.Inputs}
                        />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label for="age">Age</Label>
                        <Input
                        type="text"
                        name="age"
                        id="age"
                        onChange={this.Inputs}
                        />
                </FormGroup>
            </Col>
        </Row>
                <FormGroup>
                    <Label for="desc">Descriptions</Label>
                        <Input
                        type="text"
                        name="desc"
                        id="desc"
                        placeholder="enter your comment"
                        onChange={this.Inputs}
                        />
                <Button onClick={this.Output}>Submit</Button>
                </FormGroup>
    </Form>
    <br /><br /><br /><br /><br /><br />
    <Form>
        <Row form>
            <Col md={6}>
                <FormGroup>
                     <Label for="id">ID</Label>
                        <Input
                        type="number"
                        name="id"
                        id="id"
                        placeholder="enter your ID"
                        onChange={this.Inputs}
                        value={this.state.InputDta.id}
                        />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label for="isian">Title</Label>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="enter your title"
                        onChange={this.Inputs}
                        value={this.state.InputDta.title}
                        />
                </FormGroup>
            </Col>
        </Row>
                <FormGroup>
                    <Label for="iissii">Body</Label>
                    <Input
                        type="text"
                        name="body"
                        id="body"
                        placeholder="enter your comment"
                        onChange={this.Inputs}
                        value={this.state.InputDta.body}
                        />
                <Button onClick={this.PostInputData}>Submit</Button>
                </FormGroup>
    </Form>
    {items}
    </>
        );
     }
    }

export default SyohanCrud;
