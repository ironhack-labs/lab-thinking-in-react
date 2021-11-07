import React from 'react';
import listOfProducts from "../data.json"
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
// import ProductRow from './ProductRow';



class FilterableProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          totalProducts : listOfProducts.data,
          searchInputField : "",
          isThereStock : null,
          
        };

        // console.log(this.state.checkboxInputField)
        
    }

    setInputField = (searchInput) => {
        this.setState({searchInputField : searchInput})
        // console.log(sear)
    }
    

    setCheckboxInputField = (checkboxInput) => {
        this.setState({isThereStock : checkboxInput })
        
    }
    
    

    // productFilterCheck = (checkboxInput) => {
    //     this.setState((prevState,props)=>{
    //         const filteredTwice = prevState.total

    //         // this.state.totalProducts.filter((product)=>{

    //         // })
    //         console.log(filteredTwice)
    //         // if (product.stocked === true) {
            
    //         //     return ({isThereStock: product})
    
    //         // }else if (product.stocked === false){
    //         //     return({isThereStock : product})
    
    //         // }else {
    //         //     return ({isThereStock : this.state.totalProducts})
    //         //     }
            
    //     })
    
      
    // }

    // checkboxFilterItems = () => {
        

    // }

    render() {
        const productsFiltered = this.state.totalProducts.filter((product)=>{
            return product.name.toLowerCase().includes(this.state.searchInputField.toLowerCase())
            // const initialStock= this.state.isThereStock
            // if (product.stocked === true ) {        
            //     return ({isThereStock: product})
            // }  else {
            //     return ({isThereStock : initialStock})
            // }
           
        })

        const productsFilteredStock =  this.state.totalProducts.filter((product)=>{
        //     // const initialStock= [...this.state.isThereStock]
        //     const initialInputSearch= [...this.state.searchInputField]

        //     // console.log("stoc",initialStock)
        //     console.log("state", initialInputSearch)
        //     // if (product.stocked === true && isThereStock = "on") {        
        //     //     return ({isThereStock: product})
        //     // }
        //     //  return ({isThereStock : initialStock})
        })    

     
        return (
            <>
                <h1>IronStore</h1>
                <SearchBar productsList = {productsFiltered} setInputField = {this.setInputField} isThereStock={this.setCheckboxInputField} /> 
                <ProductTable productsList = {productsFiltered}/>

            </>
        )

    }
    
}

export default FilterableProductTable;