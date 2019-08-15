import React, {Component} from 'react'



class Search extends Component {
    constructor (props) {
      super(props)
      this.state = {
        name: ""
      }
    }
    render(){

      return (
        <form>
        <label>Search</label><br></br>
        <input type="text"></input>
      </form>
  )
 }
}




export default Search