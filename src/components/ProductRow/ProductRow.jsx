import { useEffect, useState } from 'react';
import '../ProductRow/ProductRow.css'

const ProductRow = ({ productsRow }) => {

    const [row, setRows] = useState([]);

    let tempClass = ''

    useEffect(() => {
        loadRows()
    }, [row])

    const loadRows = () => {
        setRows(productsRow)
    }

    const checkStock =()=>{

    }

    return (

        <>
            {row?.map((product) => {
                return (
                    <tr>

                        {!product.inStock ? <td className="red">{product.name}</td> : <td className="white">{product.name}</td>}

                        <td>{product.price}</td>
                    </tr>
                )
            })
            }
        </>
    )

}

export default ProductRow