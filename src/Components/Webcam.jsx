import React, { useRef} from "react";
import Webcam from "react-webcam";
const WebcamCapture = () => {
  const webcamRef = useRef(null);
  
  return (
    <div>
      <Webcam audio={false} ref={webcamRef} />
    </div>
  );
};
export default WebcamCapture;