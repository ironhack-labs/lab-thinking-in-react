import { useState } from 'react';

const SearchBar = ({ products, setProducts }) => {
    // const [listProducts, setListProducts] = useState(products)

    const search = (eventHTML) => {
        const { value } = eventHTML.target;
        const productFilter = products.filter((product) => {
            return (
                product.name.toLowerCase().startsWith(value)

            )
        })

        setProducts(productFilter)
        console.log(productFilter)
        // setListProducts(productFilter)
        // setProducts(setListProducts)

    };

    return (



        <div>
            <input className="m-5" type="text" placeholder="Search Product" onChange={search} name="searchProduct" />
        </div>
    )

}

export default SearchBar