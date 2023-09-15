import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-300">
        <h1 className="text-5xl text-center font-bold p-10">Course Registration</h1>
      </div>
      <div className="flex gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-5">
            <Card></Card>
        </div>

        <div className="p-5 w-[400px]">
          
        </div>
      </div>
    </>
  )
}

export default App
