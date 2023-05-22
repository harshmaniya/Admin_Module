import React, {useEffect, useState} from 'react';
import TableRow from './TableRow';
import {Link, useNavigate} from 'react-router-dom';
import Cookies from "js-cookie";

const Inventory = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const id = Cookies.get('res_id_admin');
    const getData = async () => {
        try {
            console.log("param "+id);
            const response = await fetch(`http://localhost:9000/api/admin/data${id}`);
            const data = await response.json();
            console.log(data.inventory);
            setData(data.inventory);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        if (!id) {
            navigate('/login');
        }else{
            getData()
        }
    }, []);
    return (
        <>
            <div className="table_main_mm pt-3">
                <div className='blo'>
                    <h1>Inventory</h1>
                </div>
                <div className="btn_add">
                    <Link to="addinventory">
                        <button className='btn btn-primary mb-2'>ADD</button>
                    </Link>
                </div>
                <div className="table_border_menu">
                    <div className="manege_manu">
                        <table className="table">
                            <thead className="table-head">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">photo URL</th>
                                <th scope="col">Description</th>
                                <th scope="col">Category</th>
                                <th scope="col">price</th>
                                <th scope="col">Update/Delete</th>
                            </tr>
                            </thead>
                            {data.map((val, index) => {
                                return(
                                    <TableRow
                                        Item_Id={index}
                                        Item_Name={val.iname}
                                        Item_Photo_URL={val.iphoto}
                                        Item_Description={val.idescription}
                                        Item_Category={val.icategory}
                                        Item_Price={val.iprice}
                                        _id={val._id}
                                    />
                                )})
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inventory;