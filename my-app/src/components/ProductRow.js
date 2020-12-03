const product = ({ name, price }) => {
    return (
        <>
            <tr>
                <td>
                    <p>{name}</p>

                </td>

                <td>
                    <p>{price}</p>

                </td>
            </tr>
        </>
    )
}
export default product