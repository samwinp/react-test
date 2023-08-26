import React, { useState } from 'react';

function FormDataUpload() {
    const [file, setFile] = useState(null);
    const [textData, setTextData] = useState("");

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onTextChange = (e) => {
        setTextData(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('image', file);
        formData.append('text', textData);

        try {
            const response = await fetch('http://localhost:8000/upload/', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error("Error uploading data:", response.statusText);
            }
        } catch (error) {
            console.error("Error uploading data:", error);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input  type="file" onChange={onFileChange} />
             
                <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default FormDataUpload;
