import React, { Component } from 'react';

import Form from 'react-bootstrap/Form'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            original: this.props.products,
            data: this.props.products,
            keyword: '',
            checkbox: false
        }
    }

    searchProducts = e => {

        let { value } = e.target
        let dataCopy = [...this.state.original]

        let filteredProducts = dataCopy.filter(elm => elm.name.toLowerCase().includes(value))

        this.setState({
            data: filteredProducts,
            keyword: value
        }, () => {

            this.sendPolizon()
        })
        // Se mete una función despues del setState para que se espere al actualizarse la barra, sino va con retraso
    }


    handleChange = e => {

        let dataCopy = [...this.state.original]

        let { name, checked, value, type } = e.target

        if (type === 'checkbox') value = checked
        let filteredProducts = ''

        if (value) {
            filteredProducts = dataCopy.filter(elm => elm.stocked)
        } else { filteredProducts = dataCopy }
        this.setState({
            [name]: value,
            data: filteredProducts
        }, () => {

            this.sendPolizon()
        })


    }

    sendPolizon = () => {
        this.props.polizon(this.state.data)

    }

    render() {

        return (

            <div className="my-4">

                <h4>Search your product</h4>
                <input className="input" type="text" name="name" placeholder="Text input" value={this.state.keyword} onChange={this.searchProducts} ></input>
                <Form.Group>
                    <Form.Check type="checkbox" label="Only show products on stock" name="checkbox" checked={this.state.checkbox} onChange={this.handleChange} />
                </Form.Group>
            </div>
        )
    }
}



export default SearchBar;