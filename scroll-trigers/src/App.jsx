import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './Pages/prac'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <ScrollTriger/> */}
   <Practice/>  
    </>
  )
}

export default App
