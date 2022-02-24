function ProductRow({ eachProduct }) {

    // const [stock, setStock] = useState(true)
    let tdStyle = { color: 'black' }

    if (eachProduct.inStock === false) {
        tdStyle = { color: 'red' }
    }


    return (
        <tr>
            <td style={tdStyle}>
                {eachProduct.name}
            </td>

            <td>
                {eachProduct.price}
            </td>
        </tr>


    )
}

export default ProductRow