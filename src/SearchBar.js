import React from 'react';

export default class SearchBar extends React.Component {


    handleChange = event => {
        this.props.setNewQuery(event.target.value)
    }


    render(){
        return(
            <div>
            
            <form>
                <label>Search</label><br/>
                <input 
                    type="text"
                    name="search"
                    value={this.props.searchQuery} //why is it not this.state.searchquery?
                    onChange= {this.handleChange}
                    >   
                </input>
                <br/>
                
                <input 
                    type="checkbox"
                    name="inStock"
                    id="inStock"
                    // checked = {somestate}
                    // onChange =  
                />
                <label>Only show products on stock</label>
            </form> 
            </div> 
        )
    }
}