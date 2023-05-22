import React from 'react';
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

require("./style.css");
export default function TableRow(props) {
    const navigate = useNavigate();
    const res_id = Cookies.get('res_id_admin');
    const updateOnClick = async (e) => {
        console.log(e.target.id)
        const _id = e.target.id
        navigate(`/inventory/updateitem/${_id}`)
    }

    const deleteOnClick = async (e) => {
        console.log(e.target.id)
        const id = e.target.id;
        try {
            const response = await fetch(  `http://localhost:9000/api/admin/delete${id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ res_id })
            })
            // const data = await response.json();
            if(response.status === 200){
                alert("deleted successfully.");
                console.log("deleted successfully.");
                window.location.reload();
            }
        } catch (err) {
            console.error(err.message);
            alert("have some error");
        };
    }
    return (
        <>
            <tbody className="table-body">
                <tr>
                    <th scope="row">{props.Item_Id}</th>
                    <td>{props.Item_Name}</td>
                    <td>{props.Item_Photo_URL}</td>
                    <td>{props.Item_Description}</td>
                    <td>{props.Item_Category}</td>
                    <td>{props.Item_Price}</td>
                    <td>
                        <div className="button-container" >
                            <button type="button" id={props._id} className="btn btn-success" style={{marginRight:"-80px"}} onClick={updateOnClick}>
                                Update
                            </button>
                            <button type="button" id={props._id} className="btn btn-danger" onClick={deleteOnClick}>
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    )
};