import React, { Component} from 'react';

class Search extends Component {
    state = { 
        name: "",
        showOnlyInStock: false,
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor='name'>Search</label>
                    <input type="text" name="name" id="name" placeholder="Type product name" value={this.state.name}/>
                </div>

                <div>
                    <input type="checkbox" name="showOnlyInStock" id="showOnlyInStock" checked={this.state.showOnlyInStock}/>
                    <label htmlfor="showOnlyInStock">Only products on stock</label>
                </div>
            </div>
        )
    }

}
export default Search;