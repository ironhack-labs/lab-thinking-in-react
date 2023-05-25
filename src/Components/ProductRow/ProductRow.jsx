import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"

const ProductRow = ({ data }) => {

    const [products, setProducts] = useState(data);
    const [productsBackup, setProductssBackup] = useState(data);





    return (

        <>{
            data.map((elm) => {
                const color = elm.inStock ? 'black' : 'red'
                return (
                    <tr key={elm.id}>
                        <td style={{ color }}> {elm.name}</td>
                        <td>{elm.price}</td>
                    </tr>
                )
            })
        }
        </>
    )
}

export default ProductRow