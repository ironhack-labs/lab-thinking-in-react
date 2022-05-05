import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'


function SearchBar(loading, onChange) {
    return (
        <div className="input-group mb-3 mt-3">
            <input type="text" className="form-control" placeholder="Search..." aria-label="Search icons" aria-describedby="basic-addon2" onChange={onChange} />
            <div className="input-group-append">
                {loading ?
                    <span className="input-group-text" id="basic-addon2">Searching...</span> :
                    <span className="input-group-text" id="basic-addon2">Ready</span>
                }
            </div>
        </div>
    )
}

export default SearchBar





