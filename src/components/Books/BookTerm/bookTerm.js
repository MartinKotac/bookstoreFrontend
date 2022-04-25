import React from 'react';

const bookTerm =(props)=>{
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.bookCategory}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
        </tr>

    )
}

export default bookTerm;