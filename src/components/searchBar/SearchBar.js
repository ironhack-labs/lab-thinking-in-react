import React, {Component} from 'react';
import data from './../../data.json'

class SearchBar extends Component {

    constructor() {
        super()
        this.state = {           
                data: data.data, 
               
        }  
    }



    handleInputChange = e => {       
        
        const { name } = e.target
        const value =  e.target.value
        this.props.search(value)
        console.log(value)
     }

 

    


    render() {


        return (

            <>
          <div>
          <form >
                <label>Search</label><br />
                <input type="text" name="title" onChange={this.handleInputChange} value={this.state.data.name}  />
                <br/>
                <input type="checkbox" /> <label>Only show products on stocks</label>
                </form>
          </div>
            </>
        )
    }
}

export default SearchBar
