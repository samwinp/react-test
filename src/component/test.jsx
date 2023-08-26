import React from 'react'
import { useState } from 'react'

function Test() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

 


   const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { name, email };

    const response = await fetch('http://127.0.0.1:8000/people', { // replace with your FastAPI endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    const ans = await response.json();
    console.log(ans)

  };


  return (
    
    <div>
      <form onSubmit={handleSubmit} >
        <input type='text ' value={name}  onChange={(e) => setName(e.target.value)}/>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type='submit' className='btn'>submit</button>
      </form>

    </div>
  )
}

export default Test