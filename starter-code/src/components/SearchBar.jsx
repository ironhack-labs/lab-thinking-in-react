import React from 'react'

 class Search extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      search: ''
    }
  }

  updateSearch = (event) =>{
    const {value} = event.target
    this.setState({
      search: value
    })
    this.props.searchElement(value)
    
  }
  render(){
    return(
      <React.Fragment>
        <input type="text" value={this.state.search} placeholder="Search Elements" onChange={this.updateSearch.bind(this)} />
        <input type="checkbox"/>
      </React.Fragment>
    )
  }
}
 export default Search