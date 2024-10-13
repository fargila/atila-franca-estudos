import Form from "./components/Form"


function App() {

  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-white">Subscribe</h1>
      <p className="text-white">
      Get premium access to our Newsletter and stay tuned to your latest news
      </p>
      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Form />
      </div>
      <p className="text-slate-100 text-xs w-96 mt-2 text-center">
      After that, you'll recieve our e-mails with the best
      tips, updates and sales!</p>
    
    </div>
  )
}

export default App
