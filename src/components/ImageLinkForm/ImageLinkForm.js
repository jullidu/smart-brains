import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div className='link-form-box'>
      <h3 className='link-form-title'>
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
      </h3>
      <form action="#" className='link-form'>
        <input type="text" className='form-input' placeholder='enter your link' />
        <button className='form-button'>Detect</button>
      </form>

    </div>
  )
}

export default ImageLinkForm