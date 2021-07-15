import React from 'react';
// import ProductRow from './ProductRow';

const ProductTable = (props) => {
    console.log('props from ProductTable: ', props)
    // const addContact = () => {
    //     if (contacts.length < contactsData.length) {
    //         let random = Math.floor(Math.random() * contactsData.length);
    //         while (contacts.filter(e => e.id === contactsData[random].id).length > 0) {
    //             console.log('random WAS: ', random)
    //             random = Math.floor(Math.random() * contactsData.length);
    //             console.log('but it existed in the array already, so now random IS: ', random)
    //         }
    //         const newContact = contactsData[random];
    //         setContacts([...contacts, newContact]);
    //     }
    //     else console.log('There are no more contacts to be added');
    // }

    // const sortByName = () => {
    //     const newContacts = contacts.sort((a, b) => a.name.localeCompare(b.name))
    //     setContacts([...newContacts]);
    // }

    // const sortByPopularity = () => {
    //     const newContacts = contacts.sort((a, b) => b.popularity - a.popularity)
    //     setContacts([...newContacts]);
    // }

    // const deleteContact = (id) => {
    //     const newContacts = contacts.filter(e => e.id !== id); 
    //     setContacts([...newContacts]);
    // }

    return (
        <>
        {/* <div id="buttons">
            <button onClick={addContact}>Add Random Contact</button>
            <button onClick={sortByName}>Sort by name</button>
            <button onClick={sortByPopularity}>Sort by popularity</button>
        </div> */}
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default ProductTable;