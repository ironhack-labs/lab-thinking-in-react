import './Table.styles.css'

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const Table = (props) => {
    const { array } = props



    return (
        <table className="table">
            {array.map((key, index) => {
                return (
                    (index === 0 ?
                        <tr key={`${key}_${index}`}>
                            {Object.keys(key).map((tableTitles) => {
                                const capitalizeTitles = capitalizeFirstLetter(tableTitles).replace(/([A-Z])/g, ' $1').trim()
                                return (
                                    <th key={`${tableTitles} ${index}`}>
                                        {capitalizeTitles}
                                    </th>)
                            })
                            }</tr> :
                        <></>
                    )
                )
            })}
            {array.map((val, index) => {
                return (
                    <tr key={`${val}_${index}`}>
                        {Object.values(val).map((tableValues, index) => {
                            if(typeof tableValues === "boolean"){
                                tableValues === true? tableValues = "Yes" : tableValues = "No"
                            }
                            return (
                                <td key={`${tableValues} ${index}`}>
                                    {tableValues}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </table>
    );
}