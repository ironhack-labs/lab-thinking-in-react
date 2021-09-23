import React, { Component } from 'react'
import 'react-bootstrap'
import products from './../data.json'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: products,
            value: ""
        }
    }
    handleChange = (e) => {
        const { value } = e.target

        this.setState({
            value
        }, () => this.props.filter(value))
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.value} name="name" onChange={e => this.handleChange(e)} />
            </div>
        )
    }
}
