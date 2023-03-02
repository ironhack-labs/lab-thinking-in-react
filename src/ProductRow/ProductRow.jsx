import './ProductRow.css'

const ProductRow = ({ product }) => {

    const { category, price, inStock, name, id } = product

    const styleRed = {
        color: 'red'
    }

    return (
        <>

            <tbody>
                <tr>
                    <th style={!inStock ? styleRed : undefined}>{name} </th>
                    <th>{price}</th>
                </tr>
            </tbody>

        </>
    )
}

export default ProductRow