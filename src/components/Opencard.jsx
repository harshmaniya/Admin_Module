import React from 'react';
import { Link } from 'react-router-dom';
import Tdata from '../Tdata';

const OpenCard = (props) => {
    return (
        <>
            <tbody className="table-body">
                <tr>
                    <th scope="row">{props.Table_No}</th>
                    <td>{props.Time_Slot}</td>
                    <td>{props.Name}</td>
                    <td>{props.No_of_Person}</td>
                    <td>{props.Contact}</td>
                    <td>{props.Occasion}</td>
                </tr>
            </tbody>
        </>
    )
}

export default OpenCard

