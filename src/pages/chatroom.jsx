import React from 'react'
import Navbar from '../component/messagecomp/navbar'
import Chatbox from '../component/messagecomp/Chatbox'

function Chatroom() {
  return (
    <>
     <div className='w-full h-screen'>
    <Navbar/>
    <Chatbox />
    {/* <SendMessage /> */}
     </div>
    </>
  )
}

export default Chatroom