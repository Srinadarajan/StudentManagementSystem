import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import '../assets/style.css'

export class ViewStudent extends Component {
  render() {
    return (
      <div id ="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>NIC</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Stream</th>
              <th>Gender</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <th>Srinadarajan</th>
              <th>Nadarajah</th>
              <th>123456789V</th>
              <th>21 June 1995</th>
              <th>sri@gmail.com</th>
              <th>Bio</th>
              <th>Male</th>
              <th><Button variant="primary"> View </Button></th>
            </tr>
            <tr>
              <td>2</td>
              <th>Sri</th>
              <th>Mala</th>
              <th>123456780V</th>
              <th>30 May 1998</th>
              <th>sri@gmail.com</th>
              <th>Arts</th>
              <th>Female</th>
              <th><Button variant="primary"> View </Button></th>
             </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ViewStudent
