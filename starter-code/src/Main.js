import React, {Component} from 'react';
import './App.css';
import Search from './Search';
import ProductTable from './ProductTable';
import allTheStuff from './data.json'


class Main extends Component{
    state={
        allTheProducts : allTheStuff.data,  
        filteredProducts: allTheStuff.data,
        searchTerm: '',
        allTheCategories: [],
        showOnlyStuffInStock: false
    }


    componentWillMount(){
        this.getAllCategories()
        this.showStockedOrNotStocked()
    }



    getAllCategories = () => {
        const arrayOfCategories = [];
        this.state.filteredProducts.forEach((theProduct)=>{
            if(!arrayOfCategories.includes(theProduct.category)){
                arrayOfCategories.push(theProduct.category);
            }
        })
        this.setState({allTheCategories: arrayOfCategories},()=>{
            // console.log('=-=--=-=-=-=-=-=-', this.state)
        })
    }



    updateShowStocked = () =>{
        console.log('updating state')
        this.setState({showOnlyStuffInStock: !this.state.showOnlyStuffInStock}, ()=>{
            this.showStockedOrNotStocked()
        });
    }




    updateSearchTerm = (e) => {
        const theNewSearchTerm = e.target.value;

        console.log('calling the function')
        this.setState({searchTerm: theNewSearchTerm}, ()=>{

            this.filterTheProducts();
        })


    }


    showStockedOrNotStocked = () =>{
        const copyOfProducts = [...this.state.allTheProducts];
        const newShorterList = copyOfProducts.filter((eachProduct)=>{
            if(this.state.showOnlyStuffInStock === true){
                return eachProduct.stocked === true 
            }else{
                return eachProduct.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            } 
        })
        this.setState({filteredProducts: newShorterList})
    }



    filterTheProducts = () =>{
        if(this.state.searchTerm === ''){   
            console.log("YES THERE IS NO SEARCH TERM")
            this.setState({filteredProducts: [...this.state.allTheProducts]}, ()=>{
                this.getAllCategories()
            })
            return;
        }
        const copyOfProducts = [...this.state.allTheProducts];
        const newShorterList = copyOfProducts.filter((eachProduct)=>{

            if(this.state.showOnlyStuffInStock === true){
                return eachProduct.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) && eachProduct.stocked === true
            }else{
                return eachProduct.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            }  
        })
        console.log('==================', newShorterList)

        this.setState({filteredProducts: newShorterList}, ()=>{
            this.getAllCategories();
        })
    }

render(){
    console.log(this.state)
    return(
        <div className = "orange-box"> 
            <Search toggleStocked = {this.updateShowStocked} sendSearchTermToMain = {this.updateSearchTerm} theActualSearchTerm={this.state.searchTerm}  allTheProducts = {this.state.allTheProducts} />
            <ProductTable allTheProducts = {this.state.filteredProducts} allTheCategories = {this.state.allTheCategories} />
        </div>
    )
}



}



export default Main;


