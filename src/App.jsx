import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import { Outlet } from "react-router-dom";




function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <AppHeader />
      <Outlet />
    </main>
  )
}

export default App
