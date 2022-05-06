
export default function ProductRow (props) {
    const filtered = props.products.filter(product => {
        return product.name.toLowerCase().includes(props.query.toLowerCase())
      })
      .filter(product => (props.checked === true) ? product.inStock === true : product
      );
    return <>
        <tbody>
            {filtered.map(product => {
                return (
                    <tr key={product.id}>
                        <td  style={{color: product.inStock === false ? 'red' : 'black'}}>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                )
            })}
        </tbody>
        </>
    
}

