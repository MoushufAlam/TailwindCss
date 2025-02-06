import { useState } from 'react'
import Cards from '../Components/Cards'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let MyObj = {
    username :"Moushuf",
    Age : 22
  }

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-2xl mb-4'>
        Hello World
      </h1>

      <Cards username="ChairAurCode"/>
      <Cards/>
    </>
  )
}

export default App
