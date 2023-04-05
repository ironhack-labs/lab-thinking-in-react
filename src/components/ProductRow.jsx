import React from 'react'

function ProductRow({ productsList, searchProduct }) {

  const filteredProducts = productsList.filter((product) => (
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  ))

  return (
    <div className="relative overflow-x-auto w-screen h-[40rem]">
      <table className="w-1/2 mx-auto text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr
              className={product.inStock ? 'bg-gray-800 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer' : 'bg-red-500 text-white hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'}
              key={product.id}
            >
              <td
                className="px-6 py-4 font-medium whitespace-nowrap text-white">
                {product.name}
              </td>
              <td
                className="px-6 py-4 font-medium whitespace-nowrap text-white">
                {product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductRow