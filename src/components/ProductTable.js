import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = (props) => {
    
    const productRows = props.products.map(product => {
            return (
                <ProductRow key={product.id} product={product} />
            )
        })
        return (
            <ul className="flex flex-col w-full p-1">
                <li className="border-gray-400 flex flex-row mb-2">
                    <div className="bg-gray-200 transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-bold dark:text-white">
                                NAME
                            </div>
                        </div>
                        <div className="font-bold text-gray-600 dark:text-gray-200">
                            PRICE
                        </div>
                    </div>
                </li>
                {productRows}
            </ul>
        )
    }

export default ProductTable
