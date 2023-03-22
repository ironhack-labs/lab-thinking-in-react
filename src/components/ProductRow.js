const ProductRow = ({ product }) => {
  const productStock = {
    color: 'red',
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4" style={!product.inStock ? productStock : undefined}>{product.name}</td>
      <td className="px-6 py-4">{product.price}</td>
    </tr>
  );
};

export default ProductRow;