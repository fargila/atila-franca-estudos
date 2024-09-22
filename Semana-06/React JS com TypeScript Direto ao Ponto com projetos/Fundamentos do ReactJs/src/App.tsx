import UseEffectExample from './components/secao4->8/UseEffectExample'
import Timer from './components/secao4->8/Timer'
import './css/output.css'
import Counter from './components/secao4->8/Counter'
// import ChlidComponent from './components/hooks/ChildComponent'
// import { MyContextProvider } from './contexts/MyContext'
// import ContextValue from './components/hooks/ContextValue'
import DisplayWindowSize from './components/secao4->8/DisplayWindowSize'
import Container from './components/secao4->8/Container'
import UserProfile from './components/secao4->8/UserProfile'
import HeavyCode from './components/secao4->8/HeavyCode'

function App() {
  return (
    <>
        <UseEffectExample/>
        <Timer/>
        <Counter/>

        {/* <MyContextProvider>
          <ChlidComponent/>
          <ContextValue/>
        </MyContextProvider> */}

        <DisplayWindowSize/>
        <Container>
          <h1>Título do Container</h1>
          <p>Subtítulo do container</p>
        </Container>

        <UserProfile userId={2}/>
        <HeavyCode/>
    </>
  )
}

export default App
