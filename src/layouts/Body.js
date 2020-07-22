import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Student from '../student/index'

export class Body extends Component {
    render() {
        return (
            <div>
                  <Route exact path ="/" component ={Student} />
            </div>
        )
    }
}

export default Body
