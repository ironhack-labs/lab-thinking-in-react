import React from "react";

function Table(props) {
  const showOneCategory = theCategory => {
    return props.allItems
      .filter(eachItem => {
        return eachItem.category === theCategory;
      })
      .map((item, i) => {
        let theStyleObject = {};
        if (!item.stocked) theStyleObject.color = "red";

        return (
          <div key={i} style={theStyleObject}>
            {item.name} {item.price}
          </div>
        );
      });
  };

  const showItems = () => {
    const cats = [];
    props.allItems.forEach(eachItem => {
      if (!cats.includes(eachItem.category)) {
        cats.push(eachItem.category);
      }
    });

    return cats.map((eachCat, i) => {
      return (
        <div key={i}>
          <h2>{eachCat}</h2>
          {showOneCategory(eachCat)}
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Item Table</h2>
      {showItems()}
    </div>
  );
}

export default Table;
