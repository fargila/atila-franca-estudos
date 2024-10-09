import React from "react"

interface ImageUploadProps {
    setImage: (image: string | ArrayBuffer | null) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setImage }) => {
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        const file = e.target.files?.[0]
        const reader = new FileReader()

        if(file)
        {
            reader.readAsDataURL(file)
            reader.onloadend = () => { setImage(reader.result) }
        }
    }
  
    return (
        <div>
            <label htmlFor="up-image">
            Upload Image:
            <input 
            onChange={handleImageUpload}
            type='file' 
            name="up-image" 
            accept="image/*"
            className="p-3 text-base border-neutral-300 border-2"/>
        </label>
        </div>
    )
}

export default ImageUpload
