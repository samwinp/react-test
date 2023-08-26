import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam'

function WebcamCapture() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={handleCapture}>Capture photo</button>
      {capturedImage && (
        <div>
          <h3>Captured Image:</h3>
          <img src={capturedImage} alt="Captured" />
        </div>
      )}
    </div>
  );
}

export default WebcamCapture;
