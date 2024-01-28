import React from 'react'

const Transaction = (props) => {
    const { title, amount ,index,trackerType,handleDelete} = props;
    return (
        <tr>
            <th scope="row">  
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            </th>
            <td>{title}</td>
            <td>&#x20B9;{amount}</td>
            <td>{trackerType}</td>
            <td>
                <button type="button" class="btn btn-outline-danger" onClick={e=>handleDelete(index)}>Remove</button>
            </td>
        </tr>
    )
}

export default Transaction
