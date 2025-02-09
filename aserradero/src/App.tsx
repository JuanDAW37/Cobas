import { useState } from 'react'
import './App.css'
import {Button} from './components'

function App() {

  // -> hook de estado de React relaciona un variable para que se pueda usar en el renderizado
  // -> useState(0) es el valor inicial de la variable count
  // -> setCount es la función que se usa para cambiar el valor de la variable count
  // -> count es la variable que se usa en el renderizado
  const [count, setCount] = useState(0) 
  const [name, setName] = useState('Juan')

  const countMore = () => {
    setCount((count) => count + 1) 
  }  

  const changeName = () => {
    setName('Pedro')
  }

  return (
    <>      
        <Button label={`La cuenta es ${count}`} parentMethod = {countMore}/>
        <p>{`El nombre es ${name}`}</p>            
        <Button label={`Cambiar a ${name}`} parentMethod = {changeName}/>
    </>
  )
}

export default App
