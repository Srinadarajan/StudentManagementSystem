import React, { Component } from 'react'
import ViewStudent from './ViewStudent'
import StudentRegister from './StudentRegister'
import Button from 'react-bootstrap/Button'

export class student extends Component {
    state = {
        showValue: false
    }
    view = () => {
        this.setState({
            showValue: true
        })
    }
    
    render() {
        return (
            <div>
                <Button variant="primary"  onClick={this.view}>
                    View
                </Button>
                <ViewStudent />
                <StudentRegister showStudent={this.state.showValue} />
             </div>
        )
    }
}

export default student
