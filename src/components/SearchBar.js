import React,{ Component } from "react";
import './SearchBar.css';

class SearchBar extends Component {
        state = {
            input: '',
        }
    
        handleSearch = async (event) => {
            await this.setState({
                input: event.target.value,
            })
            this.props.filteredProducts(this.state.input); 
        }
    
        render() {
            return (
                <>
                    <h2>Search</h2>
                    <input className='search-bar' type='text' value={this.state.input} onChange={this.handleSearch}/>
                </>
            )
        }

}

export default SearchBar;