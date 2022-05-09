import data from "../data.json";
import React, { useState } from "react";
import ProductRow from "./ProductRow";

function ProductTable(props) {

    // const [products, setProducts] = useState(data)

    return(
        <div>
            <table style={{ display: 'flex', flexDirection: 'column' }}>
               
                <thead style={{height: '50px', backgroundColor: '#C4C4C4', borderRadius: '10px'}}>
                    <tr style={{ display: 'flex' }}> 
                        <th style={{ textAlign: 'center', flex: '1'}}>Name</th>
                        <th style={{ textAlign: 'center', flex: '1'}}>Price</th>
                    </tr>
                </thead>
                <tbody style={{ display: 'flex', flexDirection: 'column'}} >
                { props.myFilteredArray.map((productObject)=> {
                return (
                    <ProductRow product={productObject}/>
                )})}
                </tbody>
            </table>
        </div>
    );
}



export default ProductTable;

//finished the day trying to print the product table on the page.