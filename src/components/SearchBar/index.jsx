import './index.css'

const SearchBar = ({ onChange, value, click, stateCheckBox }) => {
    return (
        <div className="input-group">
            <div className='form-outline'>
                <label htmlFor="">Search</label>
                <input class="form-control" onChange={onChange} type="text" />
            </div>
            <div className='check-box'>
                <input type="checkbox" onClick={click} checked={stateCheckBox} />
                <label htmlFor="">Only show products in stock</label>
            </div>
        </div>
    );
};

export default SearchBar;