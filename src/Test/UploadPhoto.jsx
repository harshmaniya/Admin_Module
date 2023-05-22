import React, { useState } from 'react';
const axios = require('axios');

export default function UploadPhoto() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        // console.log(event.target.files);
    };




    const handleFormSubmit = async (event)=> {
        event.preventDefault();

        // const getURL = await uploadImage(file);
        // console.log(getURL);

        // const formData = new FormData();
        // for (let i = 0; i < files.length; i++) {
        //     formData.append('files', files[i]);
        // }


        // fetch('http://localhost:9000/api/test/upload', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         // Handle any errors
        //     });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="file" onChange={handleFileChange} multiple/>
            <button type="submit">Upload</button>
        </form>
    );
}