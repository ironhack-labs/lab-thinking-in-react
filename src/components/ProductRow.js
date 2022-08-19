import './ProductRow.css'; 

function ProductRow (props) {
  console.log(props)
    return (
      <tr>
        <td className="name-list" style= {{color: props.inStock === false ? "red" : "black" }}>{props.name}</td>
        <td className="price-list">{props.price}</td>
      </tr>
  )
}

export default ProductRow;