import React, {Component} from 'react';

class SearchBar extends Component {

  

    handleChange = (e) => {
        this.props.recibirInfoFunc(e.target.value)

    }

    recibirInfoFunc(){
        this.setState({
            termino : this.word
        })
    }

    

render(){
    // const search = this.state.search
    return(
        <div>
            <input type="text" name="" onChange={e => this.handleChange(e)}></input>
        </div>
    )
}
}   

export default SearchBar;