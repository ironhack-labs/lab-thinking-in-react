import React, { Component } from 'react';

class SearchBar  extends Component {

    state = {
        name:'',
        inStock:''
    };

    handleChange = (event) => {
        const query = event.target.value;
        this.setState({name: query});
        this.props.filterThings(query);
    }

    handleChangeOnCheck = (event) => {
        const theyIn = event.target.checked;
        this.setState({inStock:theyIn});

        this.props.stockThings(theyIn);
    };

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search..."
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                />
                <input value={this.state.inStock} type="checkbox" onChange={this.handleChangeOnCheck}/>
                <label>Only show products in stock</label>
            </div>
            
        )
    }
   
}

export default SearchBar;