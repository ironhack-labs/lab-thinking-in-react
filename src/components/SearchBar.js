

export default function SearchBar(props) {

	const handleInputChange = event => {
		
		props.setQueryProp(event.target.value)
	}

	return (
		<div>
			<input type="search" onChange={handleInputChange} />
        
        </div>
	)
}

