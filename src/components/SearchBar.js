import React,{ Component } from 'react'
 
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: this.props.search,
            isStock: this.props.productStock
        }
    }


    handleInputChange = e => {

        e.preventDefault()

        let { name } = e.target
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        this.setState({ [name]: value })
    
        this.props.filterProduct(this.state.search)
        this.props.productStock(this.state.isStock)
        
    }


    render() {

        return (
            <>
                <form >
                    <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange} />

                    <br></br>
                    <br></br>

                    <input className="checkbox-form" type="checkbox" name="isStock" checked={this.state.isStock} onChange={this.handleInputChange}/> <label>Only show products in stock</label>
                </form>
            </>
        )
    }
}
export default SearchBar