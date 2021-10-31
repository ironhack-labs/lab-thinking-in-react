import React from 'react';
function FilterableProductTable(probs) {
  const { data } = probs;
  return (
    <div>
      {data.name} {data.price}
    </div>
  );
}
export default FilterableProductTable;
