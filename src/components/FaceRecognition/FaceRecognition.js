import React from 'react';
import './faceRecognition.css';


const FaceRecognition = ({ imgUrl }) => {
  return (
    <div className='img-box'>
      <img src={imgUrl} alt="" className='face-img' />
    </div>
  )
}

export default FaceRecognition