import React from 'react'

const AmplifiedPhoto = ({photo, setAmplifiedPhoto}) => {
  return (
    <div className='amplified-photo-bg' onClick={() => {setAmplifiedPhoto(null)}}>
      <div className="amplified-photo-container">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </div>
  )
}

export default AmplifiedPhoto
