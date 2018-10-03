import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import data from "../data.json"
import _ from "lodash"

class ProductTable extends React.Component {

    state = {
        data: data.data
    }

    categories = _.groupBy(this.state.data,e=> e.category)

    render() {
       console.log(this.categories)
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.categories).map(e=>{
                            return <ProductCategoryRow category={e} data={this.categories[e]}/>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default ProductTable;

