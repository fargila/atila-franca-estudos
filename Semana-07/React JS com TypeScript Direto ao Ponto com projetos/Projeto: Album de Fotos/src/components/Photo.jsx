
const Photo = ( {dados, setAmplifiedPhoto} ) => {
  return (
    <div className='photo' onClick={() => setAmplifiedPhoto(dados)}>
      {/* <img src={dados.urls.small} alt={dados.alt_description} /> */}
    </div>
  )
}

export default Photo
