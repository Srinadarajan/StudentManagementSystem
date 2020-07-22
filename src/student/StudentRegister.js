import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'

export class StudentRegister extends Component {

    state = {
        show: false
    }

    componentWillReceiveProps(value) {
        this.setState({
            show: value.showStudent
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
        window.location.reload();
    }

    submit = () => {
        this.props.getdatapack();
    }

    onchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Form>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={2}>First Name</Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" placeholder="First name" name="fname" onChange={this.onchange} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={2}>Last Name</Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" placeholder="Last Name" name="Lname" onChange={this.onchange} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={2}> NIC </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" placeholder="NIC number" name="nic" onChange={this.onchange} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={2}>Date of Birth</Form.Label>
                                            <Col sm={10}>
                                                <Form.Control placeholder="Last Name" name="dob" type="date" onChange={this.onchange} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={2}>Email</Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="email" placeholder="Email" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Stream</Form.Label>
                                                <Form.Control as="select" defaultValue="Choose..." name="Stream" onChange={this.onchange}>
                                                    <option>Choose...</option>
                                                    <option>Mathematics</option>
                                                    <option>Arts</option>
                                                    <option>Biology</option>
                                                    <option>Technology</option>
                                                    <option>Commerce</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <fieldset>
                                            <Form.Group as={Row}>
                                                <Form.Label as="legend" column sm={2}>Gender </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Check
                                                        type="radio"
                                                        label="Female"
                                                        name="female"
                                                        id="female"
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Male"
                                                        name="male"
                                                        id="male"
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </fieldset>
                                    </Form>
                                </Row>
                            </Container>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </div>
        )
    }
}
export default StudentRegister
