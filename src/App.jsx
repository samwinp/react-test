import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/form'
import Test from './component/test'
import Palm from './component/palm'
import ImageUpload from './component/imageUpload'
import FormDataUpload from './component/FormDataUpload'
import WebcamCapture from './component/WebcamCapture'
import Chatroom from './pages/chatroom'







function App() {
    

  return (
    <>
    <div className='h-screen w-full bg-white flex justify-center items-center'>
          {/* <Form/> */}
          {/* <Test /> */}
          {/* <Palm /> */}
          {/* <ImageUpload /> */}
          {/* <FormDataUpload /> */}
          {/* <WebcamCapture /> */}
          <Chatroom />
    </div>     
    </>
  )
}

export default App
