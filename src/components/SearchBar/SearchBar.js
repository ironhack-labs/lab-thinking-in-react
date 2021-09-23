import React from 'react'
import { Form, FormControl, InputGroup, Row } from 'react-bootstrap'

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: "",
            showOnlyWithAvailableStock: false,
        }
        
    }


    handleChange = async (e) => {

        const { name, value, checked } = e.target;

        console.log(checked)
        await this.setState({
            ...this.state,
            [name]: value,
            [checked]:value
        }, () => {
            this.props.searchProduct(this.state.searchTerm, this.state.showOnlyWithAvailableStock)
        })

    }

    // await this.handleChange

    render() {
        return (
            <div>
                <InputGroup.Text >
                    <FormControl name="searchTerm" placeholder="Search"
                        onChange={(e) => { this.handleChange(e) }}
                        value={this.state.searchTerm}
                    />
                </InputGroup.Text>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p>Show only available products</p>
                        <input type="checkbox" name="showOnlyWithAvailableStock" id="stock" onChange={(e) => {this.handleChange(e)}}/>
                    </div>
                </div>
            </div>
        )

    }

}
