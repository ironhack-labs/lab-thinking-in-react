import React, { Component } from 'react';
// import './App.css';


class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            val:""
        }
    }

    updateInpute = (e) =>{
        this.setState({val: e.target.value});

        this.props.mySearch(e.target.value)

    }




    render(){
        return(
            <div>
            <label>Search for a product:</label>
            <div>
              <input 
              onChange={e=>this.updateInpute(e)}
              value={this.state.val}
              type="text"
                />
            </div>
        </div>
        )
    }

}





export default Search;