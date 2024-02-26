export function SearchBar(props) {


    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        if (name === "check") {
          props.filterProducts("", value);
        } else {
          props.filterProducts(value);
        }
      };

      return (
        <div >
          <input style={{width:'50%'}}
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            name="search"
          />
          <label htmlFor="check">
            <input
              name="check"
              type="checkbox"
              onChange={handleChange}
            />
            Only show products in stock
          </label>
        </div>
      );
    }