import TextStyleConfig from './TextStyleConfig'
import ImageUpload from './ImageUpload'
import { useState } from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

pdfMake.vfs = pdfFonts.pdfMake.vfs


const GenPDF = () => 
{
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [fontS, setFontS] = useState('12')
    const [fontC, setFontC] = useState('#000')
    const [fontB, setFontB] = useState(false)
    const [image, setImage] = useState(null)

    const generatePdf = () => 
    {
        const customStyle = 
        {
            fontS: parseInt(fontS),
            color: fontC,
            bold: fontB,
        }

        const documentDefinition = 
        {
            content:
            [
                {text: `Title: ${title}`, style: 'customStyle'},
                {text: `Description: ${desc}`, style: 'customStyle'},
                image ? {image: image, width: 150} : null,
            ],
            styles:{ customStyle: customStyle }
        }

        pdfMake.createPdf(documentDefinition).download('yourGeneratedPDF-File.pdf')
    }

    return (
        <div>
        <label htmlFor="title">
            Title:
            <input 
            type="text" 
            name='title' 
            className="p-3 text-base border-neutral-300 border-2"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}/>
        </label>
        <label htmlFor="desc">
            Description:
            <input 
            type="text" 
            name='desc' 
            className="p-3 text-base border-neutral-300 border-2"
            value={desc}
            onChange={(e)=> setDesc(e.target.value)}/>
        </label>
        <TextStyleConfig 
        fontS={fontS} setFontS={setFontS}
        fontC={fontC} setFontC={setFontC}
        fontB={fontB} setFontB={setFontB}/>
        <ImageUpload setImage={setImage}/>
        <button
        onClick={generatePdf} 
        className='bg-blue-600 px-3 py-2 text-white font-semibold rounded-md'>Gerar PDF</button>
        </div>
    )
}

export default GenPDF
