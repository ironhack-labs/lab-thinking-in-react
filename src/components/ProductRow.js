//ProductRow.js



function ProductRow(props) {
    // const { product } = props;
        //{/*product.name*/}
    return(
        <tbody>
            <tr>
                <td>{props.name}</td>  
                <td>{props.price}</td>
            </tr>   
        </tbody>
    )
}

export default ProductRow;