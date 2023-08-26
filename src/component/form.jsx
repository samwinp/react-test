import { useState } from "react";
import React from 'react'
import axios from 'axios'

function Form() {
    const [location, setLocation] = useState("")
    const [total_sqft, setTotalSqft] = useState(0)
    const [BHK, setBHK] = useState(0)
    const [bath, setBath] = useState(0)
    const [number, setNumber] = useState(0)
    const [selectedImage, setSelectedImage] = useState(null)

    const imageChange = (e) => {
        setSelectedImage(e.target.files[0])
        console.log(typeof e.target.files[0])
    }

  
  
    
    const handelSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:8000/default", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ number })

        })

        const data = await response.json();

        setNumber(data['number'])
        console.log(data)

    }

const getLocatoin = async () => {
    const response = await fetch("http://localhost:8000/get_location_name",{
       method: 'POST',
       headers: {
           "Content-Type": "application/json",
       }
    })

    const places = await response.json();

    console.log(places['data_columns'])
}

// http://localhost:5000/predict_home_price

const getPrediction = async (event) => {
    event.preventDefault()
   const response = await fetch("http://127.0.0.1:8000/predict_home_price",{
       method: 'POST',
       headers: {
           "Content-Type": "application/json",  
       },
       body: JSON.stringify({location, total_sqft, BHK, bath})
   })

   const data = await response.json();

   console.log(data['total_sqft'])   


}

const sayHi = async () => {
    const response = await fetch("http://127.0.0.1:8000/sayhi",{
        method: 'POST', 
        headers: {
            "Content-Type" : 'applicatoin/json'
        },        
    })

    const ans = await response.json();
    console.log(ans)
}


//you are working on this currently
const getRPS = async (event) => {
    event.preventDefault()
    const formData = new FormData()

    formData.append('file', selectedImage)

    try {
        const response = await axios.post('http://localhost:8000/predit', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error uploading file: ', error);
    }


}

    return (
        <>
            {/* <div className="h-1/2 w-1/2 p-4 bg-indigo-100 flex items-center justify-center flex-col">
                <form onSubmit={getPrediction} className="flex flex-col">
                    <input
                       className="p-2 bg-slate-600 border border-white"
                       type="text"
                       value={location}
                       onChange={(e) => setLocation(e.target.value)}    
                       placeholder="Enter location"                   
                    />
                    <input
                      className="p-2 bg-slate-600 border border-white"
                      type="number"
                      value={total_sqft}
                      onChange={(e) => setTotalSqft(e.target.value)}
                    />
                    <input
                    className="p-2 bg-slate-600 border border-white"
                    type="number"
                    value={BHK}
                    onChange={(e) => setBHK(e.target.value)}
                    />
                    <input
                    className="p-2 bg-slate-600 border border-white"
                    type="number"
                    value={bath}
                    onChange={(e) => setBath(e.target.value)}
                    />
                    <button type="submit" className="mt-2 btn">Submit</button>
                </form>
                
              <button className="btn" onClick={getLocatoin}>get location</button>
            </div> */}

            {/* <div className="h-1/2 w-1/2 p-4 bg-indigo-100 flex items-center justify-center flex-col">
                <p>the number is {number}</p>
                <form onSubmit={handelSubmit}>
                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
                <button type="submit" className="mt-2 btn">Submit</button>
                </form>          
                
            </div>

            <div>
                <btn className="btn" onClick={sayHi} >sayHi</btn>
            </div> */}
           
           <form onSubmit={getRPS}>
             <input type="file"  onChange={imageChange} />
             <button className="btn">send image</button>
            </form>


        </>
    )
}

export default Form