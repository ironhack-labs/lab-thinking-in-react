import React, {Component} from 'react';
import './App.css';
import CategoryHeader from './CategoryHeader';
import SingleProduct from './SingleProduct';




class ProductTable extends Component{
    
    showProducts = (whichCategory) =>{
        const copyOfAllProducts = [...this.props.allTheProducts];
        const filteredProducts = copyOfAllProducts.filter((eachSingleProduct)=>{
            return eachSingleProduct.category === whichCategory
           
        })

       return filteredProducts.map((eachProduct, i)=>{
            return (
                <SingleProduct key={i} productName= {eachProduct.name} productPrice= {eachProduct.price} />
            )
        })

    }

        showCategoriesAndProducts = () =>{
          return   this.props.allTheCategories.map((eachCategory, i)=>{
              return (
                  <div key={i}>
                        <CategoryHeader categoryTitle={eachCategory}/>
                        {this.showProducts(eachCategory)}
                  </div>
              )

          })
        }


    render(){

        
       

        return(
            <div className ="full-table">

                <div className="product-table">
                <div>Name</div>
                <div>Price</div>
                </div>
                {this.showCategoriesAndProducts()}
                </div>
        )
    }

}

export default ProductTable;