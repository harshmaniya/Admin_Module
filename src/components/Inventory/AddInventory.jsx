import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function AddInventory() {
    const navigate = useNavigate();
    const [iname, setIname] = useState("");
    const [idescription, setIdescription] = useState("");
    const [iprice, setIprice] = useState("");
    const [icategory, setICategory] = useState("");
    const [iphoto, setIphoto] = useState(null);

    const id = Cookies.get('res_id_admin');
    var url = "";
    const handleFileChange = async (event) => {
        setIphoto(event.target.files[0]);
    };

    async function uploadImage(imageData) {
        const formData = new FormData();
        formData.append('key', '9b165c72650a83ff7d102df75422d224');
        formData.append('image', imageData);
        const response = await axios.post('https://api.imgbb.com/1/upload', formData);
        console.log(response.data.data.url);
        url = response.data.data.url;
    }

    const handalSubmit = async (e) =>{
        e.preventDefault();
        await uploadImage(iphoto);
        console.log("url1: ",url);
        try {
            const response = await fetch(`http://localhost:9000/api/admin/additem${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    iname,
                    idescription,
                    iprice,
                    icategory,
                    'iphoto': url
                })
            })
            console.log(response.status);
            if (response.status === 200) {
                // alert("Item added!");
                navigate("/inventory");
            } else if (response.status === 500) {
                alert("error");
            }
         } catch (err) {
             alert(err.message);
        }
    }


    return(
        <>
            <div className="container">
                <h1 className="mt-5">Add Item</h1>
                    <form method="post" onSubmit={handalSubmit}>
                        <div className="row g-3">
                            <div className="w-50 mt-5">
                                <div className="col-12 mb-3">
                                    <label className="form-label">Item Name</label>
                                    <input className="form-control" type="text"
                                           value={iname}
                                           onChange={(e) => setIname(e.target.value)} />
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="form-label">Item Description</label>
                                    <input className="form-control" type="text"
                                           value={idescription}
                                           onChange={(e) => setIdescription(e.target.value)} />
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="form-label">Item Price</label>
                                    <input className="form-control" type="text"
                                           value={iprice}
                                           onChange={(e) => setIprice(e.target.value)} />
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="form-label">Item Category</label>
                                    <input className="form-control" type="text"
                                           value={icategory}
                                           onChange={(e) => setICategory(e.target.value)} />
                                </div>

                                <div className="col-12 mb-3">
                                    <label className="form-label">Item Photo</label>
                                    <input className="form-control" type="file"
                                           // value={iphoto}
                                           onChange={handleFileChange} />
                                </div>

                                <button className="btn btn-primary btn-lg mt-3" style={{marginLeft:"0px"}} type="submit">
                                    ADD ITEM
                                </button>
                            </div>
                        </div>
                    </form>
            </div>
        </>
    )
}