import UserForm from './components/UserForm'
import { FiSend } from 'react-icons/fi'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Thanks from './components/Thanks/Thanks'
import './App.css'
import ReviewForm from './components/ReviewForm/ReviewForm'
import { UseForm } from './hooks/useForm'
import Steps from './components/Steps/Steps'
import { useState } from 'react'

interface formFields 
{
  name: string,
  email: string,
  review: string,
  comment: string,
}

const formTemplate: formFields =
{
  name: '',
  email: '',
  review: '',
  comment: ''
}

function App() 
{
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key: string, value: string) =>
    {
      setData((prev) => 
      { return {...prev, [key]: value} })
    }
  const formComponents = 
  [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} key={0}/>, 
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} key={1}/>, 
    <Thanks data={data} key={2}/>
  ]
  const 
  {
    currentStep, 
    currentComponent, 
    changeStep, 
    isLastStep, 
    isFirstStep
  } = UseForm(formComponents)

  return (
    <div className='App'>
      <div className="header">
        <h2>Rate us!</h2>
        <p>We are glad with your purchase,
        please fill up  the form, and tell us
        more on what did you think about the product!</p>
      </div>
      <div className="form-container">
        {<Steps currentStep={currentStep}/>}
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">
              {currentComponent}
            </div>
          <div className="actions">
            {!isFirstStep && 
            (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Previous</span>
              </button>
            )}
            {!isLastStep ? 
            (
              <button type='submit'>
                <span>Next</span>
                <GrFormNext/>
              </button>
            ): 
            (
              <button type='button'>
                <span>Submit</span>
                <FiSend/>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
