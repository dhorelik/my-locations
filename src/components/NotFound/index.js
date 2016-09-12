import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
    render () {
        return (
            <div>
                <h1>404</h1>
                <Link to='/'>home</Link>
            </div>
        )
    }
}
