function ProductRow({ filteredProductsByInStock }) {
  console.log('ProductRow Products: ', filteredProductsByInStock);
  return (
    <>
      {filteredProductsByInStock.map((elem) => {
        return (
          <tr key={elem.id} style={{ color: elem.inStock ? 'black' : 'red' }}>
            <td className="elementName">{elem.name}</td>
            <td className="elementPrice">{elem.price}</td>
          </tr>
        );
      })}
    </>
  );
}

export default ProductRow;
