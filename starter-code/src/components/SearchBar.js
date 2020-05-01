import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            search: "",
            toggleStock: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }


    handleChange(e) {
        
        let { name, value } = e.target;

        this.setState ({
            [name]: value,
        });
        
        console.log("SEARCH: ", name, value);
        this.props.searchForm(value);
    }
    
    handleCheck(e) {
        
        let { checked } =  e.target;
        console.log("Toggle",e);
        this.setState({
            toggleStock: checked,
        })
        this.props.checkedStock(checked);
    }

    render() {
        return(
            <div>
                <label>SEARCH </label>
                <br/>
                <input 
                    type="text" 
                    name="search" 
                    value={this.state.search} 
                    onChange={this.handleChange}
                    />
                <br/><br/>
                <input 
                    type="checkbox" 
                    name="checkedbox" 
                    checked={this.state.toggleStock}
                    onChange={this.handleCheck}
                    /> 
                <label>Only show products in stock.</label>
                <br/><br/>
            </div>
        );
    }
}

export default SearchBar; 