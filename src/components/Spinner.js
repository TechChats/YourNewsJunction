import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="spinner-border my-3" role="status">
                <span className="sr-only"></span>
            </div>
            </div>
            
        )
    }
}
