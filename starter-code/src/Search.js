import React, {Component} from 'react';
import './App.css';


class Search extends Component{
    render(){
        return(
            <div className="search-box">
                <div>
                    <input type="text" placeholder="search"
                     value={this.props.theActualSearchTerm}
                      onChange={this.props.sendSearchTermToMain} />
                </div>
                <div>
                    <input type="checkbox" onChange = {this.props.toggleStocked} />
                    <label>Only show products in stock</label>
                </div>
            </div>
        )
    }



}
export default Search;