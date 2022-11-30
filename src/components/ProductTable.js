import ProductRow from './ProductRow';

function ProductTable(props){

    const filteredArr = props.products.slice().filter(product => {
        return product.name.toLowerCase().includes(props.query.toLowerCase())
    });

    

 
   
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {filteredArr.map( product => (  
                    <ProductRow product={ product}  check={props.checked} />  
                ))}   
            </tbody>

        </table>
    )
}

export default ProductTable;