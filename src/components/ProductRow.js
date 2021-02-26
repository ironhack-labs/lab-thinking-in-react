import React from 'react'

export default function ProductRow(props) {
    const product = props.product
    return (
        <li className="border-gray-400 flex flex-row mb-2">
            <div className={`${product.stocked ? '' : 'bg-red-100'} transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4`}>
                <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium dark:text-white">
                        {product.name}
                    </div>
                </div>
                <div className="text-gray-600 dark:text-gray-200">
                    {product.price}
                </div>
            </div>
        </li>
    )
}
