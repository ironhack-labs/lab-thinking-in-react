import './Search.css'

const SearchBar = ({onChange, value, click, stateCheckBox}) => {
    return(
        <div className="container">
            <div className='search'>
                <label htmlFor="">Search</label>
                <input onChange={onChange}  type="text" vlaue={value}/>
            </div>
            <div className='check-box'>
                <input type="checkbox" onClick={click} checked={stateCheckBox}/>
                <label htmlFor="">Only show products in stock</label>
            </div>
        </div>
    );
};

export default SearchBar;