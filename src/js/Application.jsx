import React from 'react'
import Container from './Container'


class Application extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="application">
                <h1>Products List</h1>
                <table><Container /></table>
            </div>
        )
    }
}

export default Application
