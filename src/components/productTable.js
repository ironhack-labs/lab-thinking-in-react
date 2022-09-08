import ProductsRaw from "./productsRow"
import data from "../data.json"
import {useEffect, useState} from "react"

function ProductsTable({search, filterStock}) {
    const [productsToShow, setProductsToShow] = useState([])
    useEffect(() => {
        const timeout = setTimeout(() => {
            setProductsToShow(data)
        }, 1500)

        return () => {
            clearTimeout(timeout)
        }
    }, [])
    if (productsToShow.length === 0){
        return <center className="mt-5"><img src="/loading-gif.gif" alt="Loading img" /></center>
    }
  return(
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* {data.map((product) => <ProductsRaw name={product.name} price={product.price} inStock={data.inStock}/>)} */}
                {productsToShow
                    .filter((prod) => prod.name.toLowerCase().includes(search.toLowerCase()))
                        .filter((prod) => (filterStock ? prod.inStock : true))
                            .map((product) =>
                                    <ProductsRaw  key={product.id} {...product}/>)}
            </tbody>
        </table>
    </div>
  )
}

export default ProductsTable