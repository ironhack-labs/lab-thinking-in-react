import React, {Component} from 'react';

class SearchBar extends Component{

    state={
        inputValue: ''
    }

    onFilterChange = (e) => {

        //console.log(e.target.value)
        
        this.setState({
            inputValue: e.target.value.toLowerCase()
        })

        this.props.filterArray(e.target.value)
    }
    
    render(){
        //console.log(this.state.inputValue)
        return(
            <div>
                <label htmlFor='search'></label>
                <input type='text' placeholder='Search...' value={this.state.inputValue} onChange={this.onFilterChange}/>
            </div>
        )
    }
}

export default SearchBar;