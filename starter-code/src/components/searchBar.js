import React, {Component} from 'react'

class Search extends Component {
   constructor (props) {
       super(props)
       this.state = {name: ''}
   }
    
handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value}, () => {
        this.props.searchProducts(this.state.name)

    })
}

   render() {
       return(
           <form>
               <label>
                   Search:
                   <input type ="text" name = 'name' value = {this.state.name} onChange = {this.handleInputChange}/>
               </label>
           </form>
       )
   }
}

export default Search