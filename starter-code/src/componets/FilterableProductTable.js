import React, {Component} from 'react'
import ProducTable from './ProductTable'
import SearchBar from './SearchBar'
class FilterableProductTable extends Component{

    constructor(props){
        super(props)
        this.state={sports:this.props.products.data}
    }
   
handleImputChange = food =>{
    let x = food.target.value

    const foodsCopy = [...this.props.products.data]

    const nuevoArray = foodsCopy.filter(elm =>


        elm.name.toLowerCase().includes(x.toLowerCase()))


    this.setState({
        sports: nuevoArray
    })


}

render(){

    return(

        <div className="container">
            <SearchBar search={this.handleImputChange}/>
            <ProducTable product={this.state.sports}/>

        </div>
    )

        
    
}
}

export default FilterableProductTable