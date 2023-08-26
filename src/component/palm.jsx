import React, { useState } from 'react'

function Palm() {

    const [data, setData] = useState('')   
    const [messages , setMessage] = useState(['samwin', 'steve', 'pereira'])

    const appendMessages = () => {
        if(data.trim() != '')
        setMessage([...messages, data])
        setData('')
        console.log(messages)
    }

    const sendMessage = async (event) => {
        event.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/message', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data })
        })
        console.log(data)
        setData("")

        const show = await response.json()
        console.log(show)

    }




    return (
        <>
            <div className='flex flex-col'>
                <form>
                    <input type='text' placeholder='enter your name' value={data} onChange={(e) => setData(e.target.value)} />
                    <button type='submit' className='btn' onClick={sendMessage}>send message</button>
                </form>

                <div className='flex flex-col'>
                   {messages.map((e) => <p>{e}</p>)}
                </div>

            </div>

            <div>
               <input value={data} onChange={(e) => setData(e.target.value)}/>
               <button className='btn' onClick={appendMessages}>append</button>
            </div>


        </>
    )
}

export default Palm