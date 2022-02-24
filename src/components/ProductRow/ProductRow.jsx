const ProductRow = ({ allData }) => {



    return (
        <>
            {
                allData.map(eachElm => {
                    return <tr>
                        <td className={!eachElm.inStock ? 'red' : 'black'}>{eachElm.name}</td>
                        <td>{eachElm.price}</td>
                    </tr>
                })
            }

        </>
    )
}

export default ProductRow