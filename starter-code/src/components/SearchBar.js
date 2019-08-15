
import React, {Component} from 'react'


class SearchBar extends Component {
   constructor(props){
       super(props);
       this.state={name: ''}
   }
   handleFormOnChange = (e) =>{
       const {name, value} = e.target
       console.log(name, value)
       this.setState ({
           [name]: value 
       }, () =>  this.props.searchItem(this.state.name))
       
   }
render() {
    return (
        <div className="container">
            <div className="row">
                <input type="text" className="filtro" name="name" value={this.state.name} onChange={this.handleFormOnChange} placeholder="Search..."/>
            </div>
        </div>
    )
}
}
export default SearchBar;
 