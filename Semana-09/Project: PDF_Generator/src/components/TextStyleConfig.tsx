
const TextStyleConfig = () => {
  return (
    <>
        <p>Text Style:</p>
        <div className="p-3 text-base border-neutral-300 border-2 rounded-lg">
        <label htmlFor="font-s">
            Font Size:
            <input type="text" name="font-s"
            className="p-3 text-base border-neutral-300 border-2 w-max"/>
        </label>
        <label htmlFor="font-c">
            Font Color:
            <input type="color" name="font-c"/>
        </label>
        <label htmlFor="font-b" className="flex flex-row">
            Bold:
            <input className="ml-1" type="checkbox" name="font-b"/>
        </label>
        </div>
    </>
  )
}

export default TextStyleConfig
