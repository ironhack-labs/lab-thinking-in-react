import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';

const productTable = (props) => {
    //console.log(props.data.data)

    function getCategoriesAndItems(items) {
        //items.category
        let categories = {}
        for (let i = 0; i < items.length; i++) {
            if (!categories[items[i].category]){
                //console.log(categories[items[i].category])
                if (!categories[items[i].category]){
                    categories[items[i].category] = [];
                }
                categories[items[i].category].push(items[i])
            } else {
                categories[items[i].category].push(items[i])
            }
        }
        // console.log("here")
        // console.log(categories)
        return categories
    }

    let objOfData = getCategoriesAndItems(props.data.data);
// pleaseDelete={this.deleteContactHandler}
    return (
        <div>
            <div className="columns">
                <div className="column">Name</div>
                <div className="column">Price</div>
            </div>
            {    
                Object.keys(objOfData).map((oneCategory, index) => {
                    // console.log(objOfData[oneCategory]);
                    return <ProductCategoryRow data={objOfData[oneCategory]} categoryName={oneCategory} key={index} {...oneCategory} />                          
                })    
            }
        </div>
    )

}

export default productTable;