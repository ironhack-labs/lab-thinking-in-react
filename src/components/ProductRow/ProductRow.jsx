import { useEffect, useState } from "react"

const ProductRow = ({ product }) => {
    const { price, name, inStock } = product

    const [color, setColor] = useState('black')

    useEffect(() => {
        if (!inStock)
            setColor('red')
    })

    const divStyle = {
        color: color
    }

    return (
        <>
            <tr style={divStyle}>
                <td>{name}</td>
                <td>{price}</td>
            </tr >
        </>
    )
}

export default ProductRow