import React from "react"

interface TextStyleConfigProps {
    fontS: string
    setFontS: (value: string) => void
    fontC: string
    setFontC: (value: string) => void
    fontB: boolean
    setFontB: (value: boolean) => void
}

const TextStyleConfig: React.FC<TextStyleConfigProps> = ({fontS, setFontS, fontC, setFontC, fontB, setFontB}) => {
  return (
    <>
        <p>Text Style:</p>
        <div className="p-3 text-base border-neutral-300 border-2 rounded-lg">
        <label htmlFor="font-s" className="flex flex-row">
            <p>Font Size:</p>
            <input type="text" name="font-s" value={fontS} onChange={(e) => setFontS(e.target.value)}
            className="ml-1 pl-2 text-base border-neutral-300 border-2 w-max"/>
        </label>
        <label htmlFor="font-c" className="flex flex-row">
            <p>Font Color:</p>
            <input type="color" value={fontC} onChange={(e) => setFontC(e.target.value)} name="font-c" className="ml-1"/>
        </label>
        <label htmlFor="font-b" className="flex flex-row">
            Bold:
            <input className="ml-1" value={fontB} onChange={(e) => setFontB(e.target.value)} type="checkbox" name="font-b"/>
        </label>
        </div>
    </>
  )
}

export default TextStyleConfig
