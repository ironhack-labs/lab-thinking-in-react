
export default function CheckBox(props) {


   const handleCheckBox = event => {
        
        props.setCheckProp(event.target.checked)
        
    }

	return (
		<div>
            <p>Show products in Stock
            <input type="checkBox" onChange={handleCheckBox}/>
            </p>
        </div>
	)
}