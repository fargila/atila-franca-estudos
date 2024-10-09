import GenPDF from "./components/GenPDF"

function App() {

  return (
   <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl">PDF Generator</h1>
      <div className="p-5 max-w-500 m-0 shadow-md bg-white">
        <GenPDF />
      </div>
   </div>
  )
}

export default App
