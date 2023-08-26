import React, { useState } from 'react';

function ImageUpload() {
    const [file, setFile] = useState(null);

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        // console.log(typeof  e.target.file[0])
        console.log(file)
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('file', file);
        
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        
        
        try {
            const response = await fetch('http://127.0.0.1:8000/image', {
                method: 'POST',               
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error("Error uploading image:", response.statusText);
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };



    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onFileChange} accept=".jpeg, .png, .jpg"/>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default ImageUpload;
