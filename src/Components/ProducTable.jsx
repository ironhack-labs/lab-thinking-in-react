import './Components.css'
function ProductTable(props){
    return(
        <table border="1" id="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>  
         </tr>
        </thead>
        <tbody>
{props.products.map((oneProduct)=>{
    return(
        <tr key={oneProduct.key}>
        <td style={{ color: oneProduct.inStock === true ? 'black' : 'red' }}>{oneProduct.name} </td>
        <td>{oneProduct.price}</td>
        </tr>

    )
})}

        </tbody> 
    </table>
    )
}
export default ProductTable;