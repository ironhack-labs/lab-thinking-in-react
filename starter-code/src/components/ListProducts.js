import React, {Component} from 'react';
import data from '../data.json';
import CardProduct from './CardProduct'
import Search from './SearchBar'

class List extends Component {
    constructor(props){
        super(props)
        this.state = {data: data.data,
        filteredState : [],
        }
        console.log(data)
    }
    
    
    enviarAlPapa=(filtered)=>{
        const copy = {...this.filteredState}
        this.setState({filteredState: filtered})
    }
    render(){
        


        return(
            <div>
            
            <Search filtered={this.enviarAlPapa}/>
            
            {
                this.state.filteredState.length ?
                this.state.filteredState.map((product,idx) =>  <CardProduct key={idx}{...product}/>):
                this.state.data.map((product,idx) => <CardProduct key={idx}{...product}/>)
            }
            </div>
            
        )
    }
}

export default List