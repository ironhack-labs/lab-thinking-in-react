import React, { Component } from 'react'

class SearchBar extends Component {

    constructor() {

        super()
        this.state = {
            text: '',
        }
    }


    
    render() {
        console.log(this.state.items)
        console.log(this.props.texto)
        return (<>
            <input type="text" className="inputText"  onChange={(text) => this.props.filter(text.target.value)} />
          
        </>
)}
}
export default SearchBar