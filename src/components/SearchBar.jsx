import { useState } from "react";

function Search({ items }) {
    const [filteredItems, setFilteredItems] = useState(items);

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filtered = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        );
        setFilteredItems(filtered);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleSearchChange}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Search;
