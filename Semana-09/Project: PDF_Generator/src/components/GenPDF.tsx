import TextStyleConfig from './TextStyleConfig'
import ImageUpload from './ImageUpload'
import { useState } from 'react'
import pdfMake from 'pdf/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

const GenPDF = () => {
  return (
    <div>
      <label htmlFor="title">
        Title:
        <input type="text" name='title' className="p-3 text-base border-neutral-300 border-2"/>
      </label>
      <label htmlFor="desc">
        Description:
        <input type="text" name='desc' className="p-3 text-base border-neutral-300 border-2"/>
      </label>
      <TextStyleConfig />
      <ImageUpload />
      <button className='bg-blue-600 px-3 py-2 text-white font-semibold rounded-md'>Gerar PDF</button>
    </div>
  )
}

export default GenPDF
