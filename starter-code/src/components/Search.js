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

        this.props.handleSearch(e.target.value)

    }

    render(){
        return(
            <div className="form-group col-8 my-2">
            <label >Search</label>
            <div className="control">
              <input 
              onChange={e=>this.updateInpute(e)}
              value={this.state.val}
              type="text"
              className="form-control" />
            </div>
        </div>
        )
    }

}





export default Search;