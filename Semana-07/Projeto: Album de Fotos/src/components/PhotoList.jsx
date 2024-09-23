import Photo from "./Photo"

const PhotoList = ({ photos, setAmplifiedPhoto }) => {
  return (
    <div className="album">
      {photos.map((photo) => (
        <Photo key={photo.id} dados={photo} setAmplifiedPhoto={setAmplifiedPhoto}/>
      ))}
    </div>
  )
}

export default PhotoList
