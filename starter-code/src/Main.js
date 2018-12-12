import React, { Component } from 'react';

import SearchBar from './searchBar';

import ProductTable from './ProductTable'



// Do I need it?

class Main extends Component{


    state = {
        seachWord : ''
    }

    handleChange(arg){
        let  value  = arg.target.value

        this.setState({
            seachWord: value
        }, () =>{ console.log(this.state) })
    }

    render(){

        return (

            // Main Div
            <div className="main-div">
                {/* Search Bar */}
                <SearchBar  search = {e => {this.handleChange(e)}} />

                
                <ProductTable query={this.state.seachWord}/>



            </div>


        )

    }



}










export default Main;