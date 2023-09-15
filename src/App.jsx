import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-blue-900 text-white">
        <h1 className="text-5xl text-center font-bold p-10">Course Registration</h1>
      </div>
      <Card></Card>
      
    </>
  )
}

export default App
