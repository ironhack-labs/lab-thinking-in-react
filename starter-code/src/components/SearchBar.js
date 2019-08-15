import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {

            name:''

        }
     }
     handleChangeInput = e => {

        this.setState({[e.target.name]: e.target.value}, () =>
        this.props.search(this.state)
        )
     }

        render() {
            return (

                <form>
            <label>Search</label><br></br>
        
            <input type="text" name='name' onChange={this.handleChangeInput}></input>
        </form>
            )
          }
      }
      export default SearchBar;
