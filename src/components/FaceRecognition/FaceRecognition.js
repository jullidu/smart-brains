import React from 'react';
import './faceRecognition.css';


const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className='img-box'>
      <img id='inputImg' src={imgUrl} alt="" className='face-img' />
      <div className='face-border' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
    </div>
  )
}

export default FaceRecognition