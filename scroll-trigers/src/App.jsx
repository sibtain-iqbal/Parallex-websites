import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './Pages/prac'
import { SvgImg } from './Pages/Svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* <ScrollTriger/> */}
   {/* <Practice/>   */}
   <SvgImg/>
    </div>
  )
}

export default App
