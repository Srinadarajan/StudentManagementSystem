import React, { Component } from 'react'
import StudentRegister from './StudentRegister'
import ViewStudent from './ViewStudent'
import Button from 'react-bootstrap/Button'

export class index extends Component {
    // 2 - create variable (showvalue) and set the value (false) of the button 
    state = {
        showValue: false,
        showEdit: false,
        data2: ''
    }

    // 3 - set the value (true) of the already created variable  (showvalue)
    view = () => {
        this.setState({
            showValue: true
        })
    }

    edit = () => {
        this.setState({
            showEdit: true
        })
    }
    getdata = (data1) => {
        this.setState({
            data2: data1
        })

    }
    render() {
        return (
            <>
                <StudentRegister getdatapack={this.getdata} />
                {/* 4 - get the value (true) from the function(showValue)  
                transfer value to other page*/}
                {/* send the fNamePack from RegisterEmployee to viewEmployee*/}
                <ViewStudent showEmp={this.state.showValue} data3={this.state.data2} />

                {/* 1 - Create button with function name - view */}
                <div class="container-fluid text-center">
                <Button variant="primary" onClick={this.view} style={{align:"right"}}>
                    View
                </Button>    </div>
            </>
        )
    }
}

export default index
