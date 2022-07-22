

const ProductRow = ({ name, price, inStock }) => {
    return(
        <div>
            <tr className='table-row'>
                <td style ={inStock ? null: {color: 'red'}}>{name}</td>
                <td>{price}</td>
            </tr>
        </div>
    )
}
export default ProductRow;