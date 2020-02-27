import React, { Component } from 'react';

export default class SearchBar extends Component {



    state = {
        products: this.props.products,
        name: "",
        price: 0,
        stocked: true,
    }

    // updateText(e, field) {

    //     this.setState({
    //         ...this.state,
    //         [field]: e.target.value
    //     });
    // }
    // searchProduct(e) {
    //     let newList = [];
    //     if (e.target.value !== ""){
    //         let newProducts = [...this.state.products];
    //         newList = newProducts.filter( product =>{
    //             const lc = product.name.toLowerCase();
    //             const filter = e.target.value.toLowerCase();
    //             return lc.icludes(filter);
    //         })
    //     }   
    //     else{
    //             newList = this.props.products;
    //         }
    //         this.setState({
    //             products:newList
    //         }

    //         )
    //     }

    handleChange(e){
e.preventDefault()

this.props.updateText(e.target.value)
this.setState({
    name : e.target.value,
})

    }
    

    render() {

        return (
            <div className="total">
                <input type="text" value={this.state.name} placeholder="search" onChange={e => this.handleChange(e)}/>

            </div>
        );
    }
}

