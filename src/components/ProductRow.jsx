

function ProductRow(props) {
  const color = props.isInStock ? 'black' : 'red'


    return (

      <>
      
        <tr>
          <td  key={props.name}>
          <p style={{color:color }}>{props.name}</p>
          </td>

          <td key={props.price}>{props.price}</td>
          
        </tr>
      </> 
    )

  
}

export default ProductRow



