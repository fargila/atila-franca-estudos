
const ImageUpload = () => {
  return (
    <div>
        <label htmlFor="up-image">
        Upload Image:
        <input type='file' name="up-image" accept="image/*"
        className="p-3 text-base border-neutral-300 border-2"/>
      </label>
    </div>
  )
}

export default ImageUpload
