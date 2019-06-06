import React, {Component} from 'react';
import data from '../data.json';


class Search extends Component {
    constructor(props){
        super(props)
        this.state= {
            search:'',
            data: data.data,
            
        }
    }
   
    handleChange = (e)=>{
        let {name, value} = e.target
        this.setState({
            [name]:value
        })

        const filtered = this.state.data.filter( elm => elm.name.toLowerCase().includes(this.state.search.toLowerCase()))
        this.props.filtered(filtered)
    }

  


    render(){
        return(
            <form>
                <label>Search<br></br><br></br>
                <input type="text" name="search" value={this.state.search} onChange={(e)=>this.handleChange(e)}/>
                </label>
            </form>
        )
    }
}

export default Search