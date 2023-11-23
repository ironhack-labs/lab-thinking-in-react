import { isCursorAtStart } from "@testing-library/user-event/dist/utils"


const ProductRow = ({ name, price, inStock }) => {

    const red = { color: 'red' }

    const black = { color: 'black' }


    return (

        <tr>
            <td style={!inStock ? red : black}>

                {name}

            </td>

            <td>
                {price}

            </td>
        </tr>
    )
}

export default ProductRow