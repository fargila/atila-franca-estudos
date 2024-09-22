import Gretting from './components/exercicios/Ex1'
import Counter from './components/exercicios/Ex2'
import TaskList from './components/exercicios/Ex3'

const Exercicios = () => {
    const tasks = [
        {id: 1, title: 'Lavar a louça'},
        {id: 1, title: 'Tirar o lixo'},
        {id: 1, title: 'Acariciar as baratas'},
    ]
  return (
    <>
        <Gretting name='Sergei'/>
        <Counter/>
        <TaskList array={tasks}/>
    </>
  )
}

export default Exercicios
