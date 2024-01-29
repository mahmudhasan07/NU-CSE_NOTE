import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar.jsx/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <div>
      <NavBar></NavBar>
      </div>
    </section>
  )
}

export default App
