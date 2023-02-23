function Checkbox({ checked, handleChange }) {


    return (

        <div>
            <input type="checkbox" onChange={handleChange} />
            <p>{checked ? 'Checked' : 'Not Checked'}</p>
        </div>

    );

};

export default Checkbox;