import React, { Component } from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'

export class studentRegister extends Component {  onchange=(event)=>{
    this.setState({
        [event.target.name]:event.target.value,
    })
}
submit=()=>{       
       const data={
            Firstname:this.state.Fname,
            Lastname:this.state.Lname,
            NicNo:this.state.nic,
            Dob:this.state.date,
            Dept:this.state.department,
            Mail:this.state.email,
            Pass:this.state.password
        }  
        // send data pack to index.js -> view Employee.js
    this.props.getdatapack(data)
}
render() {
    return (
        <div className='form'>                
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form className='form'>
                            <Form.Row>
                                <Form.Group as={Col} controlId="Title">
                                    <Form.Label><h1>Signup</h1></Form.Label>
                                </Form.Group>
                                </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="Fname">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control name="Fname" onChange = {this.onchange} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="Lname">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control name="Lname" onChange = {this.onchange}/>
                                </Form.Group>
                                </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="nic">
                                    <Form.Label>NIC No </Form.Label>
                                    <Form.Control name="nic" onChange = {this.onchange}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="dob">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control name="dob" type="date" onChange = {this.onchange}/>
                                </Form.Group>
                                </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" onChange = {this.onchange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" onChange = {this.onchange}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>department</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." name="department" onChange = {this.onchange}>
                                        <option>Choose...</option>
                                        <option>QA</option>
                                        <option>Frontend</option>
                                        <option>Backend</option>
                                    </Form.Control>
                                </Form.Group>

                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" onClick={this.submit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}

export default studentRegister
