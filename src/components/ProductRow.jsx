function ProductRow({ product, deleteProduct }) {
  return (
    <tr
      style={{
        backgroundColor: product.inStock ? '#23C552' : '#F84F31',
      }}
    >
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <button
          onClick={() => {
            deleteProduct(product.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;
