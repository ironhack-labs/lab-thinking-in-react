import React, {Component} from 'react';

class SearchBar extends Component {  
    constructor(props) {
        super(props);
        
        this.searchInput = this.searchInput.bind(this);
         
 }
    searchInput(e) {
        
        const { value } = e.target;
        this.props.searchTool(value.toLowerCase())

       

    }

    render() {
        
        return (
            <div>
                <label>Search</label>
                <input type="text" onChange={this.searchInput}/>
                {/* <button onClick={()=> this.props.stock()}>Show only on stock</button> */}
                <br/>
                <label>Show only on stock</label>
                <input type='checkbox' onChange={this.props.stock}/>
          </div>)
    }
   

}
export default SearchBar;