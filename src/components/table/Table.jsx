import './Table.styles.css'

export const Table = (props) => {
    const { array } = props

    return (
        <table className="table">
            {array.map((key, index) => {
                return (
                    (index === 0 ?
                        <tr key={`${key}_${index}`}>
                            {Object.keys(key).map((tableTitles) => {
                                return (
                                    <th key={`${tableTitles} ${index}`}>
                                        {tableTitles}
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
                               tableValues === true? tableValues = "Sim" : tableValues = "Não"
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