import React, { Component } from 'react';

import Form from 'react-bootstrap/Form'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input:""
        }
        // console.log('HOlAAA',this.props)
        this._filterProduct=this.props.filterProduct
    }

    handleChange = e => {

        
        let {value} = e.target
        
        this.setState({
            input: value
        }, () => this._filterProduct(this.state.input))
        
        

    }


    render() {
        
        return (


            <Form>
                <Form.Group>
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" name="input" value={this.state.input} onChange={this.handleChange} />
                </Form.Group>
            </Form>

        )
    }
}

export default SearchBar;