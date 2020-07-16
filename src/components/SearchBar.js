import React, {Component} from 'react'

class SearchBar extends Component {
    constructor (){
        super ()
        this.state = {

            name: "",
            inStock: ""
        }
    }

    changeHandler = (e) => {
        const query = e.target.value;
        this.setState({name: query});
        this.props.filterProducts(query);
    }

handleChange = (e) => {
    const name = e.target.name
    const value = name === 'inStock' ? e.target.checked : e.target.value
    this.setState({ [name]: value })

}

    render () {
        return (
            
<>
    <input type="text" placeholder="Search..." name="name"  value={this.state.name} onChange={this.handleChange}/>
    <input name="inStock"value={this.state.inStock} type="checkbox" checked={this.state.inStock} onChange={this.handleChange}/>
    <label>Only show products in stock</label>
</>
   
        )
    }
}

export default SearchBar

