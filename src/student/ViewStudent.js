import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export class ViewStudent extends Component {
    //1 - create variable(show) for value - false
    state = {
      show: false,
      Firstname: '',
      Lastname: '',
      NicNo: '',
      Dob: '',
      Dept: '',
      Mail: '',
      Pass: ''
    }
  
  
    //2 - get another page value assign to variable (show already created)
    componentWillReceiveProps(value) {
      if (value.showEmp) { //get the data fro show emp pack
        this.setState({
          show: value.showEmp
        })
      }
      else { // get the data fro other pack
        this.setState({
          Firstname: value.data3.Firstname,
          Lastname: value.data3.Lastname
        })
      }
    }
  
    //4 - change the variable value (false) for handleClose function
    handleClose = () => {
      this.setState({
        show: false
      })
      window.location.reload();
    }
    render() {
      return (
        <div>
          <Modal
            show={this.state.show}
            //3 - call handclose value to close the popup
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* // get the Firstname value from fNamePack in index.js */}
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>{this.state.Firstname}</td>
                    <td>{this.state.Lastname}</td>
  
                  </tr>
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              {/* 3- call function (handleClose) to get the value for close the popup */}
              <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
    }
}

export default ViewStudent
