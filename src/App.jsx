import { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SineIn'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
