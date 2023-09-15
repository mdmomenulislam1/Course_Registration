import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'

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

        <div className="m-2 w-[400px]">
          <Cart selectedCourses={selectedCourses}></Cart>
        </div>
      </div>
    </>
  )
}

export default App
