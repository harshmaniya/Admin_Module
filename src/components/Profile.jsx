import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

export default function Profile() {

    const navigate = useNavigate();
    const id = Cookies.get('res_id_admin');
    // console.log(id);
    const [file, setFile] = useState(null);
    // const id = "369526";
    var url = "";
    const handleFileChange = async (event) => {
        setFile(event.target.files[0]);
    };

    async function uploadImage(imageData) {
        const formData = new FormData();
        formData.append('key', '9b165c72650a83ff7d102df75422d224');
        formData.append('image', imageData);
        const response = await axios.post('https://api.imgbb.com/1/upload', formData);
        console.log(response.data.data.url);
        url = response.data.data.url;
        setPhoto(url);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await uploadImage(file);
        console.log("url1: ", url);
        const response = await fetch(`http://localhost:9000/api/admin/upload${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'photo': url})
        });
        console.log(await response.json());
    }
    const [res_name, setRes_name] = useState("");
    const [address, setAddress] = useState("");
    const [res_contact_number, setRes_contact_number] = useState("");
    const [email, setEmail] = useState("");
    const [nostaff, setNostaff] = useState("");
    const [notable, setNotable] = useState("");
    const [owner_name, setOwner_name] = useState("");
    const [owner_contact_no, setOwner_contact_no] = useState("");
    const [photo, setPhoto] = useState("");

    const getData = async () => {
        try {
            console.log("param " + id);
            const response = await fetch(`http://localhost:9000/api/admin/data${id}`);
            const data = await response.json();

            console.log(data);
            setRes_name(data.res_name)
            setAddress(data.address)
            setRes_contact_number(data.res_contact_number)
            setEmail(data.email)
            setNostaff(data.nostaff)
            setNotable(data.notable)
            setOwner_name(data.owner_name)
            setOwner_contact_no(data.owner_contact_no)
            setPhoto(data.photo)
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        if (!id) {
            navigate('/login');
        } else {
            getData();
        }
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="mt-5">Profile</h1>
                    <div className="col-sm" style={{marginTop: "5%"}}>
                        <div className="input-group mb-3 w-50">
                            <span className="input-group-text bg-light">Restaurant Name</span>
                            <input type="text" className="form-control w-50" value={res_name} disabled/>
                        </div>
                        <div className="input-group mb-3 w-50">
                            <span className="input-group-text bg-light">Address</span>
                            <input type="text" className="form-control w-50" value={address} disabled/>
                        </div>
                        <div className="input-group mb-3 w-50">
                            <span className="input-group-text bg-light">Restaurant Contact No</span>
                            <input type="text" className="form-control w-25" value={res_contact_number} disabled/>
                        </div>
                        <div className="input-group mb-3 w-50">
                            <span className="input-group-text bg-light">Email</span>
                            <input type="text" className="form-control w-50" value={email} disabled/>
                        </div>
                        <div className="input-group mb-3 w-50">
                            <span className="input-group-text bg-light">No of Staff</span>
                            <input type="text" className="form-control w-50" value={nostaff} disabled/>
                        </div>
                        <div className="input-group mb-3 w-50">
                            <span className="input-group-text bg-light">No of Table</span>
                            <input type="text" className="form-control w-50" value={notable} disabled/>
                        </div>
                        <div className="input-group mb-3 w-50">
                            <span className="input-group-text bg-light">Owner Name</span>
                            <input type="text" className="form-control w-50" value={owner_name} disabled/>
                        </div>
                        <div className="input-group mb-3 w-50">
                            <span className="input-group-text bg-light">Owner Contact No</span>
                            <input type="text" className="form-control w-50" value={owner_contact_no} disabled/>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div>
                            <form encType="multipart/form-data" onSubmit={handleFormSubmit}>
                                <div className="mt-5">
                                    <label htmlFor="formFile" className="form-label">Photo</label>
                                    <input className="form-control w-75" type="file" onChange={handleFileChange}/>
                                    <input type="submit" style={{marginLeft: "-0px"}} value="Upload"
                                           className="btn btn-primary mt-3"/>
                                </div>
                                <div className="input-group mt-5 w-50">
                                    <img src={photo} className="w-100"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}