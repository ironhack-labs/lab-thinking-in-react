import './ProductRow.css'
function ProductRow({ item }) {
    return (
        item.map((eitem) => {
            
        return(
            <tr key={eitem.name}>
                {!eitem.inStock ? (<td className='red'>{eitem.name}</td>)
                : (<td>{eitem.name}</td>)}
                <td>{eitem.price}</td>
            </tr>
        )}
    )
)}

export default ProductRow;
