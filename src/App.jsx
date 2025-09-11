import { useState } from 'react'
import Semaforo from './semaforo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>
      <h1>Semáf0r0</h1> 
      <Semaforo/>
    </div>
      
    </>
  )
}

export default App
