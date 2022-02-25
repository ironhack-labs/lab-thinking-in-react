
import ProductRow from './ProductRow'

function ProductTable (props){
    console.log(props)
return(
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
           <ProductRow products={props.products}/>
        </tbody>
    </table>
)
}

export default ProductTable