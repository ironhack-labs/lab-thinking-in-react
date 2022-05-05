import { useState } from 'react';

function SearchBar({ jsonData }) {

    const [name, setName] = useState('');

    const [foundName, setFoundName] = useState(jsonData)

    const filter = (e) => {
        const keyword = e.target.value;


        if (keyword !== '') {
            const results = jsonData.filter((elm) => {
                return elm.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundName(results);
        } else {
            setFoundName(jsonData);
        }
        setName(keyword);
    };
    return (
        <div className="container">
            <input
                type="search"
                value={name}
                onChange={filter}
                className="input"
                placeholder="Filter"
            />
            <div >
                {foundName && foundName.length > 0 ? (
                    foundName.map((elm) => (
                        <li key={elm.id} >
                            <span>{elm.name}</span>
                        </li>
                    ))
                ) : (
                    <h1>No results found!</h1>
                )}
            </div>
        </div>
    );
}



export default SearchBar